'use server';

import { redirect } from 'next/navigation';
import { registerSchema } from '@/app/(auth)/schemas/authSchemas';
import { ZodError } from 'zod';
import { createClient } from '../server';
import { revalidatePath } from 'next/cache';

export async function handleRegister(
  state: unknown,
  formData: FormData
): Promise<{
  success: boolean;
  errors?: { field: string; message: string }[];
}> {
  const name = formData.get('name') as string;
  const number = formData.get('number') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const validation = registerSchema.safeParse({
    name,
    number,
    email,
    password,
  });

  if (!validation.success) {
    const zodError = validation.error as ZodError;

    const errors = zodError.issues.map((e) => ({
      field: e.path.join('.'),
      message: e.message,
    }));

    return { success: false, errors: errors };
  }

  const supabase = await createClient();
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    if (error.message.includes('Email address')) {
      return {
        success: false,
        errors: [{ field: 'email', message: 'Invalid Email address' }],
      };
    }
    return {
      success: false,
      errors: [{ field: 'general', message: error.message }],
    };
  }

  if (data.user) {
    const { error: profileError } = await supabase.from('profiles').insert({
      id: data.user.id,
      name,
      number,
      email,
    });

    if (profileError) {
      const msg = profileError.message;

      if (msg.includes('duplicate key value violates unique constraint')) {
        return {
          success: false,
          errors: [
            { field: 'profile', message: 'This email is already registered.' },
          ],
        };
      }

      if (msg.includes('null value in column')) {
        return {
          success: false,
          errors: [
            { field: 'profile', message: 'Some required fields are missing.' },
          ],
        };
      }

      if (msg.includes('value too long for type')) {
        return {
          success: false,
          errors: [{ field: 'profile', message: 'Some fields are too long.' }],
        };
      }

      if (msg.includes('violates foreign key constraint')) {
        return {
          success: false,
          errors: [
            { field: 'profile', message: 'Invalid reference to related data.' },
          ],
        };
      }
      return {
        success: false,
        errors: [{ field: 'profile', message: msg }],
      };
    }
  }
  // revalidatePath('/', 'layout');
  redirect('/currencies');
}

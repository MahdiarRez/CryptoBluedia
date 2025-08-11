'use server';

import { redirect } from 'next/navigation';
import { supabase, supabaseAdmin } from '../supabase/server';
import { loginSchema, registerSchema } from '@/app/(auth)/schemas/authSchemas';
import { ZodError } from 'zod';

export async function handleLogin(
  state: unknown,
  formData: FormData
): Promise<{
  success: boolean;
  errors?: { field: string; message: string }[];
}> {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const validation = loginSchema.safeParse({ email, password });

  if (!validation.success) {
    const zodError = validation.error as ZodError;

    const errors = zodError.issues.map((e) => ({
      field: e.path.join('.'),
      message: e.message,
    }));

    return { success: false, errors: errors };
  }
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    let userMessage = 'An unexpected error occurred. Please try again later.';

    switch (error.message) {
      case 'Invalid login credentials':
        userMessage = 'Email or password is incorrect. Please try again.';
        break;
      case 'User not found':
        userMessage = 'No account found with this email. Please sign up.';
        break;
      case 'Email not confirmed':
        userMessage =
          'Your email is not confirmed yet. Please check your inbox.';
        break;
      case 'Password is too weak':
        userMessage =
          'Password is too weak. Please choose a stronger password.';
        break;
      case 'Too many requests':
        userMessage =
          'Too many login attempts. Please wait and try again later.';
        break;
    }

    return {
      success: false,
      errors: [{ field: 'general', message: userMessage }],
    };
  }

  redirect('/currencies');
}

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
    const { error: profileError } = await supabaseAdmin
      .from('profiles')
      .insert({
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

  redirect('/currencies');
}

'use server';

import { redirect } from 'next/navigation';
import { loginSchema } from '@/app/(auth)/schemas/authSchemas';
import { ZodError } from 'zod';
import { createClient } from '../server';

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

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({
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

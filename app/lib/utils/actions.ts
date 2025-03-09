'use server';

import { supabaseClient } from '@/app/lib/utils/supabaseClient';

export type FormState =
  | null
  | { email: string; password: string; firstName: string; lastName: string }
  | string;

export async function formActionLogin(
  prevState: FormState,
  formData: FormData
) {
  const email = formData.get('email') as string;
  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;
  const password = formData.get('password') as string;

  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });

  const { error } = await supabaseClient.auth.signUp({
    email,
    password,
  });

  if (email && password && firstName && lastName) {
    return { email, password, firstName, lastName };
  }

  console.log('data form : ', formData);
  return 'hi';
}

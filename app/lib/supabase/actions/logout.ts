'use server';

import { redirect } from 'next/navigation';
import { createClient } from '../server';
import { revalidatePath } from 'next/cache';
import { useAuth } from '@/app/context/authContext';

export async function handleLogout() {
  const supabase = await createClient();

  await supabase.auth.signOut();

  redirect('/login');
}

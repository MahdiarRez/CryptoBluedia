import { createClient } from '../../lib/supabase/server';

export async function getUserWithProfile() {
  const supabase = await createClient();

  // گرفتن یوزر
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    return {
      user: null,
      profile: null,
      error: userError ?? new Error('User not found'),
    };
  }

  const { data: profile, error: profileError } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single();

  return {
    user,
    profile,
    error: profileError,
  };
}

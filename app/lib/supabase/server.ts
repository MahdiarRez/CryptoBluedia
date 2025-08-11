import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error(
    'Missing Supabase environment variables. Please check your .env file or Vercel environment variables.'
  );
}
export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '');
export const supabaseAdmin = createClient(
  supabaseUrl || '',
  supabaseServiceKey || ''
);

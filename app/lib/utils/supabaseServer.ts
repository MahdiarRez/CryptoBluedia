import { createClient } from '@supabase/supabase-js';
import { Currency } from './types';
import { notFound } from 'next/navigation';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
if (!supabaseUrl || !supabaseAnonKey) {
  console.error(
    'Missing Supabase environment variables. Please check your .env file or Vercel environment variables.'
  );
}
const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '');

// Fetch all cryptocurrencies from Supabase
export async function fetchCurrencies(): Promise<Currency[] | undefined> {
  try {
    const { data, error } = await supabase
      .from('currenciesList')
      .select('*')
      .order('rank2025', { ascending: true });
    console.log('data : ,', data);

    if (error) {
      console.error('Error fetching cryptocurrencies:', error);
      throw new Error(`Failed to fetch cryptocurrencies: ${error.message}`);
    }

    return data || [];
  } catch (error) {
    console.error('Error in fetchCurrencies:', error);
  }
}

// Fetch a single cryptocurrency by ID
export async function fetchCurrencyById(id: string): Promise<Currency> {
  try {
    const { data, error } = await supabase
      .from('currenciesList')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error(`Error fetching cryptocurrency with ID ${id}:`, error);
      throw new Error(`Failed to fetch cryptocurrency: ${error.message}`);
    }

    if (!data) {
      throw new Error(`Cryptocurrency with ID ${id} not found`);
    }

    return data;
  } catch (error) {
    console.error(`Error in fetchCurrencyById for ${id}:`, error);
    notFound();
  }
}

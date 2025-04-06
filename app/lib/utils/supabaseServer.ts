import { createClient } from '@supabase/supabase-js';
import { Currency } from './types';
import { notFound } from 'next/navigation';

// Check if environment variables are defined
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Validate environment variables
if (!supabaseUrl || !supabaseAnonKey) {
  console.error(
    'Missing Supabase environment variables. Please check your .env file or Vercel environment variables.'
  );
}

// Create a Supabase client for client-side operations
const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '');

/**
 * Fetch all cryptocurrencies from Supabase
 */
export async function fetchCurrencies(): Promise<Currency[] | undefined> {
  try {
    const { data, error } = await supabase.from('currenciesList').select('*');
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

/**
 * Fetch a single cryptocurrency by ID
 */
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

/**
 * Fetch cryptocurrencies with filtering and sorting
 */
// export async function fetchFilteredCurrencies(
//   options: {
//     search?: string;
//     sortBy?: 'rank' | 'price' | 'change';
//     limit?: number;
//   } = {}
// ): Promise<CryptoCurrency[]> {
//   try {
//     let query = supabase.from('cryptocurrencies').select('*');

//     // Apply search filter if provided
//     if (options.search) {
//       const searchTerm = `%${options.search.toLowerCase()}%`;
//       query = query.or(`name.ilike.${searchTerm},symbol.ilike.${searchTerm}`);
//     }

//     // Apply sorting
//     switch (options.sortBy) {
//       case 'price':
//         query = query.order('current_price', { ascending: false });
//         break;
//       case 'change':
//         query = query.order('price_change_percentage_24h', {
//           ascending: false,
//         });
//         break;
//       case 'rank':
//       default:
//         query = query.order('market_cap_rank', { ascending: true });
//     }

//     // Apply limit if provided
//     if (options.limit) {
//       query = query.limit(options.limit);
//     }

//     const { data, error } = await query;

//     if (error) {
//       console.error('Error fetching filtered cryptocurrencies:', error);
//       throw new Error(`Failed to fetch cryptocurrencies: ${error.message}`);
//     }

//     return data || [];
//   } catch (error) {
//     console.error('Error in fetchFilteredCurrencies:', error);
//     // Return mock data as fallback
//   }
// }

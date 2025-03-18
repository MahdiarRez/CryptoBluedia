import { createClient } from '@supabase/supabase-js';
import { CryptoCurrency } from './types';

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
export async function fetchCurrencies(): Promise<CryptoCurrency[]> {
  try {
    const { data, error } = await supabase
      .from('cryptocurrencies')
      .select('*')
      .order('market_cap_rank', { ascending: true });

    if (error) {
      console.error('Error fetching cryptocurrencies:', error);
      throw new Error(`Failed to fetch cryptocurrencies: ${error.message}`);
    }

    return data || [];
  } catch (error) {
    console.error('Error in fetchCurrencies:', error);
    // Return mock data as fallback
    return getMockCurrencyData();
  }
}

/**
 * Fetch a single cryptocurrency by ID
 */
export async function fetchCurrencyById(id: string): Promise<CryptoCurrency> {
  try {
    const { data, error } = await supabase
      .from('cryptocurrencies')
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
    // Return mock data for the specific ID as fallback
    const mockData = getMockCurrencyData();
    const currency = mockData.find((c) => c.id === id);
    if (currency) return currency;
    throw new Error(`Cryptocurrency with ID ${id} not found`);
  }
}

/**
 * Fetch cryptocurrencies with filtering and sorting
 */
export async function fetchFilteredCurrencies(
  options: {
    search?: string;
    sortBy?: 'rank' | 'price' | 'change';
    limit?: number;
  } = {}
): Promise<CryptoCurrency[]> {
  try {
    let query = supabase.from('cryptocurrencies').select('*');

    // Apply search filter if provided
    if (options.search) {
      const searchTerm = `%${options.search.toLowerCase()}%`;
      query = query.or(`name.ilike.${searchTerm},symbol.ilike.${searchTerm}`);
    }

    // Apply sorting
    switch (options.sortBy) {
      case 'price':
        query = query.order('current_price', { ascending: false });
        break;
      case 'change':
        query = query.order('price_change_percentage_24h', {
          ascending: false,
        });
        break;
      case 'rank':
      default:
        query = query.order('market_cap_rank', { ascending: true });
    }

    // Apply limit if provided
    if (options.limit) {
      query = query.limit(options.limit);
    }

    const { data, error } = await query;

    if (error) {
      console.error('Error fetching filtered cryptocurrencies:', error);
      throw new Error(`Failed to fetch cryptocurrencies: ${error.message}`);
    }

    return data || [];
  } catch (error) {
    console.error('Error in fetchFilteredCurrencies:', error);
    // Return mock data as fallback
    return getMockCurrencyData();
  }
}

// Mock data function for fallback
function getMockCurrencyData(): CryptoCurrency[] {
  return [
    {
      id: 'bitcoin',
      symbol: 'btc',
      name: 'Bitcoin',
      image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png',
      current_price: 61245.78,
      market_cap: 1183450000000,
      market_cap_rank: 1,
      total_volume: 28760000000,
      price_change_percentage_24h: 2.34,
      circulating_supply: 19318000,
    },
    {
      id: 'ethereum',
      symbol: 'eth',
      name: 'Ethereum',
      image: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png',
      current_price: 3245.92,
      market_cap: 389670000000,
      market_cap_rank: 2,
      total_volume: 14320000000,
      price_change_percentage_24h: -1.23,
      circulating_supply: 120250000,
    },
    {
      id: 'polkadot',
      symbol: 'dot',
      name: 'Polkadot',
      image:
        'https://assets.coingecko.com/coins/images/12171/large/polkadot.png',
      current_price: 5.23,
      market_cap: 5800000000,
      market_cap_rank: 12,
      total_volume: 320000000,
      price_change_percentage_24h: -2.34,
      circulating_supply: 1200000000,
    },
    // Add more mock data as needed
  ];
}

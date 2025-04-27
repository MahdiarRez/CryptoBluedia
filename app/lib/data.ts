'use server';

import { createClient } from '@/app/lib/utils/supabaseClient';
import { Currency, TrendingCoin } from './utils/types';
import { notFound } from 'next/navigation';
import { supabase } from './utils/supabaseServer';

interface MarketNewsItem {
  id: string;
  head: string;
  description: string;
  image: string;
  created_at: string; // Assuming a timestamp
}

export async function getMarketNews(): Promise<MarketNewsItem[]> {
  const supabaseClient = createClient();
  const { data, error } = await supabaseClient.from('marketNews').select('*');

  if (error) {
    console.error('Error fetching market news:', error);
    return [];
  }

  return data as MarketNewsItem[];
}

export async function fetchTrendingCoins(): Promise<
  TrendingCoin[] | undefined
> {
  const supa = createClient();
  try {
    const { data, error } = await supa.from('trendingCoins').select('*');

    if (error) {
      console.error('Error fetching Trending Coins:', error);
      throw new Error(`Failed to fetch Trending Coins: ${error.message}`);
    }

    return data || [];
  } catch (error) {
    console.error('Error in fetch Trending Currencies:', error);
  }
}

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

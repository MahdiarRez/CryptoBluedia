'use server';

import { createClient } from '@/app/lib/utils/supabaseClient';
import { Currency, TrendingCoin } from './utils/types';
import { supabase } from './utils/supabaseServer';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    'x-cg-demo-api-key': 'CG-BFWDBUWwk7346RxDahTiAzkn',
  },
};

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

export async function fetchCurrencyById(id: string): Promise<Currency> {
  const { data, error } = await supabase
    .from('currenciesList')
    .select('*')
    .eq('id', id)
    .single();

  if (error?.code === 'PGRST116') {
    throw new Error('NOT_FOUND');
  }

  if (error) {
    throw new Error('FETCH_ERROR');
  }

  return data as Currency;
}

export async function getCurrencyPrice(id: string): Promise<any> {
  try {
    const res = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true`,
      options
    );
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return await res.json();
  } catch (err) {
    console.error('Fetch error:', err);
    throw err;
  }
}

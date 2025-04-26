'use server';

import { createClient } from '@/app/lib/utils/supabaseClient';
import { TrendingCoin } from './utils/types';

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

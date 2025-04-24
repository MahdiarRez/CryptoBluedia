'use client';

import { createClient } from './utils/supabaseClient';
import { TrendingCoin } from './utils/types';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    'x-cg-demo-api-key': 'CG-BFWDBUWwk7346RxDahTiAzkn',
  },
};

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

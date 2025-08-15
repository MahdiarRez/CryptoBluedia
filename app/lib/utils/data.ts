'use server';

import { supabase } from '../supabase/client';
import { createClient } from '../supabase/server';
import { Currency, TrendingCoin } from './../types';
import { cache } from 'react';

const cgOptions = {
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

// Fetch all market news items from Supabase
export async function getMarketNews(): Promise<MarketNewsItem[]> {
  const supabase = await createClient();
  try {
    const { data, error } = await supabase.from('marketNews').select('*');

    if (error) {
      console.error(
        '[getMarketNews] Supabase error:',
        error.code,
        error.message
      );
      return [];
    }

    return (data ?? []) as MarketNewsItem[];
  } catch (err) {
    console.error('[getMarketNews] Unexpected error:', err);
    return [];
  }
}

// Fetch all trending coins from Supabase
export async function fetchTrendingCoins(): Promise<TrendingCoin[]> {
  const supabase = await createClient();
  try {
    const { data, error } = await supabase.from('trendingCoins').select('*');

    if (error) {
      console.error(
        '[fetchTrendingCoins] Supabase error:',
        error.code,
        error.message
      );
      return [];
    }

    return (data ?? []) as TrendingCoin[];
  } catch (err) {
    console.error('[fetchTrendingCoins] Unexpected error:', err);
    return [];
  }
}

// Fetch all currencies from Supabase, ordered by rank2025
export async function fetchCurrencies(): Promise<Currency[]> {
  const supabase = await createClient();
  try {
    const { data, error } = await supabase
      .from('currenciesList')
      .select('*')
      .order('rank2025', { ascending: true });

    if (error) {
      console.error(
        '[fetchCurrencies] Supabase error:',
        error.code,
        error.message
      );
      return [];
    }

    return (data ?? []) as Currency[];
  } catch (err) {
    console.error('[fetchCurrencies] Unexpected error:', err);
    return [];
  }
}

// Fetch a single currency by its ID
export async function fetchCurrencyById(id: string): Promise<Currency> {
  const supabase = await createClient();
  try {
    const { data, error } = await supabase
      .from('currenciesList')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      // PGRST116 is the Supabase code for "No rows found"
      if (error.code === 'PGRST116') {
        throw new Error('NOT_FOUND');
      }
      console.error(
        '[fetchCurrencyById] Supabase error:',
        error.code,
        error.message
      );
      throw new Error('FETCH_ERROR');
    }

    return data as Currency;
  } catch (err) {
    console.error('[fetchCurrencyById] Unexpected error:', err);
    throw err;
  }
}

// Fetch price data for a given currency ID from CoinGecko
export async function getCurrencyPrice(id: string): Promise<{
  [key: string]: {
    usd: number;
    usd_market_cap: number;
    usd_24h_vol: number;
    usd_24h_change: number;
  };
}> {
  try {
    const res = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${encodeURIComponent(
        id
      )}&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true`,
      cgOptions
    );

    if (!res.ok) {
      throw new Error(`[getCurrencyPrice] HTTP error: ${res.status}`);
    }

    const json = await res.json();
    return json;
  } catch (err) {
    console.error('[getCurrencyPrice] Fetch error:', err);
    throw err;
  }
}

export async function fetchCurrenciesPublic(): Promise<Currency[]> {
  try {
    const { data, error } = await supabase
      .from('currenciesList')
      .select('*')
      .order('rank2025', { ascending: true });

    if (error) {
      console.error('[fetchCurrenciesPublic] Supabase error:', error);
      return [];
    }

    return (data ?? []) as Currency[];
  } catch (err) {
    console.error('[fetchCurrenciesPublic] Unexpected error:', err);
    return [];
  }
}

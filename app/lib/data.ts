'use server';

import { createClient } from '@/app/lib/utils/supabaseClient';

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

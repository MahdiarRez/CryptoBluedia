'use server';

import { createClient } from '@/app/lib/utils/supabaseClient';

interface MarketNewsItem {
  id: string;
  head: string;
  description: string;
  image: string;
  created_at: string; // Assuming a timestamp
}

const options = { method: 'GET', headers: { accept: 'application/json' } };

export async function getMarketNews(): Promise<MarketNewsItem[]> {
  await new Promise((resolve) => {
    setTimeout(resolve, 10000);
  });
  const supabaseClient = createClient();
  const { data, error } = await supabaseClient.from('marketNews').select('*');

  if (error) {
    console.error('Error fetching market news:', error);
    return [];
  }

  return data as MarketNewsItem[];
}
// --------------------- convert currencies list data to array --------------------
function transformApiData(apiData: unknown) {
  if (!apiData) return [];

  return Object.entries(apiData).map(([assetName, values]) => {
    return {
      DigitalAsset: assetName,
      Price: values.usd,
      Change: values.usd_24h_change,
      Volume: values.usd_24h_vol,
      MarketCap: values.usd_market_cap,
      Chart: 'N/A', // Add logic to generate chart links here
      BluediaScoring: 'N/A', // Add logic to generate Bluedia scoring here
    };
  });
}

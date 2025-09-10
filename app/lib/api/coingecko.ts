import { CoinGeckoData } from '../types';

const COINGECKO_BASE = 'https://api.coingecko.com/api/v3';
const COINGECKO_HEADERS = {
  'x-cg-demo-api-key': process.env.COINGECKO_API_KEY || '',
};

// هندلر عمومی برای کوین‌گکو
async function cgFetch(path: string, revalidate: number = 60) {
  const res = await fetch(`${COINGECKO_BASE}${path}`, {
    headers: COINGECKO_HEADERS,
    next: { revalidate }, // کش سمت سرور
  });

  if (!res.ok) {
    console.error('CoinGecko API Error:', res.status, path);
    throw new Error('Failed to fetch from CoinGecko');
  }

  return res.json();
}

// گرفتن لیست همه کوین‌ها (کش 1 روز)
export async function getCoinsList() {
  return cgFetch('/coins/list', 86400);
}

// گرفتن اطلاعات کامل یک کوین (کش 1 دقیقه)
export async function getCoinData(id: string) {
  return cgFetch(`/coins/${id}?market_data=true`, 60);
}

// گرفتن قیمت ساده (کش 30 ثانیه)
export async function getSimplePrice(ids: string[], vs: string[] = ['usd']) {
  return cgFetch(
    `/simple/price?ids=${ids.join(',')}&vs_currencies=${vs.join(',')}`,
    30
  );
}

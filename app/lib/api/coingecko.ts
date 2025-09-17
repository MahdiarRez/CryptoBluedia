import { coinMap } from '../constants';
import { CoinData, CoinGeckoData } from '../types';

// lib/coingecko.ts
const COINGECKO_API = 'https://api.coingecko.com/api/v3';

// هندلر fetch عمومی
async function cgFetch(path: string) {
  const res = await fetch(`${COINGECKO_API}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      'x-cg-demo-api-key': process.env.COINGECKO_API_KEY || '',
    },
    next: { revalidate: 60 }, // کش سمت سرور (۱ دقیقه)
  });

  if (!res.ok) {
    console.error('CoinGecko API Error:', res.status, path);
    throw new Error('Failed to fetch from CoinGecko');
  }
  return res.json();
}

// گرفتن لیست همه کوین‌ها
export async function getAllCoinsList() {
  return cgFetch('/coins/list');
}

export async function fetchCoinsData(coins: string[]): Promise<CoinData[]> {
  // اسم‌ها رو به اسم رسمی کوین‌گکو تبدیل کن
  const mappedCoins = coins.map((coin) => {
    const lower = coin.toLowerCase();
    return coinMap[lower] || lower.replace(/\s+/g, '-');
  });

  const ids = mappedCoins.join(',');

  try {
    const res = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true`
    );

    if (!res.ok) throw new Error('Fetch failed from CoinGecko');

    const data: Record<string, CoinGeckoData> = await res.json();

    // مرتب کردن خروجی طبق لیست دیتابیس
    return coins.map((coin, i) => ({
      name: coin,
      id: mappedCoins[i],
      marketData: data[mappedCoins[i]],
    }));
  } catch (err: any) {
    console.error('Error fetching coins:', err.message);
    return [];
  }
}

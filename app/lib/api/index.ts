export * from './coingecko';
export * from './binance';

import { coinMap } from '../constants';
import redis from '../redis/index';
import { CoinData, CoinGeckoData } from '../types';

const CACHE_TTL = 60; // ثانیه

export async function fetchCoinsData(coins: string[]): Promise<CoinData[]> {
  // اسم‌ها رو به اسم رسمی کوین‌گکو تبدیل کن
  const mappedCoins = coins.map((coin) => {
    const lower = coin.toLowerCase();
    return coinMap[lower] || lower.replace(/\s+/g, '-');
  });

  const ids = mappedCoins.join(',');
  const cacheKey = `coins:${ids}`;

  try {
    // بررسی کش
    const cached = await redis.get(cacheKey);

    if (cached) {
      const parsed = JSON.parse(cached);
      const isExpired = Date.now() - parsed.timestamp > CACHE_TTL * 1000;

      if (!isExpired) {
        return parsed.data; // داده کش معتبر
      }
    }
    console.log(
      '📡 Fetching new data from CoinGecko at:',
      new Date().toISOString()
    );
    // Fetch از CoinGecko
    const res = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true`,
      { next: { revalidate: 0 } }
    );

    if (!res.ok) throw new Error('Fetch failed from CoinGecko');

    const data: Record<string, CoinGeckoData> = await res.json();

    // مرتب کردن خروجی طبق لیست دیتابیس
    const result = coins.map((coin, i) => ({
      name: coin,
      id: mappedCoins[i],
      marketData: data[mappedCoins[i]],
    }));

    // ذخیره در Redis
    await redis.set(
      cacheKey,
      JSON.stringify({ timestamp: Date.now(), data: result })
    );

    return result;
  } catch (err: any) {
    console.error('Error fetching coins:', err.message);
    return [];
  }
}

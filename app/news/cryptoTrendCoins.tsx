'use client';
import {
  CardShadcn,
  CardContentShadcn,
  CardHeaderShadcn,
  CardTitleShadcn,
} from '@/app/components/cardShadcn';
import { fetchTrendingCoins } from '../lib/api';
import { useEffect, useState } from 'react';
import { TrendingCoin } from '../lib/utils/types';
import { RiNumber1, RiNumber2, RiNumber3, RiNumber4 } from 'react-icons/ri';

export function CryptoTrendingCoins() {
  const [data, setData] = useState<TrendingCoin[]>([]);
  useEffect(() => {
    async function fetchData() {
      const trendingCoins = await fetchTrendingCoins();
      console.log(trendingCoins);

      if (!trendingCoins) {
        throw new Error('cas');
      }
      setData(trendingCoins);
    }
    fetchData();
  }, []);
  return (
    <CardShadcn className="rounded-2xl w-full">
      <CardHeaderShadcn className="flex flex-row items-center justify-between">
        <CardTitleShadcn className="text-xl">Trending Coins</CardTitleShadcn>
      </CardHeaderShadcn>
      <CardContentShadcn>
        <div className="space-y-4">
          {data?.map((coin) => (
            <div key={coin.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-md bg-LightBlue  text-white">
                  {coin.id == '1' && <RiNumber1 />}
                  {coin.id == '2' && <RiNumber2 />}
                  {coin.id == '3' && <RiNumber3 />}
                  {coin.id == '4' && <RiNumber4 />}
                </div>
                <div>
                  <p className="font-medium">{coin.name}</p>
                  <p className="text-xs text-muted-foreground">{coin.icon}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContentShadcn>
    </CardShadcn>
  );
}

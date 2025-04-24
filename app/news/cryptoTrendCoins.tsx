import {
  CardShadcn,
  CardContentShadcn,
  CardHeaderShadcn,
  CardTitleShadcn,
} from '@/app/components/cardShadcn';
import { Suspense } from 'react';
import { CryptoTrendingCoinsSkeleton } from '../components/ui/skeletons/trendingCoinsSkeleton';
import CryptoTrendCoinsCard from './cryptoTrendCoinsCard';

export function CryptoTrendingCoins() {
  return (
    <CardShadcn className="w-full rounded-2xl">
      <CardHeaderShadcn className="flex flex-row items-center justify-between">
        <CardTitleShadcn className="text-xl">Trending Coins</CardTitleShadcn>
      </CardHeaderShadcn>
      <CardContentShadcn>
        <Suspense fallback={<CryptoTrendingCoinsSkeleton />}>
          <CryptoTrendCoinsCard />
        </Suspense>
      </CardContentShadcn>
    </CardShadcn>
  );
}

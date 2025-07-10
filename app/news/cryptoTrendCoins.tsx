import {
  CardShadcn,
  CardContentShadcn,
  CardHeaderShadcn,
  CardTitleShadcn,
} from '@/app/components/cardShadcn';
import { Suspense } from 'react';
import { CryptoTrendingCoinsSkeleton } from '../components/skeletons/trendingCoinsSkeleton';
import CryptoTrendCoinsCard from './cryptoTrendCoinsCard';
import { BsArrowUpSquareFill } from 'react-icons/bs';

export function CryptoTrendingCoins() {
  return (
    <CardShadcn className="w-full rounded-2xl">
      <CardHeaderShadcn className="flex flex-row items-center justify-between">
        <CardTitleShadcn className="text-xl flex-row flex items-center gap-2">
          <BsArrowUpSquareFill className="text-LightBlue" />
          Trending Coins
        </CardTitleShadcn>
      </CardHeaderShadcn>
      <CardContentShadcn>
        <Suspense fallback={<CryptoTrendingCoinsSkeleton />}>
          <CryptoTrendCoinsCard />
        </Suspense>
      </CardContentShadcn>
    </CardShadcn>
  );
}

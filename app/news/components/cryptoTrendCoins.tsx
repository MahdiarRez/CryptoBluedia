import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card';
import { Suspense } from 'react';
import CryptoTrendCoinsCard from './cryptoTrendCoinsCard';
import { BsArrowUpSquareFill } from 'react-icons/bs';
import { CryptoTrendingCoinsSkeleton } from '@/app/components/skeletons/trendingCoinsSkeleton';

export function CryptoTrendingCoins() {
  return (
    <Card className="w-full rounded-2xl">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl flex-row flex items-center gap-2">
          <BsArrowUpSquareFill className="text-LightBlue" />
          Trending Coins
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Suspense fallback={<CryptoTrendingCoinsSkeleton />}>
          <CryptoTrendCoinsCard />
        </Suspense>
      </CardContent>
    </Card>
  );
}

import { Suspense } from 'react';
import { CryptoMarketOverviewCard } from './cryptoMarketOverviewCard';
import { CryptoMarketOverviewSkeleton } from '../components/ui/skeletons/cryptoMarketOverviewSkeleton';
import ShineBorder from '../components/magicUi/shine-border';

function CryptoMarketOverview() {
  return (
    <ShineBorder
      color={['#00000078', '#19cae999']}
      className="bg-white w-full rounded-2xl py-8 px-6 md:px-5 xl:px-9 flex flex-col lg:items-center relative"
    >
      <h4 className="text-DarkBlue font-bold text-2xl mb-6">Market Overview</h4>
      <div className="flex flex-col md:flex-row lg:flex-col items-center w-full gap-3.5 px-0.5 xs:px-1.5 md:px-0">
        <Suspense fallback={<CryptoMarketOverviewSkeleton />}>
          <CryptoMarketOverviewCard />
        </Suspense>
      </div>
    </ShineBorder>
  );
}

export { CryptoMarketOverview };

import { Suspense } from 'react';
import { CryptoMarketOverviewCard } from './cryptoMarketOverviewCard';
import { CryptoMarketOverviewSkeleton } from '../components/ui/skeletons/cryptoMarketOverviewSkeleton';
import ShineBorder from '../components/magicUi/shine-border';
import { MdOutlineGridView } from 'react-icons/md';
import { FaGlobe, FaMoneyCheckDollar } from 'react-icons/fa6';
import { FaCheckSquare } from 'react-icons/fa';
import { SiMoneygram } from 'react-icons/si';

function CryptoMarketOverview() {
  return (
    <div className="bg-white w-full rounded-2xl py-8 px-6 md:px-5 xl:px-9 flex flex-col lg:items-start relative">
      <h4 className="text-DarkBlue font-bold text-2xl mb-6 flex flex-row items-center gap-2">
        <SiMoneygram className=" text-LightBlue" />
        Market Overview
      </h4>
      <div className="flex flex-col md:flex-row lg:flex-col items-center w-full gap-3.5 px-0.5 xs:px-1.5 md:px-0">
        <Suspense fallback={<CryptoMarketOverviewSkeleton />}>
          <CryptoMarketOverviewCard />
        </Suspense>
      </div>
    </div>
  );
}

export { CryptoMarketOverview };

import React, { Suspense } from 'react';
import HeroDiamond from '@/app/components/ui/heroDiamond';
import HeroServices from '@/app/components/ui/heroServices';
import { TimelineDemo } from '@/app/components/timeline';
import { HeroGridNews } from '@/app/components/ui/heroGridNews';
import { BentoGridSkeleton } from '@/app/components/ui/skeletons/bentoGridSkeleton';
import { BestCurrencies } from '@/app/components/bestCurrencies';
import { FaChartLine } from 'react-icons/fa6';
import { InfinitySlider } from '@/app/components/ui/infinitySlider';
import ShineBorder from '@/app/components/magicUi/shine-border';
import GlowText from './components/ui/glowText';

function Page() {
  return (
    <div
      className={` px-4 dark:bg-DarkBlue w-dvh h-auto sm:px-8 lg:px-28 xl:px-40 text-DarkBlue dark:text-WHITE bg-WHITE items-center flex flex-col`}
    >
      <div
        className={'lg:min-h-[800px] lg:h-dvh flex justify-center items-center'}
      >
        <HeroDiamond />
      </div>
      <HeroServices />
      <div className={'py-20 w-full'}>
        <TimelineDemo />
      </div>
      <div className="my-20 p-7 rounded-2xl flex justify-center items-center w-full bg-DarkBlue">
        <GlowText className="text-white text-2xl">
          🇮🇷 Persian language will be added soon.
        </GlowText>
      </div>
    </div>
  );
}

export default Page;

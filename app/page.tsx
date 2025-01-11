import React, { Suspense } from 'react';
import HeroDiamond from '@/app/ui/heroDiamond';
import HeroServices from '@/app/ui/heroServices';
import { TimelineDemo } from '@/app/components/timeline';
import { HeroGridNews } from '@/app/ui/heroGridNews';
import { BentoGridSkeleton } from '@/app/ui/skeletons/bentoGridSkeleton';
import { BestCurrencies } from '@/app/components/bestCurrencies';
import { FaChartLine } from 'react-icons/fa6';
import { TracingBeam } from '@/app/components/aceternityUi/tracingbemAcet';
import { InfinitySlider } from '@/app/ui/infinitySlider';
import ShineBorder from '@/app/components/magicUi/shine-border';
import { FadeUp } from '@/app/components/motions/fade';

// import { RxDoubleArrowDown } from 'react-icons/rx';

async function Page() {
  return (
    <TracingBeam>
      <div
        className={` px-4 dark:bg-DarkBlue w-dvh h-auto sm:px-8 lg:px-28 xl:px-40 text-DarkBlue dark:text-WHITE bg-WHITE items-center flex flex-col`}
      >
        <div className={'lg:min-h-dvh'}>
          <HeroDiamond />
        </div>
        <HeroServices />
        <InfinitySlider />
        <div className={'py-20 w-full'}>
          <TimelineDemo />
        </div>
        <ShineBorder
          className={
            'pb-20 pt-10 w-full flex flex-col rounded-2xl bg-WHITE xs:bg-white dark:bg-blue-700/5 items-center gap-12 relative'
          }
          color={['#916CF5', '#44A5FB']}
        >
          <FadeUp>
            <h3 className="text-[1.7rem] capitalize leading-8 sm:text-4xl text-center font-bold tracking-tight flex flex-row-reverse items-center justify-center gap-3">
              Best currencies of the month
              <FaChartLine className={'hidden md:block'} />
            </h3>
          </FadeUp>
          <BestCurrencies />
        </ShineBorder>
        <div className={'pt-20 pb-40 w-full'}>
          <Suspense fallback={<BentoGridSkeleton />}>
            <HeroGridNews />
          </Suspense>
        </div>
      </div>
    </TracingBeam>
  );
}

export default Page;

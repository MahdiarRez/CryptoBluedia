import React from 'react';
import HeroDiamond from '@/app/components/heroDiamond';
import HeroServices from '@/app/components/heroServices';
import { TimelineDemo } from '@/app/components/timeline';
import { RiArrowDownDoubleLine } from 'react-icons/ri';

function Page() {
  return (
    <div
      className={` px-4 dark:bg-DarkBlue w-dvh h-auto sm:px-8 lg:px-28 xl:px-40 text-DarkBlue dark:text-WHITE bg-WHITE items-center flex flex-col`}
    >
      <div
        className={
          'lg:min-h-[600px] lg:h-pageHeight flex flex-col-reverse justify-center gap-4 items-center relative'
        }
      >
        <RiArrowDownDoubleLine className="lg:block diamond-motion hidden  text-6xl" />
        <HeroDiamond />
      </div>
      <HeroServices />
      <div className={'py-20 w-full'}>
        <TimelineDemo />
      </div>
    </div>
  );
}

export default Page;

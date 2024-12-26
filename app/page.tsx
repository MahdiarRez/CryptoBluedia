import React from 'react';
import HeroDiamond from '@/app/ui/heroDiamond';
import HeroServices from '@/app/ui/heroServices';
import { AppleCardsCarouselDemo } from '@/app/components/carousel';

async function Page() {
  return (
    <div
      className={` px-4 dark:bg-DarkBlue w-dvh h-auto sm:px-8 lg:px-28 xl:px-40 text-DarkBlue dark:text-WHITE bg-WHITE items-center flex flex-col`}
    >
      <div className={'lg:min-h-dvh'}>
        <HeroDiamond />
      </div>
      <HeroServices />
      <div className={'py-20 w-full'}>
        <AppleCardsCarouselDemo />
      </div>
    </div>
  );
}

export default Page;

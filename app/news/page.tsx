import React from 'react';
import type { Metadata } from 'next';
import { TabTransitionPanel } from '@/app/news/transitionPanel';
import { TextGenerate } from '@/app/components/textGenerate';

export const metadata: Metadata = {
  title: 'Latest News',
};

async function Page() {
  return (
    <div
      className={
        'bg-WHITE w-dvh min-h-dvh flex text-DarkBlue flex-col justify-center items-center px-4 sm:px-8 lg:px-28 xl:px-40'
      }
    >
      <div className={'flex flex-col items-center justify-center'}>
        <TextGenerate
          preset={'fade-in-blur'}
          per={'line'}
          classes={'text-3xl sm:text-4xl font-extrabold text-center'}
          text={'Discover 219+ digital currencies.'}
        />
        <TextGenerate
          preset={'fade'}
          delay={0.8}
          classes={
            'mt-3 text-sm md:text-base lg:text-sm xl:text-base font-medium max-w-[324px] sm:max-w-2xl text-center'
          }
          text={
            'Delve into a vast selection of digital currencies. Your journey into crypto starts here.'
          }
        />
      </div>
      {/*<FeaturesSection />*/}
      <TabTransitionPanel />
    </div>
  );
}

export default Page;

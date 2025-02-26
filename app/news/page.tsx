import React from 'react';
import type { Metadata } from 'next';
import { TabTransitionPanel } from '@/app/news/transitionPanel';
import { TextGenerate } from '@/app/components/textGenerate';

export const metadata: Metadata = {
  title: 'Latest News',
};

function Page() {
  return (
    <div
      className={
        'bg-WHITE w-dvh min-h-dvh flex text-DarkBlue flex-col items-start px-4 sm:px-8 lg:px-28 xl:px-40'
      }
    >
      <div
        className={
          'flex flex-col items-start bg-DarkBlue text-WHITE w-full justify-center mt-32 p-8 rounded-3xl mb-11'
        }
      >
        <TextGenerate
          preset={'fade-in-blur'}
          per={'line'}
          classes={'text-3xl sm:text-4xl font-extrabold text-left'}
          text={'Get the latest market news.'}
        />
        <TextGenerate
          preset={'fade'}
          delay={0.8}
          classes={
            'mt-1.5 text-sm md:text-base lg:text-sm xl:text-base font-medium max-w-[324px] sm:max-w-2xl text-center'
          }
          text={
            'At Bluedia, we cover all the news in the most up-to-date way possible.'
          }
        />
      </div>
      {/*<FeaturesSection />*/}
      <TabTransitionPanel />
    </div>
  );
}

export default Page;

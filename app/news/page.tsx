import React from 'react';
import type { Metadata } from 'next';
import { TabTransitionPanel } from '@/app/news/transitionPanel';
import { TextGenerate } from '@/app/components/textGenerate';
import Image from 'next/image';
import ppl from '@/public/newsPpl.jpg';
import { HeroGridNews } from '@/app/ui/heroGridNews';

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
          'flex relative flex-col items-start bg-DarkBlue text-WHITE w-full overflow-hidden justify-center mt-32 p-12 rounded-3xl mb-11'
        }
      >
        <div
          className={
            'absolute w-full top-0 h-full right-0 bg-gradient-to-l from-WHITE/10 via-DarkBlue/60 z-[6] to-DarkBlue'
          }
        ></div>
        <Image
          src={ppl}
          alt={'ppl'}
          placeholder={'empty'}
          className={
            'absolute top-0 w-full h-full right-0 z-[3] object-cover object-left opacity-40 translate-x-1/3'
          }
        />
        <TextGenerate
          preset={'fade-in-blur'}
          per={'line'}
          classes={'text-3xl sm:text-4xl z-[9] font-extrabold text-left'}
          text={'Get the latest market news.'}
        />
        <TextGenerate
          preset={'fade'}
          delay={0.8}
          classes={
            'mt-1.5 text-sm md:text-base z-[9] lg:text-sm xl:text-base font-medium max-w-[324px] sm:max-w-2xl text-center'
          }
          text={
            'At Bluedia, we cover all the news in the most up-to-date way possible.'
          }
        />
      </div>
      <TabTransitionPanel />
      {/*<NewsGrid />*/}
      <HeroGridNews />
    </div>
  );
}

export default Page;

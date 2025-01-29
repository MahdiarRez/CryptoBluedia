import React, { Suspense } from 'react';
import { TextGenerate } from '@/app/components/textGenerate';
import CurrenciesGrid from '@/app/currencies/currencies';
import { InputVanish } from '@/app/components/inputVanish';

function Page() {
  return (
    <div
      className={`px-4 dark:bg-DarkBlue w-dvh h-auto pt-32 lg:pt-28 pb-20  lg:min-h-dvh sm:px-8 lg:px-16 lg2:px-28 xl:px-40 text-DarkBlue dark:text-WHITE bg-WHITE items-center justify-center flex flex-col`}
    >
      <div
        className={
          'flex flex-col lg:flex-row justify-between items-center w-full mb-6'
        }
      >
        <div
          className={'flex flex-col items-center lg:items-start justify-center'}
        >
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
        <InputVanish
          mt={'mt-6 dark:border rounded-xl dark:border-solid dark:border-WHITE'}
        />
      </div>
      <Suspense
        fallback={<div className={'min-h-[465px] w-full bg-gray-500'}></div>}
      >
        <CurrenciesGrid />
      </Suspense>
    </div>
  );
}

export default Page;

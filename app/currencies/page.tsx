import React from 'react';
import { TextGenerate } from '@/app/components/textGenerate';
import CurrenciesGrid from '@/app/currencies/currenciesGrid';
import { InputVanish } from '@/app/components/inputVanish';

function Page() {
  return (
    <div
      className={`px-4 dark:bg-DarkBlue w-dvh h-auto pt-32 lg:pt-28 pb-20 lg:max-h-dvh lg:min-h-dvh sm:px-8 lg:px-16 lg2:px-28 xl:px-40 xl:px-40 text-DarkBlue dark:text-WHITE bg-WHITE items-center justify-center flex flex-col`}
    >
      <div
        className={
          'flex flex-col lg:flex-row justify-between items-center w-full mb-6'
        }
      >
        <div className={'flex flex-col items-start'}>
          <TextGenerate
            preset={'fade-in-blur'}
            classes={'text-3xl sm:text-4xl font-bold text-center'}
            text={'Discover 219+ digital currencies.'}
          />
          <TextGenerate
            preset={'fade'}
            delay={0.8}
            classes={
              'mt-3 text-sm sm:text-sm font-normal max-w-[324px] sm:max-w-xl text-center'
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
      <CurrenciesGrid />
    </div>
  );
}

export default Page;

import React from 'react';
import Image from 'next/image';
import diamond from '@/public/diamondB.png';
import { InputVanish } from '@/app/components/inputVanish';

function HeroDiamond() {
  return (
    <div
      className={
        'h-auto w-full bg-DarkBlue dark:bg-WHITE mt-32 rounded-3xl flex flex-col xs:flex-row-reverse xs:justify-center items-center gap-3 p-10 md:px-14 lg:p-20'
      }
    >
      <Image
        src={diamond}
        alt={'diamond'}
        placeholder={'blur'}
        className={
          'hidden xs:block static w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 max-w-56 object-contain diamond-motion'
        }
      />
      <div
        className={
          'flex flex-col gap-3 md:max-w-[567px] lg:max-w-[unset] xl:max-w-[800px]'
        }
      >
        <h2
          className={
            'text-white dark:text-DarkBlue text-2xl font-bold md:text-4xl sm:text-3xl lg:text-5xl xl:text-6xl lg:leading-[3.25rem] xl:leading-[4rem]'
          }
        >
          Here is where Crypto currency Meet Timeless Brilliance.
        </h2>
        <h3
          className={
            'text-white dark:text-DarkBlue text-opacity-85 text-sm font-medium md:text-lg'
          }
        >
          Reach the market&#39;s{' '}
          <span className={'text-LightBlue dark:font-extrabold'}>diamond</span>{' '}
          easily.
        </h3>
        <InputVanish />
      </div>
    </div>
  );
}

export default HeroDiamond;
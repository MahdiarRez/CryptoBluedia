import React from 'react';
import ThemeButton from '@/app/ui/themeButton';
import { Manrope } from 'next/font/google';
import { InputVanish } from '@/app/components/inputVanish';
import diamond from '../public/diamondB.png';
import Image from 'next/image';

const ManropeFont = Manrope({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '700', '600', '800'],
});

async function Page() {
  return (
    <div
      className={`${ManropeFont.className} antialiased px-4 dark:bg-DarkBlue w-dvh h-[1300px] sm:px-8 lg:px-28 xl:px-40 text-DarkBlue dark:text-WHITE bg-WHITE items-center flex flex-col`}
    >
      <div
        className={
          'h-auto w-full bg-DarkBlue dark:bg-WHITE mt-36 rounded-3xl flex flex-col xs:flex-row-reverse xs:justify-center items-center gap-3 p-10 md:px-14 lg:p-20'
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
            <span className={'text-LightBlue dark:font-extrabold'}>
              diamond
            </span>{' '}
            easily.
          </h3>
          <InputVanish />
        </div>
      </div>
      <ThemeButton />
    </div>
  );
}

export default Page;

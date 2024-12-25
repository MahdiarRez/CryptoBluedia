import React from 'react';
import Link from 'next/link';
import ThemeButton from '@/app/ui/themeButton';
import { Manrope } from 'next/font/google';
import { InputVanish } from '@/app/components/inputVanish';

const ManropeFont = Manrope({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '700', '600', '800'],
});

async function Page() {
  return (
    <div
      className={`${ManropeFont.className} antialiased px-4 dark:bg-DarkBlue w-dvh h-[1300px] sm:px-8 lg:px-40 text-DarkBlue dark:text-WHITE bg-WHITE items-center flex flex-col`}
    >
      <div
        className={
          'h-auto w-full bg-black dark:bg-WHITE mt-36 rounded-3xl flex flex-col gap-3 p-10 '
        }
      >
        <h2 className={'text-white dark:text-DarkBlue text-2xl font-bold'}>
          Here is where Crypto currency Meet Timeless Brilliance.
        </h2>
        <h3
          className={
            'text-white dark:text-DarkBlue text-opacity-85 text-sm font-medium'
          }
        >
          Reach the market&#39;s{' '}
          <span className={'text-LightBlue dark:font-extrabold'}>diamond</span>{' '}
          easily.
        </h3>
        <InputVanish />
      </div>
      <Link href={'/'}>Page1</Link>
      <Link href={'/cryptos'} className={'bg-pink-600 text-white py-1 px-4'}>
        Cryptos
      </Link>
      <ThemeButton />
    </div>
  );
}

export default Page;

import React from 'react';
import Link from 'next/link';
import ThemeButton from '@/app/ui/themeButton';
import { Manrope } from 'next/font/google';

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
          'h-72 w-full bg-black mt-36 rounded-2xl text-white p-10 text-xl font-bold'
        }
      >
        Design for ambitious software companies
      </div>
      <Link href={'/AboutUs'}>Page1</Link>
      <Link href={'/cryptos'} className={'bg-pink-600 text-white py-1 px-4'}>
        Cryptos
      </Link>
      <ThemeButton />
    </div>
  );
}

export default Page;

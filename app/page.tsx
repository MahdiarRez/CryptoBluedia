import React from 'react';
import ThemeButton from '@/app/ui/themeButton';
import { Manrope } from 'next/font/google';
import HeroDiamond from '@/app/ui/heroDiamond';

const ManropeFont = Manrope({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '700', '600', '800'],
});

async function Page() {
  return (
    <div
      className={`${ManropeFont.className} antialiased px-4 dark:bg-DarkBlue w-dvh h-[1500px] sm:px-8 lg:px-28 xl:px-40 text-DarkBlue dark:text-WHITE bg-WHITE items-center flex flex-col`}
    >
      <div className={'lg:min-h-dvh'}>
        <HeroDiamond />
      </div>
      <ThemeButton />
    </div>
  );
}

export default Page;

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
      className={`${ManropeFont.className} antialiased dark:bg-DarkBlue w-dvh h-dvh text-DarkBlue dark:text-WHITE bg-WHITE justify-center items-center flex`}
    >
      <Link href={'/AboutUs'}>Page1</Link>
      <Link href={'/cryptos'} className={'bg-pink-600 text-white py-1 px-4'}>
        Cryptos
      </Link>
      <ThemeButton />
    </div>
  );
}

export default Page;

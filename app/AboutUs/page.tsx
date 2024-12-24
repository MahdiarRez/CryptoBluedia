import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import CryptoOne from '@/app/AboutUs/cryptoOne';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Bluedia home page',
};

async function Page() {
  return (
    <div className={'bg-red-300 w-screen h-screen flex gap-5'}>
      page 1
      <Suspense fallback={<p>Loading...</p>}>
        <CryptoOne />
      </Suspense>
    </div>
  );
}

export default Page;

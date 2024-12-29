import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Market News',
};

async function Page() {
  return <div className={'bg-red-300 w-screen h-screen flex gap-5'}>page1</div>;
}

export default Page;

import React from 'react';
import { generateStaticParams } from '@/app/lib/data';

async function Page({ params }: { params: Promise<{ currency: string }> }) {
  const curr = (await params).currency;
  await generateStaticParams();
  return (
    <div className={'h-dvh w-dvw bg-WHITE flex justify-center items-center'}>
      {curr}
    </div>
  );
}

export default Page;

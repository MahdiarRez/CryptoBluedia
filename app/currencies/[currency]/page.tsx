import React from 'react';

async function Page({ params }: { params: { currency: string } }) {
  const { currency } = params;
  return (
    <div className={'h-dvh w-dvw bg-WHITE flex justify-center items-center'}>
      {currency}
    </div>
  );
}

export default Page;

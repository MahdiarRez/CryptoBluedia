import React from 'react';
import FormLogin from '@/app/(login)/formLogin';
import { MdAccountBox } from 'react-icons/md';
import { TextGenerate } from '@/app/components/textGenerate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Sign up' },
  description: 'register of Bluedia',
};

function Page() {
  return (
    <>
      <div
        className={'flex flex-row items-center justify-start gap-1 flex-nowrap'}
      >
        <MdAccountBox
          className={'text-DarkBlue size-6 sm:size-7 dark:text-white'}
        />
        <h2 className="font-bold text-nowrap text-xl sm:text-2xl text-DarkBlue dark:text-white">
          Sign up at
        </h2>
        <TextGenerate
          text={'Crypto Bluedia'}
          delay={0.4}
          element={'h2'}
          preset={'fade'}
          classes="font-bold text-nowrap text-xl sm:text-2xl text-DarkBlue dark:text-white"
        />
      </div>
      <FormLogin />
    </>
  );
}

export default Page;

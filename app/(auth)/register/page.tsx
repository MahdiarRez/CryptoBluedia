import React from 'react';
import { MdAccountBox } from 'react-icons/md';
import type { Metadata } from 'next';
import { TextGenerate } from '@/app/components/ui/textGenerate';
import FormRegister from './formRegister';

export const metadata: Metadata = {
  title: { absolute: 'Register | Sign up ' },
  description: 'Register to Bluedia',
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
          Register to
        </h2>
        <TextGenerate
          text={'Crypto Bluedia'}
          delay={0.4}
          element={'h2'}
          preset={'fade'}
          classes="font-bold text-nowrap text-xl sm:text-2xl text-DarkBlue dark:text-white"
        />
      </div>
      <FormRegister />
    </>
  );
}

export default Page;

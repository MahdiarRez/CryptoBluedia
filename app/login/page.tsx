import React from 'react';
import FormLogin from '@/app/login/formLogin';
import { MdAccountBox } from 'react-icons/md';
import { TextGenerate } from '@/app/components/textGenerate';
import { NeonGradientCard } from '@/app/components/magicUi/neon-gradient-card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Sign in | Sign up' },
  description: 'Login and register of Bluedia',
};

function Page() {
  return (
    <div
      className={
        'h-dvh w-dvw bg-WHITE dark:bg-DarkBlue flex justify-center items-center'
      }
    >
      <div className="sm:max-w-md max-w-72 xs:max-w-96 mt-[7.407vh] w-full mx-auto rounded-2xl p-5 shadow-input bg-white dark:bg-DarkBlue">
        <div className="hidden sm:block">
          <NeonGradientCard borderSize={0} borderRadius={9}>
            <LoginContent />
          </NeonGradientCard>
        </div>

        <div className="sm:hidden">
          <LoginContent />
        </div>
      </div>
    </div>
  );
}

const LoginContent = () => (
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

export default Page;

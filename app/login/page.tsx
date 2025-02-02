import React from 'react';
import FormLogin from '@/app/login/formLogin';

function Page() {
  return (
    <div
      className={
        'h-dvh w-dvw bg-WHITE dark:bg-DarkBlue flex justify-center items-center'
      }
    >
      <FormLogin />
    </div>
  );
}

export default Page;

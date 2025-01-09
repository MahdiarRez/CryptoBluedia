import React from 'react';
import { TextGenerate } from '@/app/components/textGenerate';

function Page() {
  return (
    <div
      className={` px-4 dark:bg-DarkBlue w-dvh max-h-dvh min-h-dvh sm:px-8 lg:px-28 xl:px-40 text-DarkBlue dark:text-WHITE bg-WHITE items-center justify-center flex flex-col`}
    >
      <TextGenerate
        text={'HELLO MY name is mahdiar rezaei'}
        classes={'text-DarkBlue text-3xl'}
      />
    </div>
  );
}

export default Page;

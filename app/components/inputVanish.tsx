'use client';

import { VanishInputAcet } from '@/app/components/aceternityUi/vanishInputAcet';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function InputVanish({
  classes,
  mt = 'mt-3.5',
}: {
  classes?: string;
  mt?: string;
}) {
  const placeholders = ['Currency name', 'Btc', 'Not', 'Ethfi', 'One'];
  const [inputVal, setInputVal] = useState('');
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(e.target);

    e.preventDefault();
    router.push(`/currencies/${inputVal}`);
  };

  return (
    <div
      className={`w-full ${classes} z-0 max-w-[248px] lg:max-w-[295px] ${mt} flex flex-col justify-center items-center`}
    >
      <VanishInputAcet
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}

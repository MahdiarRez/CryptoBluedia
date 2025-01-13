'use client';

import { VanishInputAcet } from '@/app/components/aceternityUi/vanishInputAcet';

export function InputVanish({
  classes,
  mt = 'mt-3.5',
}: {
  classes?: string;
  mt?: string;
}) {
  const placeholders = ['Currency name', 'Btc', 'Not', 'Ethfi', 'One'];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('val', e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submitted');
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

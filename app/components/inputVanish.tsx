'use client';

import { VanishInputAceternity } from '@/app/components/aceternityUi/vanishInputAceternity';

export function InputVanish() {
  const placeholders = ['Currency name', 'Btc', 'Shibainu', 'Ethfi', 'One'];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('val', e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submitted');
  };

  return (
    <div className="w-full z-0 max-w-[248px] lg:max-w-[295px] mt-3.5 flex flex-col justify-center items-center">
      <VanishInputAceternity
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}

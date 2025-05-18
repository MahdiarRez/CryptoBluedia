'use client';

import { VanishInputAcet } from '@/app/components/aceternityUi/vanishInputAcet';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const currencyMap: Record<string, string> = {
  bitcoin: 'BTC',
  ethereum: 'ETH',
  xrp: 'XRP',
  solana: 'SOL',
  binance: 'BNB',
  'doge coin': 'DOGE',
  cardano: 'ADA',
  sui: 'SUI',
  chainlink: 'LINK',
  'shiba inu': 'SHIB',
  polkadot: 'DOT',
  pepe: 'PEPE',
  polygon: 'MATIC',
  'internet computer': 'ICP',
  sonic: 'SONIC',
  eos: 'EOS',
  pancakeswap: 'CAKE',
};

export function InputVanish({
  classes,
  mt = 'mt-3.5',
}: {
  classes?: string;
  mt?: string;
}) {
  const placeholders = ['Currency name', 'Bitcoin', 'Ethereum', 'Pepe', 'Xrp'];
  const [inputVal, setInputVal] = useState('');
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Normalize input but keep original casing for final output
    const normalizedInput = inputVal.trim().toLowerCase();
    const symbol = currencyMap[normalizedInput] || inputVal.trim();

    router.push(`/currencies/${symbol.toLowerCase()}`);
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

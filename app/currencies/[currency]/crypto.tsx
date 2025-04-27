'use client';
import { Inter } from 'next/font/google';
import CryptoHeader from './cryptoHeader';
import CryptoBody from './cryptoBody';
import { notFound, useParams } from 'next/navigation';
import { fetchCurrencyById } from '@/app/lib/data';
import { useEffect, useState } from 'react';
import { Currency } from '@/app/lib/utils/types';
import { CurrencySkeleton } from '@/app/components/ui/skeletons/currencySkeleton';

const interFont = Inter({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '700', '600', '800'],
});

function Crypto() {
  const [data, setData] = useState<Currency>();
  const [loading, setLoading] = useState(true);

  const params = useParams();
  useEffect(() => {
    async function getData() {
      const currency = await fetchCurrencyById(params.currency as string);
      setData(currency);
      setLoading(false);
      if (!currency || typeof currency !== 'string') {
        notFound();
      }
    }
    getData();
  }, []);

  if (loading) return <CurrencySkeleton />;

  return (
    <div
      className={`flex flex-col items-center h-auto w-full ${interFont.className}`}
    >
      {data && (
        <>
          <CryptoHeader currency={data} />
          <CryptoBody currency={data} />
        </>
      )}
    </div>
  );
}

export default Crypto;

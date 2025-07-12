'use client';
import { Inter } from 'next/font/google';
import CryptoHeader from './cryptoHeader';
import CryptoBody from './cryptoBody';
import { Currency } from '@/app/lib/types';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

// Define props type interface
interface CryptoProps {
  currency: Currency;
}

const interFont = Inter({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '700', '600', '800'],
});

function Crypto({ currency }: CryptoProps) {
  // Now using proper props typing
  const [currentCurrency, setCurrentCurrency] = useState<Currency>(currency);
  const router = useRouter();
  const params = useParams<{ currency: string }>();

  useEffect(() => {
    async function loadNewCurrency() {
      try {
        const response = await fetch(`/api/currencies/${params.currency}`);
        const newCurrency = await response.json();
        setCurrentCurrency(newCurrency);
      } catch (error) {
        router.replace('/not-found');
      }
    }

    if (currency.id !== params.currency) {
      loadNewCurrency();
    }
  }, [params.currency, currency.id, router]);

  return (
    <div
      className={`flex flex-col items-center h-auto w-full ${interFont.className}`}
    >
      <CryptoHeader currency={currentCurrency} />
      <CryptoBody currency={currentCurrency} />
    </div>
  );
}

export default Crypto;

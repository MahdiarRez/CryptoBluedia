import { Inter } from 'next/font/google';
import CryptoHeader from './cryptoHeader';
import CryptoBody from './cryptoBody';
import { Currency } from '@/app/lib/types';

export const interFont = Inter({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '700', '600', '800'],
});

function CryptoMain({ currency }: { currency: Currency }) {
  return (
    <div
      className={`flex flex-col items-center h-auto w-full ${interFont.className}`}
    >
      <CryptoHeader currency={currency} />
      <CryptoBody currency={currency} />
    </div>
  );
}

export default CryptoMain;

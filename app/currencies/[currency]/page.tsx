import { Metadata } from 'next';
import CryptoDetails from '@/app/currencies/[currency]/crypto-details';
import React from 'react';

// export function generateMetadata({
//   params,
// }: {
//   params: { currency: string };
// }): Metadata {
//   return {
//     title: `${params.currency.toUpperCase()}`,
//     description: `Displaying information for currency: ${params.currency}`,
//   };
// }

export default function Page() {
  return (
    <main className="min-h-screen bg-WHITE pb-8 px-5">
      <div className="absolute inset-0 overflow-hidden">
        <div className="cosmic-background" />
      </div>
      <CryptoDetails />
    </main>
  );
}

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
    <main className="min-h-screen bg-WHITE pb-8">
      <div className="absolute inset-0 overflow-hidden">
        <div className="cosmic-background" />
      </div>
      <CryptoDetails />
    </main>
  );
}
// import { Metadata } from 'next';
//
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
//
// export default function Page({ params }: { params: { currency: string } }) {
//   console.log(params);
//   return (
//     <main className="h-screen w-full bg-white flex justify-center items-center p-4">
//       <div className="text-center">
//         <h1 className="text-2xl font-bold mb-4"></h1>
//         {/* Add your currency-related content here */}
//       </div>
//     </main>
//   );
// }

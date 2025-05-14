import { Suspense } from 'react';
import Crypto from './crypto';
import { fetchCurrencyById } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import { CurrencySkeleton } from '@/app/components/ui/skeletons/currencySkeleton';

export const metadata = {
  title: 'Currency',
  description:
    'Browse and analyze the top cryptocurrencies by market capitalization',
};

async function CryptoWrapper({ currencyId }: { currencyId: string }) {
  try {
    // Fetch the currency data based on the currencyId
    const currency = await fetchCurrencyById(currencyId);
    return <Crypto currency={currency} />;
  } catch (error) {
    if (error instanceof Error && error.message === 'NOT_FOUND') notFound();
    throw error;
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ currency: string }>;
}) {
  const { currency } = await params;
  return (
    <Suspense fallback={<CurrencySkeleton />}>
      <div className="sm:px-8 lg:px-28 xl:px-40 bg-WHITE pt-32 px-4 min-h-dvh h-auto w-full dark:bg-DarkBlue">
        <CryptoWrapper currencyId={currency} />
      </div>
    </Suspense>
  );
}

// app/currencies/[currency]/page.tsx
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { fetchCurrencies, fetchCurrencyById } from '@/app/lib/utils/data';
import { notFound } from 'next/navigation';
import { CurrencySkeleton } from '@/app/components/skeletons/currencyPageSkeleton';
import { Currency } from '@/app/lib/types';

export const metadata = {
  title: 'Currency',
  description:
    'Browse and analyze the top cryptocurrencies by market capitalization',
};

export const revalidate = 60;

export async function generateStaticParams(): Promise<{ currency: string }[]> {
  const currencies: Currency[] = await fetchCurrencies();
  return currencies.map((c) => ({ currency: c.id }));
}

const Crypto = dynamic(() => import('./components/crypto'), {
  loading: () => <CurrencySkeleton />,
  ssr: true,
});

async function CryptoWrapper({ currencyId }: { currencyId: string }) {
  try {
    const currency = await fetchCurrencyById(currencyId);
    return <Crypto currency={currency} />;
  } catch (error) {
    if (error instanceof Error && error.message === 'NOT_FOUND') {
      notFound();
    }
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
      <div className="sm:px-8 lg:px-28 xl:px-40 bg-WHITE pt-10 px-4 min-h-dvh h-auto w-full dark:bg-DarkBlue">
        <CryptoWrapper currencyId={currency} />
      </div>
    </Suspense>
  );
}

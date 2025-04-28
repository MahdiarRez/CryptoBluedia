// app/crypto/[currency]/page.tsx
import { Suspense } from 'react';
import Crypto from './crypto';
import { fetchCurrencyById } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import { CurrencySkeleton } from '@/app/components/ui/skeletons/currencySkeleton';

async function CryptoWrapper({ currencyId }: { currencyId: string }) {
  try {
    const currency = await fetchCurrencyById(currencyId);
    return <Crypto currency={currency} />;
  } catch (error) {
    if (error instanceof Error && error.message === 'NOT_FOUND') notFound();
    throw error;
  }
}

export default function Page({ params }: { params: { currency: string } }) {
  return (
    <Suspense fallback={<CurrencySkeleton />}>
      <div className="sm:px-8 lg:px-28 xl:px-40 bg-WHITE pt-32 px-4 min-h-dvh h-auto w-full">
        <CryptoWrapper currencyId={params.currency} />
      </div>
    </Suspense>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ currency: string }>;
}) {
  try {
    const id = (await params).currency;
    const currency = await fetchCurrencyById(id);

    return {
      title: `${currency.name} (${currency.id.toUpperCase()})`,
      description: `View detailed information, charts, and analysis for ${currency.name}`,
    };
  } catch (error) {
    return {
      title: 'Bluedia',
      description: 'View detailed information about this cryptocurrency',
    };
  }
}

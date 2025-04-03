import { fetchCurrencyById } from '@/app/lib/utils/supabaseServer';
import { notFound } from 'next/navigation';
import CryptoDetails from './crypto-details';

export const dynamic = 'force-dynamic'; // Ensure data is always fresh

export default async function Page({
  params,
}: {
  params: Promise<{ currency: string }>;
}) {
  const { currency } = await params;
  console.log('currency : ', currency);
  console.log((await params).currency);

  if (!currency || typeof currency !== 'string') {
    notFound();
  }

  try {
    const currency = await fetchCurrencyById((await params).currency);

    return (
      <div className="min-h-screen w-full bg-white pb-4 sm:pb-8 overflow-x-hidden">
        <CryptoDetails
          cryptoId={(await params).currency}
          initialData={currency}
        />
      </div>
    );
  } catch (error) {
    notFound();
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ currency: string }>;
}) {
  const { currency } = await params;
  try {
    const id = (await params).currency;
    const currency = await fetchCurrencyById(id);

    return {
      title: `${currency.name} (${currency.symbol.toUpperCase()}) | Crypto Dashboard`,
      description: `View detailed information, charts, and analysis for ${currency.name}`,
    };
  } catch (error) {
    return {
      title: 'Cryptocurrency | Crypto Dashboard',
      description: 'View detailed information about this cryptocurrency',
    };
  }
}

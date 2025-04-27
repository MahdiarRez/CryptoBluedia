import { fetchCurrencyById } from '@/app/lib/data';
import Crypto from './crypto';

export default function Page() {
  return (
    <div className="sm:px-8 lg:px-28 xl:px-40 bg-WHITE pt-32 px-4 min-h-dvh h-auto w-full">
      <Crypto />
    </div>
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

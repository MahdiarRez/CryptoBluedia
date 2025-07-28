import { fetchCurrencies } from '@/app/lib/utils/data';
import { CurrencyFilterServer } from './currencyFilter';

export default async function CurrenciesList() {
  const currencies = await fetchCurrencies();

  if (!currencies?.length) {
    return (
      <p className="text-center text-DarkBlue/70 py-20">
        There is no currency!
      </p>
    );
  }

  return <CurrencyFilterServer currencies={currencies} />;
}

import { fetchCurrencies } from '@/app/lib/utils/data';
import { CurrencyFilterServer } from './currencyFilter';

export default async function CurrenciesList() {
  const currencies = await fetchCurrencies();

  if (!currencies || currencies.length === 0) {
    return (
      <p className="text-DarkBlue/70 text-center py-20">
        There is no currency !
      </p>
    );
  }

  return <CurrencyFilterServer currencies={currencies} />;
}

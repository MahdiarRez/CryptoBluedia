import { fetchCurrencies } from '../lib/data';
import { CurrencyFilterServer } from './currency-filter';

export default async function CurrenciesListServer() {
  const currencies = await fetchCurrencies();

  if (!currencies) {
    throw new Error('there`s no currency');
  }

  return (
    <div className="space-y-6">
      <CurrencyFilterServer currencies={currencies} />
    </div>
  );
}

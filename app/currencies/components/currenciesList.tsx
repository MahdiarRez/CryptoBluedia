import { fetchCurrencies } from '@/app/lib/utils/data';
import { CurrencyFilterServer } from './currencyFilter';
import { fetchCoinsData } from '@/app/lib/api';

export default async function CurrenciesList() {
  const currencies = await fetchCurrencies();
  const currenciesNames = currencies.map((item) => item.name);
  const data = await fetchCoinsData(currenciesNames);

  console.log(data);
  if (!currencies?.length) {
    return (
      <p className="text-center text-DarkBlue/70 py-20">
        There is no currency!
      </p>
    );
  }

  return <CurrencyFilterServer currencies={currencies} marketData={data} />;
}

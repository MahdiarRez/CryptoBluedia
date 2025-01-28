import CurrCard from '@/app/currencies/currCard';
import { getCurrencies } from '@/app/lib/data';
import { itemT } from '@/app/currencies/currCardBody';

async function Currencies() {
  const currencies: itemT[] = await getCurrencies();
  return <CurrCard currencies={currencies} />;
}

export default Currencies;

import { CryptoNewsPage } from '@/app/news/cryptoNewsPage';
import { getCurrencyPrice } from '../lib/api';

export default function Page() {
  return (
    <div className={'sm:px-8 lg:px-28 xl:px-40 bg-WHITE pt-32 px-4'}>
      <CryptoNewsPage />;
    </div>
  );
}

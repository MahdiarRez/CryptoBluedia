import { CryptoMarketOverview } from './cryptoMarketOverview';
import { CryptoTrendingCoins } from './cryptoTrendCoins';
import NewsFilterAndList from './newsFilterAndList';

export function CryptoNewsPage() {
  return (
    <div className="min-h-screen  bg-WHITE">
      <div className="w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <NewsFilterAndList />
          </div>
          <div className="gap-4 flex flex-col items-center w-full mx-auto">
            <CryptoMarketOverview />
            <CryptoTrendingCoins />
          </div>
        </div>
      </div>
    </div>
  );
}

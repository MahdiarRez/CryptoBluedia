'use client';
import { RiNumber1, RiNumber2, RiNumber3, RiNumber4 } from 'react-icons/ri';
import { fetchTrendingCoins } from '../lib/api';
async function CryptoTrendCoinsCard() {
  const data = await fetchTrendingCoins();
  return (
    <div className="space-y-4">
      {data?.map((coin) => (
        <div key={coin.id} className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-md bg-LightBlue  text-white">
              {coin.id == '1' && <RiNumber1 />}
              {coin.id == '2' && <RiNumber2 />}
              {coin.id == '3' && <RiNumber3 />}
              {coin.id == '4' && <RiNumber4 />}
            </div>
            <div>
              <p className="font-medium">{coin.name}</p>
              <p className="text-xs text-muted-foreground">{coin.icon}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CryptoTrendCoinsCard;

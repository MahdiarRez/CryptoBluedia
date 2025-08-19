'use client';
import { interFont } from '@/app/currencies/[currency]/components/currencyMainPage';
import WatchlistCard from './components/watchlistCard';
import { useEffect, useState } from 'react';
import { archivoFont } from '../layout';
import AddAssest from './components/addAssest';

function WatchList() {
  const [watchlist, setWatchlist] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchWatchlist() {
      setLoading(true);
      try {
        const res = await fetch('/api/getWatchlist');
        const data = await res.json();
        setWatchlist(data.watchlist ?? []);
        console.log(data);
      } catch (err) {
        console.error('Failed to fetch watchlist:', err);
        setWatchlist([]);
      } finally {
        setLoading(false);
      }
    }

    fetchWatchlist();
  }, []);

  if (loading) return <p>Loading watchlist...</p>;
  if (!watchlist.length) return <p>Your watchlist is empty.</p>;

  return (
    <div
      className={`${interFont.className} flex flex-col items-center w-full gap-y-4 relative`}
    >
      <div className="flex flex-row justify-between items-center w-full py-5 sticky bg-white/70 backdrop-blur-sm z-20 -top-7">
        <h4
          className={` ${archivoFont.className} text-3xl text-DarkBlue font-medium`}
        >
          Your Watch List
        </h4>
        <AddAssest />
      </div>
      <div className="flex flex-col items-center justify-center w-full gap-4 max-h-full overflow-auto">
        {watchlist.map((item) => (
          <WatchlistCard key={item.name} curr={item} />
        ))}
      </div>
    </div>
  );
}

export default WatchList;

import { Poppins } from 'next/font/google';
import AddWatchlistServer from './components/addWatchlist';
import { Suspense } from 'react';
import Watchlist from './components/watchlist';
import WatchlistCardSkeleton from '@/app/components/skeletons/watchlistCardSkeleton';
import ModalBox from '@/app/components/ui/modalBox';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '100', '200', '300', '800', '900'],
});

function Page() {
  return (
    <div
      className={`${poppins.className} flex flex-col items-center w-full gap-y-4 relative`}
    >
      <div className="flex flex-row justify-between items-center w-full py-5 sticky bg-white/85 backdrop-blur-sm z-20 -top-7">
        <h4 className={`  text-3xl text-DarkBlue font-medium`}>
          Your Watch List
        </h4>
        <ModalBox headerText="Select Currency" buttonText="Add Currency">
          <Suspense
            fallback={
              <div className="px-9 pb-7">
                <WatchlistCardSkeleton />
              </div>
            }
          >
            <AddWatchlistServer />
          </Suspense>
        </ModalBox>
      </div>
      <Suspense fallback={<WatchlistCardSkeleton />}>
        <Watchlist />
      </Suspense>
    </div>
  );
}

export default Page;

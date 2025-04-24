export function CryptoMarketOverviewSkeleton() {
  return (
    <>
      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className="w-full rounded-lg px-4 py-5 bg-gray-100 animate-pulse flex flex-col gap-2 min-h-[156px]"
        >
          <div className="h-6 bg-gray-300 rounded w-1/4" />
          <div className="flex justify-between items-center">
            <div className="h-8 bg-gray-300 rounded w-1/3" />
            <div className="h-6 bg-gray-300 rounded w-1/5" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <div className="h-4 bg-gray-300 rounded w-1/3" />
              <div className="h-4 bg-gray-300 rounded w-1/4" />
            </div>
            <div className="flex justify-between">
              <div className="h-4 bg-gray-300 rounded w-1/3" />
              <div className="h-4 bg-gray-300 rounded w-1/4" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

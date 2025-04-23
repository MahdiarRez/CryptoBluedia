export function CurrencySkeleton() {
  return (
    <div className={`flex flex-col items-center h-auto w-full`}>
      <CryptoHeaderSkeleton />
      <OverviewTabSkeleton />
    </div>
  );
}

function CryptoHeaderSkeleton() {
  return (
    <div className="animate-pulse flex flex-col-reverse md:flex-row-reverse items-center w-full gap-4 md:h-[294px]">
      {/* Performance Card Skeleton */}
      <div className="relative rounded-2xl w-full md:w-[500px] bg-gray-100 p-6 px-8 md:p-5 h-full flex flex-col justify-between">
        <div className="h-8 bg-gray-300 w-1/3 rounded mb-5 md:mb-0"></div>
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i}>
              <div className="flex justify-between">
                <div className="h-4 bg-gray-300 w-1/4 rounded"></div>
                <div className="h-4 bg-gray-300 w-1/3 rounded"></div>
              </div>
              <div className="w-full h-px bg-gray-200 my-2.5"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Header Content Skeleton */}
      <div className="w-full bg-gray-200 h-[294px] rounded-2xl relative overflow-hidden p-7 md:py-5">
        <div className="flex items-start gap-5 z-10">
          <div className="w-16 h-16 bg-gray-300 rounded-xl"></div>
          <div className="flex-1 space-y-4">
            <div className="h-8 bg-gray-300 w-3/4 rounded"></div>
            <div className="flex gap-2">
              <div className="h-6 bg-gray-300 w-20 rounded"></div>
              <div className="h-6 bg-gray-300 w-24 rounded"></div>
            </div>
          </div>
        </div>
        <div className="mt-7 bg-gray-300 h-20 rounded-xl"></div>
      </div>
    </div>
  );
}

function OverviewTabSkeleton() {
  return (
    <div className="animate-pulse space-y-6 w-full">
      {/* Stats Grid Skeleton */}
      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-24 bg-gray-100 rounded-xl p-4">
            <div className="h-4 bg-gray-300 w-1/3 rounded mb-2"></div>
            <div className="h-6 bg-gray-300 w-1/2 rounded"></div>
          </div>
        ))}
      </div>

      {/* History Cards Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="bg-white p-5 rounded-2xl">
            <div className="h-5 bg-gray-300 w-1/3 rounded mb-2"></div>
            <div className="h-4 bg-gray-300 w-2/3 rounded mb-4"></div>
            <div className="space-y-3">
              {[...Array(4)].map((_, j) => (
                <div key={j} className="h-12 bg-gray-100 rounded-lg"></div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Community Cards Skeleton */}
      <div className="grid grid-cols-1 xs:grid-cols-2 gap-6">
        {[...Array(2)].map((_, i) => (
          <div
            key={i}
            className="bg-gray-100 h-32 rounded-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gray-200 opacity-30"></div>
            <div className="relative p-6 z-10">
              <div className="h-5 bg-gray-300 w-1/3 rounded mb-4"></div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-xl mr-4"></div>
                <div className="h-8 bg-gray-300 w-1/4 rounded"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

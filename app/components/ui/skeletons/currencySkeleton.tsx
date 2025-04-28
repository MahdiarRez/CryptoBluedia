import { Skeleton } from '../../ShadcnUi/skeleton';

export function CurrencySkeleton() {
  return (
    <div
      className={`sm:px-8 lg:px-28 xl:px-40 bg-WHITE pt-32 px-4 min-h-dvh h-auto w-full`}
    >
      <CryptoHeaderSkeleton />
      <CryptoContentSkeleton />
    </div>
  );
}

function CryptoHeaderSkeleton() {
  return (
    <div className="flex flex-col-reverse md:flex-row-reverse items-center w-full gap-4 md:h-[294px]">
      {/* Performance Card Skeleton */}
      <div className="relative rounded-2xl w-full md:w-[487px] bg-white p-6 px-8 md:p-5 h-full flex flex-col justify-between animate-pulse">
        <div className="flex items-center gap-3 mb-5 md:mb-0">
          <Skeleton className="h-8 w-8 rounded-full bg-gray-300" />
          <Skeleton className="h-6 w-32 bg-gray-300" />
        </div>

        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i}>
              <div className="flex justify-between">
                <Skeleton className="h-4 w-24 bg-gray-300" />
                <Skeleton className="h-4 w-20 bg-gray-300" />
              </div>
              {i < 4 && <Skeleton className="w-full h-px bg-gray-200 my-2.5" />}
            </div>
          ))}
        </div>
      </div>

      {/* Main Header Skeleton */}
      <div className="w-full h-full bg-gray-200 rounded-2xl relative overflow-hidden animate-pulse">
        <div className="p-7 md:py-5 h-full flex flex-col justify-between">
          {/* Logo and Title Section */}
          <div className="flex gap-3 xs:gap-5">
            <Skeleton className="w-16 h-16 xs:w-[5.3rem] xs:h-[5.3rem] rounded-xl bg-gray-300" />
            <div className="space-y-2">
              <Skeleton className="h-10 w-48 bg-gray-300 rounded-md" />
              <div className="flex gap-2">
                <Skeleton className="h-6 w-20 bg-gray-300 rounded" />
                <Skeleton className="h-6 w-24 bg-gray-300 rounded" />
              </div>
            </div>
          </div>

          {/* Price Section */}
          <div className="mt-7 bg-gray-300/50 p-5 rounded-xl space-y-3">
            <Skeleton className="h-4 w-24 bg-gray-300" />
            <Skeleton className="h-8 w-36 bg-gray-300" />
            <div className="flex justify-between">
              <Skeleton className="h-4 w-20 bg-gray-300" />
              <Skeleton className="h-6 w-16 bg-gray-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CryptoContentSkeleton() {
  return (
    <div className="flex flex-col items-center w-full mt-8">
      {/* Tab Navigation Skeleton */}
      <div className="flex mb-5 self-start overflow-hidden w-full rounded-xl bg-gray-200 px-[3px] py-[3.2px] animate-pulse">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="relative w-full py-2.5 flex justify-center gap-1 items-center"
          >
            <Skeleton className="h-4 w-16 bg-gray-300" />
          </div>
        ))}
      </div>

      {/* Main Content Skeleton */}
      <div
        className="relative mx-auto w-full h-full overflow-hidden"
        style={{ height: '718px' }}
      >
        <div className="p-1">
          {/* Metrics Grid Skeleton */}
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 w-full gap-6">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="h-auto rounded-2xl rounded-t-md flex flex-col p-7 py-5 items-start bg-white border-t-4 border-gray-300"
              >
                <Skeleton className="h-4 w-20 bg-gray-300" />
                <Skeleton className="w-full h-px bg-gray-200 my-2" />
                <div className="flex flex-row items-center gap-1.5 mt-4">
                  <Skeleton className="h-8 w-12 bg-gray-300 rounded-full" />
                  <Skeleton className="h-4 w-10 bg-gray-300" />
                </div>
              </div>
            ))}
          </div>

          {/* History Cards Grid Skeleton */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-full flex flex-col bg-white p-7 rounded-2xl"
              >
                <div className="mb-4">
                  <Skeleton className="h-5 w-32 bg-gray-300" />
                  <Skeleton className="h-3 w-48 bg-gray-200 mt-1" />
                </div>
                <Skeleton className="w-full h-px bg-gray-200" />
                <ul className="w-full mt-4 space-y-3">
                  {[...Array(4)].map((_, j) => (
                    <li
                      key={j}
                      className="w-full flex justify-between items-center py-2 px-4 rounded-lg bg-gray-100"
                    >
                      <Skeleton className="h-3 w-10 bg-gray-300" />
                      <Skeleton className="h-3 w-8 bg-gray-300" />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Community Cards Skeleton */}
          <div className="grid grid-cols-1 xs:grid-cols-2 gap-6 mb-8">
            {[...Array(2)].map((_, i) => (
              <div
                key={i}
                className="relative bg-white rounded-2xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gray-200 z-0" />
                <div className="p-6 pb-2 z-10">
                  <Skeleton className="h-5 w-40 bg-gray-300" />
                </div>
                <div className="p-6 z-10 pt-3">
                  <div className="flex items-center">
                    <Skeleton className="w-16 h-16 rounded-2xl bg-gray-300 mr-4" />
                    <div>
                      <Skeleton className="h-8 w-16 bg-gray-300" />
                      <Skeleton className="h-3 w-20 bg-gray-200 mt-1" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CryptoContentSkeleton;

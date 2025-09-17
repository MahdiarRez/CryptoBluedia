import GlowText from '@/app/components/ui/glowText';

export const revalidate = 60;

async function PriceAndChange({ name }: { name: string }) {
  // const { market_data }: CoinGeckoData = await getCoinData(name);

  return (
    <div className="mt-7 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between w-full bg-black/10 border border-solid  backdrop-blur-sm p-5 rounded-xl  border-white/30 shadow-md">
      <div className="flex flex-col min-h-full justify-between">
        <span className="text-white text-sm mb-1 font-medium">
          Current Price
        </span>
        <GlowText className="text-white font-black text-2xl md:text-xl lg:text-2xl xl:text-3xl xs:text-3xl bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
          {/* $ {market_data.current_price.usd} */}21
        </GlowText>
      </div>
      <div className="flex flex-col min-h-full justify-between items-start sm:items-end">
        <span className="text-white text-sm mb-1 font-medium">24h Change</span>
        {/* <span
          className={clsx(
            `flex flex-row items-center font-bold text-lg sm:text-xl md:text-lg gap-1`,
            {
              'text-red-400': market_data.ath_change_percentage.usd < 0,
              'text-green-400': market_data.ath_change_percentage.usd > 0,
            }
          )}
        >
          <FaCaretUp
            className={clsx(`w-5 h-5`, {
              'rotate-180': market_data.ath_change_percentage.usd < 0,
              'rotate-0': market_data.ath_change_percentage.usd > 0,
            })}
          />
          {formatMarketNumbers(market_data.ath_change_percentage.usd, 2)}%
        </span> */}
      </div>
    </div>
  );
}

export default PriceAndChange;

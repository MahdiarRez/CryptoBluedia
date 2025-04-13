import ShineBorder from '@/app/components/magicUi/shine-border';
import { TextGenerate } from '@/app/components/textGenerate';
import GlowText from '@/app/components/ui/glowText';
import Balatro from '@/app/components/ui/IridescenceServer';
// import { hexToRgb } from '@/app/lib/color-utils';
import { Currency } from '@/app/lib/utils/types';
import Image from 'next/image';
import { FaCaretUp } from 'react-icons/fa6';
import { RiInfoCardLine } from 'react-icons/ri';
import { BestDataT, getBestEntry } from '@/app/lib/helper';

function CryptoHeader({ currency }: { currency: Currency }) {
  const curr: BestDataT = {
    rank2022: currency.rank2022,
    rank2023: currency.rank2023,
    rank2024: currency.rank2024,
    rank2025: currency.rank2025,
    price2022: currency.price2022,
    price2023: currency.price2023,
    price2024: currency.price2024,
    price2025: currency.price2025,
    rol2022: currency.rol2022,
    rol2023: currency.rol2023,
    rol2024: currency.rol2024,
    rol2025: currency.rol2025,
  };
  const bestRank = getBestEntry(curr, 'rank', 'min');
  const bestPrice = getBestEntry(curr, 'price', 'max');
  const bestRol = getBestEntry(curr, 'rol', 'max');

  return (
    <div className="flex flex-col-reverse md:flex-row-reverse items-center w-full gap-6">
      <div className="min-h-[294px] rounded-2xl w-96 bg-white p-4">
        <h4 className="text-left flex flex-row items-center gap-1 text-xl font-bold text-DarkBlue mb-3">
          <RiInfoCardLine color={currency.color} className="text-2xl" />
          Performance
        </h4>
        <ul className="w-full  flex flex-col items-center justify-center h-full text-DarkBlue gap-y-2">
          <li className="flex flex-row items-center justify-between w-full text-sm">
            <span>Best Rank</span>
            <span className=" font-medium">{`#${bestRank.value} (${bestRank.year})`}</span>
          </li>
          <li className="flex flex-row items-center justify-between w-full text-sm">
            <span>Highest Price</span>
            <span className=" font-medium">{`$${bestPrice.value} (${bestPrice.year})`}</span>
          </li>
          <li className="flex flex-row items-center justify-between w-full text-sm">
            <span>best ROL</span>
            <span className=" font-medium">{`+${bestRol.value} (${bestRol.year})`}</span>
          </li>
        </ul>
      </div>
      <div
        className=" flex flex-col items-start w-full p-7 rounded-2xl relative overflow-hidden"
        style={{ backgroundColor: 'black' }}
      >
        <Balatro
          classes="absolute z-0 top-0 right-0"
          color3={currency.color}
          mouseInteraction={false}
        />
        <div className="flex flex-row items-start gap-3 xs:gap-5 z-10">
          <div className="bg-WHITE rounded-xl p-2">
            <Image
              src={currency.logo}
              alt={currency.name}
              width={60}
              height={60}
              className="w-16 h-16 object-contain xs:w-[5.3rem] xs:h-[5.3rem]"
            />
          </div>
          <div className="flex flex-col items-start gap-2">
            <TextGenerate
              text={currency.name}
              element="h1"
              preset="fade"
              per="line"
              classes="text-white text-2xl xs:text-6xl tracking-tighter font-black capitalize"
            />

            <div className="flex flex-row items-center gap-2 font-medium">
              <ShineBorder
                hiddenOnMobile={false}
                className=" z-10 relative bg-white/15  px-3.5 py-0.5 xs:py-1"
                borderRadius={6}
                duration={4}
                color={['#e7e3f3', '#a5aeb7']}
              >
                <span className="  text-white text-xs xs:text-base ">
                  {currency.narrative}
                </span>
              </ShineBorder>
              <ShineBorder
                hiddenOnMobile={false}
                duration={4}
                className=" z-10 relative bg-white/15  px-3.5 py-0.5 xs:py-1"
                borderRadius={6}
                color={['#e7e3f3', '#a5aeb7']}
              >
                <span className=" text-white text-xs xs:text-base">
                  Since {currency.since_of}
                </span>
              </ShineBorder>
            </div>
          </div>
        </div>
        <div className="mt-7 flex flex-row items-stretch justify-between w-full bg-white/20 backdrop-blur-sm p-5 rounded-xl border border-white/10 shadow-md">
          <div className="flex flex-col min-h-full justify-between">
            <span className="text-white text-sm mb-1">Current Price</span>
            <GlowText className="text-white font-black text-3xl xs:text-5xl bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              $46.24
            </GlowText>
          </div>
          <div className="flex flex-col min-h-full justify-between items-end">
            <span className="text-white text-sm mb-1">24h Change</span>
            <span className="flex flex-row items-center text-green-300 font-bold text-xl gap-1">
              <FaCaretUp className="w-5 h-5" />
              4.05%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CryptoHeader;

import ShineBorder from '@/app/components/ui/shineBorder';
import { TextGenerate } from '@/app/components/ui/textGenerate';
import { Currency } from '@/app/lib/utils/types';
import Image from 'next/image';
import { RiInfoCardLine } from 'react-icons/ri';
import { BestDataT, getBestEntry } from '@/app/lib/helper';
import { TextEffect } from '@/app/components/ui/textEffect';
import PriceAndChange from './priceAndChange';
import CurrnecyHeaderAni from './currencyHeaderAni';

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
    <div className="flex flex-col-reverse md:flex-row-reverse items-center w-full gap-4 md:h-[294px]">
      <ShineBorder
        color={[currency.color]}
        className=" relative rounded-2xl w-full md:w-[500px] bg-white p-6 px-8 md:p-5 h-full flex flex-col justify-between"
      >
        <h4 className="text-left flex flex-row items-center gap-1 text-2xl font-bold text-DarkBlue mb-5 md:mb-0">
          <RiInfoCardLine color={currency.color} className="text-3xl" />
          Performance
        </h4>
        <ul className="w-full  flex flex-col items-center justify-center text-DarkBlue ">
          <li className="flex flex-row items-center justify-between w-full text-lg md:text-base flex-nowrap">
            <TextEffect
              per="line"
              delay={0.4}
              preset="fade-in-blur"
              className="text-nowrap font-normal sm:font-medium"
              as="span"
            >
              Best Rank
            </TextEffect>
            <span className=" font-semibold text-nowrap">{`#${bestRank.value} (${bestRank.year})`}</span>
          </li>
          <span className="w-full h-px bg-gradient-to-r from-transparent via-DarkBlue to-transparent my-2.5 opacity-30"></span>
          <li className="flex flex-row items-center justify-between w-full text-lg md:text-base flex-nowrap">
            <TextEffect
              per="line"
              delay={0.6}
              preset="fade-in-blur"
              className="text-nowrap font-normal sm:font-medium"
              as="span"
            >
              Highest Price
            </TextEffect>
            <span className=" font-semibold text-nowrap">{`$${bestPrice.value} (${bestPrice.year})`}</span>
          </li>
          <span className="w-full h-px bg-gradient-to-r from-transparent via-DarkBlue to-transparent my-2.5 opacity-30"></span>
          <li className="flex flex-row items-center justify-between w-full text-lg md:text-base flex-nowrap">
            <TextEffect
              per="line"
              delay={0.8}
              preset="fade-in-blur"
              className="text-nowrap font-normal sm:font-medium"
              as="span"
            >
              Best ROL
            </TextEffect>
            <span className=" font-semibold text-nowrap">{`${bestRol.value > 0 ? `+${bestRol.value}` : `${bestRol.value}`} (${bestRol.year})`}</span>
          </li>
          <span className="w-full h-px bg-gradient-to-r from-transparent via-DarkBlue to-transparent my-2.5 opacity-30"></span>
          <li className="flex flex-row items-center justify-between w-full text-lg md:text-base flex-nowrap">
            <TextEffect
              per="line"
              delay={1.0}
              preset="fade-in-blur"
              className="text-nowrap font-normal sm:font-medium"
              as="span"
            >
              Digital type
            </TextEffect>
            <span className=" font-semibold text-nowrap">
              %{currency.digitalType}
            </span>
          </li>
          <span className="w-full h-px bg-gradient-to-r from-transparent via-DarkBlue to-transparent my-2.5 opacity-30"></span>
          <li className="flex flex-row items-center justify-between w-full text-lg md:text-base flex-nowrap">
            <TextEffect
              per="line"
              delay={1.2}
              preset="fade-in-blur"
              className="text-nowrap font-normal sm:font-medium"
              as="span"
            >
              Narrative
            </TextEffect>
            <TextEffect
              per="line"
              delay={1.2}
              preset="fade-in-blur"
              as="span"
              className=" font-semibold text-nowrap"
            >
              {currency.narrative}
            </TextEffect>
          </li>
        </ul>
      </ShineBorder>
      <div
        className=" flex flex-col items-start w-full p-7 md:py-5 h-full justify-center rounded-2xl relative overflow-hidden"
        style={{ backgroundColor: currency.color }}
      >
        <CurrnecyHeaderAni
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
          <div className="flex flex-col items-start gap-2 h-full justify-between">
            <TextGenerate
              text={currency.name}
              element="h1"
              preset="fade"
              per="line"
              classes="text-white text-4xl xs:mb-2 md:mb-0 xs:text-5xl md:text-5xl tracking-tighter font-black capitalize"
            />

            <div className="flex flex-row items-center gap-2 font-medium">
              <ShineBorder
                hiddenOnMobile={false}
                className=" z-10 relative bg-white/30  px-3.5 py-0.5 xs:py-1 backdrop-blur-sm"
                borderRadius={6}
                duration={4}
                color={['#e7e3f3', '#a5aeb7']}
              >
                <span className="  text-white text-xs xs:text-base md:text-sm ">
                  {currency.id}
                </span>
              </ShineBorder>
              <ShineBorder
                hiddenOnMobile={false}
                duration={4}
                className=" z-10 relative bg-white/30  px-3.5 py-0.5 xs:py-1 backdrop-blur-sm"
                borderRadius={6}
                color={['#e7e3f3', '#a5aeb7']}
              >
                <span className=" text-white text-xs xs:text-base md:text-sm">
                  Since {currency.since_of}
                </span>
              </ShineBorder>
            </div>
          </div>
        </div>
        <PriceAndChange name={currency.name} />
      </div>
    </div>
  );
}

export default CryptoHeader;

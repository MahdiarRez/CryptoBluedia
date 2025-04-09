import ShineBorder from '@/app/components/magicUi/shine-border';
import { TextGenerate } from '@/app/components/textGenerate';
import GlowText from '@/app/components/ui/glowText';
import IridescenceServer from '@/app/components/ui/IridescenceServer';
import { hexToRgb } from '@/app/lib/color-utils';
import { Currency } from '@/app/lib/utils/types';
import Image from 'next/image';
import { FaCaretUp } from 'react-icons/fa6';

function CryptoHeader({ currency }: { currency: Currency }) {
  const rgbColor = hexToRgb(currency.color);
  return (
    <div className="flex flex-row-reverse items-center w-full gap-6">
      <div className="h-max w-96 bg-red-300">hi</div>
      <div
        className=" flex flex-col items-start w-full p-7 rounded-2xl relative overflow-hidden"
        style={{ backgroundColor: currency.color }}
      >
        <IridescenceServer
          classes="absolute z-0 top-0 right-0"
          color={rgbColor}
        />
        <div className="flex flex-row items-start gap-3 xs:gap-5 z-10">
          <div className="bg-WHITE rounded-xl p-2">
            <Image
              src={currency.logo}
              alt={currency.name}
              width={60}
              height={60}
              className="w-16 h-16 object-contain xs:w-20 xs:h-20"
            />
          </div>
          <div className="flex flex-col items-start gap-2">
            <TextGenerate
              text={currency.name}
              element="h1"
              preset="fade"
              per="line"
              classes="text-white text-2xl xs:text-4xl font-bold capitalize"
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

import ShineBorder from '@/app/components/magicUi/shine-border';
import { Currency } from '@/app/lib/utils/types';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import { FaCaretUp } from 'react-icons/fa6';

const interFont = Inter({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '700', '600', '800'],
});

function CryptoDetails({ currency }: { currency: Currency }) {
  return (
    <div className={`flex flex-col items-center w-full ${interFont.className}`}>
      <div className="bg-yellow-600 flex flex-col items-start w-full p-7 rounded-2xl">
        <div className="flex flex-row items-start gap-3 xs:gap-5">
          <Image
            src={currency.logo}
            alt={currency.name}
            width={60}
            height={60}
            className="w-16 h-16 object-cover xs:w-20 xs:h-20"
          />
          <div className="flex flex-col items-start gap-2">
            <h1 className="text-white text-2xl xs:text-4xl font-bold capitalize">
              {currency.name}
            </h1>
            <div className="flex flex-row items-center gap-2 font-medium">
              <ShineBorder
                className=" z-10 relative px-3.5 py-1"
                borderRadius={6}
                duration={4}
                color={['#e7e3f3', '#a5aeb7']}
              >
                <span className="  text-white text-xs xs:text-base ">
                  {currency.id}
                </span>
              </ShineBorder>
              <ShineBorder
                duration={4}
                className=" z-10 relative px-3.5 py-1"
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
        <div className="mt-10 flex flex-row items-center justify-between w-full">
          <span className=" text-white font-black text-5xl">$46.24</span>
          <span className="flex flex-row items-center text-white font-bold text-xl">
            <FaCaretUp />
            +4.05
          </span>
        </div>
      </div>
    </div>
  );
}

export default CryptoDetails;

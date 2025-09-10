import { RiTelegram2Fill } from 'react-icons/ri';
import CardDetails from '../components/cardDetails';
import { Currency } from '@/app/lib/types';
import { FaXTwitter } from 'react-icons/fa6';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/app/components/uiKits/cardShadcn';
import { hexOpacity } from '@/app/lib/helper';
import { ReactNode } from 'react';
import { NumberTriggerOnScroll } from '@/app/components/ui/numberFlow';
import Image, { StaticImageData } from 'next/image';
import community1 from '@/public/community1.jpg';
import community2 from '@/public/community2.jpg';

interface HistoryData {
  year: number | null;
  value: number | string | null;
}

interface HistoryCardProps {
  curr: Currency;
  about: 'price' | 'rank' | 'rol';
}

function OverviewTab({ currency }: { currency: Currency }) {
  return (
    <div className="bg-WHITE dark:bg-DarkBlue h-auto w-full ">
      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 w-full gap-6 ">
        <CardDetails
          currency={currency}
          title="Value"
          value={currency.value}
          symbol=" / 100"
        />
        <CardDetails
          currency={currency}
          title="Psychology"
          value={currency.psychology}
          symbol=" / 100"
        />
        <CardDetails
          currency={currency}
          title="Digital Type"
          symbol=" / 100"
          value={currency.digitalType}
        />
        <CardDetails
          currency={currency}
          title="Sentiment"
          value={currency.sentiment}
          symbol=" / 100"
        />
      </div>
      <div className=" w-full grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
        <HistoryCard curr={currency} about="price" />
        <HistoryCard curr={currency} about="rank" />
        <HistoryCard curr={currency} about="rol" />
      </div>
      <div className="grid grid-cols-1 xs:grid-cols-2 gap-6 ">
        <Community
          appName="Telegram"
          icon={<RiTelegram2Fill className="w-8 h-8 text-white" />}
          number={currency.communityTel}
          color={currency.color}
          img={community1}
        />
        <Community
          appName="X/Twitter"
          icon={<FaXTwitter className="w-8 h-8 text-white" />}
          number={currency.communityX}
          color={currency.color}
          img={community2}
        />
      </div>
    </div>
  );
}

function HistoryCard({ curr, about }: HistoryCardProps) {
  // Generate historical data dynamically
  const generateHistory = (type: 'price' | 'rank' | 'rol'): HistoryData[] => {
    const years = [2022, 2023, 2024, 2025];
    return years.map((year) => ({
      year,
      value: curr[`${type}${year}` as keyof Currency],
    }));
  };

  // Get appropriate display format
  const formatValue = (value: number | string | null, type: string) => {
    if (typeof value !== 'number') return value;
    return type === 'price' ? `${value} $` : value;
  };

  const historyData = generateHistory(about);
  const title = `${about.charAt(0).toUpperCase()}${about.slice(1)} History`;

  return (
    <article className="w-full flex flex-col bg-white p-7 rounded-2xl md:p-5 lg:p-6">
      <header className="mb-4">
        <h2 className="text-DarkBlue font-medium text-xl md:text-lg lg:text-xl">
          {about == 'rol' ? 'ROL History' : title}
        </h2>
        <p className="text-gray-500 md:text-xs lg:text-sm">
          {about !== 'rol'
            ? `Historical and projected ${about}`
            : `Return on liquidity percentage`}
        </p>
      </header>

      <span className="w-full h-px bg-gradient-to-r from-DarkBlue via-DarkBlue/30 to-transparent"></span>

      <ul className="w-full mt-4 space-y-3">
        {historyData.map((item) => (
          <li
            key={`${about}-${item.year}`}
            style={{ backgroundColor: hexOpacity(curr.color, 0.15) }}
            className="w-full relative flex justify-between items-center py-2 px-4 overflow-hidden rounded-lg"
          >
            <time className="text-DarkBlue">{item.year}</time>
            <span className="font-medium text-DarkBlue">
              {formatValue(item?.value, about)}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function Community({
  appName,
  icon,
  color,
  number,
  img,
}: {
  appName: string;
  icon: ReactNode;
  color: string;
  number: number;
  img: StaticImageData;
}) {
  return (
    <Card className="border-0 shadow-none overflow-hidden bg-white rounded-2xl relative">
      <div
        className={
          'absolute w-full top-0  h-full right-0 bg-gradient-to-l from-WHITE/10 via-white to-white  z-[1]'
        }
      ></div>
      <Image
        src={img}
        alt={'commmunity'}
        placeholder={'blur'}
        className={
          'absolute top-0 w-full -bottom-5 h-full right-0 z-[0] object-cover object-left opacity-40 translate-x-1/3'
        }
      />
      <CardHeader className="pb-2 z-10">
        <CardTitle className="text-DarkBlue z-10 text-xl xs:text-lg md:text-xl">
          {appName} Community
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 z-10 pt-3">
        <div className="flex items-center z-10">
          <div
            className="p-4 rounded-2xl  mr-4 z-10"
            style={{ backgroundColor: hexOpacity(color, 0.5) }}
          >
            {icon}
          </div>
          <div className=" z-10">
            <span className="text-4xl font-semibold text-DarkBlue flex flex-row items-center gap-2 ">
              <NumberTriggerOnScroll once={false}>
                {number}
              </NumberTriggerOnScroll>
              {appName == 'Telegram' ? 'K' : 'M'}
            </span>
            <p className="text-slate-500 dark:text-slate-400 text-sm z-10">
              Followers
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default OverviewTab;

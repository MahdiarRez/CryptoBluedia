'use client';
import { Currency } from '@/app/lib/types';
import { DirectionAwareTabs } from '@/app/components/ui/tabs';
import OverviewTab from '../tabs/overviewTab';
import { FaEye } from 'react-icons/fa6';
import { MdInsertChart } from 'react-icons/md';
import { RiNewsFill } from 'react-icons/ri';
import FcasTab from '../tabs/fcasTab';
import NewsTab from '../tabs/newsTab';

function CryptoBody({ currency }: { currency: Currency }) {
  const tabs = [
    {
      id: 0,
      label: 'Overview',
      content: <OverviewTab currency={currency} />,
      icon: <FaEye />,
    },
    {
      id: 1,
      label: 'FCAS',
      content: <FcasTab currency={currency} />,
      icon: <MdInsertChart />,
    },
    {
      id: 2,
      label: 'News',
      content: <NewsTab />,
      icon: <RiNewsFill />,
    },
  ];

  return (
    <div className="flex flex-col items-center w-full h-full bg-WHITE">
      <div className="min-h-dvh [perspective:1000px]   flex flex-col  w-full  items-start justify-start my-4">
        <DirectionAwareTabs rounded={true} tabs={tabs} />
      </div>
    </div>
  );
}

export default CryptoBody;

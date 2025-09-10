'use client';
import { Currency } from '@/app/lib/types';
import { DirectionAwareTabs } from '@/app/components/ui/tabs';
import OverviewTab from '../tabs/overviewTab';
import { FaEye } from 'react-icons/fa6';
import { MdInsertChart } from 'react-icons/md';
import { RiNewsFill } from 'react-icons/ri';
import FcasTab from '../tabs/fcasTab';
import NewsTab from '../tabs/newsTab';
import Seperator from '@/app/components/ui/seperator';

function CryptoBody({ currency }: { currency: Currency }) {
  return (
    <div className="flex flex-col items-center w-full h-full bg-WHITE dark:bg-DarkBlue">
      <div className="min-h-dvh flex flex-col  w-full  items-start justify-start my-4">
        <Seperator>Overview</Seperator>
        <OverviewTab currency={currency} />
        <Seperator>FCAS</Seperator>
        <FcasTab currency={currency} />
      </div>
    </div>
  );
}

export default CryptoBody;

import { Currency } from '@/app/lib/utils/types';

import { Tabs } from '@/app/components/aceternityUi/tabs';
import OverviewTab from './overviewTab';
import { FaEye } from 'react-icons/fa6';
import { MdInsertChart } from 'react-icons/md';
import { RiNewsFill } from 'react-icons/ri';

function CryptoBody({ currency }: { currency: Currency }) {
  const tabs = [
    {
      title: 'Overview',
      value: 'overview',
      content: <OverviewTab currency={currency} />,
      icon: <FaEye />,
    },
    {
      title: 'FCAS',
      value: 'FCAS',
      content: <OverviewTab currency={currency} />,
      icon: <MdInsertChart />,
    },
    {
      title: 'News',
      value: 'news',
      content: <OverviewTab currency={currency} />,
      icon: <RiNewsFill />,
    },
  ];

  return (
    <div className="flex flex-col items-center w-full h-full">
      <div className="min-h-dvh [perspective:1000px]   flex flex-col  w-full  items-start justify-start my-4">
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
}

export default CryptoBody;

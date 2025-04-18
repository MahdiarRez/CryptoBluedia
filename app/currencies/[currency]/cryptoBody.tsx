import { Currency } from '@/app/lib/utils/types';

import { DirectionAwareTabs } from '@/app/components/aceternityUi/tabs';
import OverviewTab from './overviewTab';
import { FaEye } from 'react-icons/fa6';
import { MdInsertChart } from 'react-icons/md';
import { RiNewsFill } from 'react-icons/ri';

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
      content: <OverviewTab currency={currency} />,
      icon: <MdInsertChart />,
    },
    {
      id: 2,
      label: 'News',
      content: <OverviewTab currency={currency} />,
      icon: <RiNewsFill />,
    },
  ];

  return (
    <div className="flex flex-col items-center w-full h-full">
      <div className="min-h-dvh [perspective:1000px]   flex flex-col  w-full  items-start justify-start my-4">
        <DirectionAwareTabs rounded={true} tabs={tabs} />
      </div>
    </div>
  );
}

export default CryptoBody;

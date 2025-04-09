import { Currency } from '@/app/lib/utils/types';
import CardDetails from './cardDetails';
import { GrScorecard } from 'react-icons/gr';
import { GoAlertFill } from 'react-icons/go';
import { FaRankingStar } from 'react-icons/fa6';
import { MdOutlineSentimentSatisfiedAlt } from 'react-icons/md';
import { DonutChart, PriceHistoryChart } from './currencyCharts';

function CryptoBody({ currency }: { currency: Currency }) {
  const riskRewardData = [
    { name: 'Risk', value: currency.risk },
    { name: 'Reward', value: currency.reward },
  ];
  return (
    <div className="flex flex-col items-center w-full">
      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 w-full gap-6 mt-8">
        <CardDetails
          currency={currency}
          icon={
            <GrScorecard
              className=" p-2 rounded-md text-4xl text-white"
              style={{ backgroundColor: currency.color }}
            />
          }
          title="Value"
          value={currency.value}
          symbol="%"
        />
        <CardDetails
          currency={currency}
          icon={
            <GoAlertFill
              className=" p-2 rounded-md text-4xl text-white"
              style={{ backgroundColor: currency.color }}
            />
          }
          title="Risk/Reward"
          risk={currency.risk}
          reward={currency.reward}
          symbol="/"
          value={2}
        />
        <CardDetails
          currency={currency}
          icon={
            <FaRankingStar
              className=" p-2 rounded-md text-4xl text-white"
              style={{ backgroundColor: currency.color }}
            />
          }
          title="Rank 2025"
          symbol="#"
          value={currency.rank2025}
        />
        <CardDetails
          currency={currency}
          icon={
            <MdOutlineSentimentSatisfiedAlt
              className=" p-2 rounded-md text-4xl text-white"
              style={{ backgroundColor: currency.color }}
            />
          }
          title="Sentiment"
          value={currency.sentiment}
          symbol="%"
        />
      </div>
      <div className="flex flex-col lg2:flex-row items-center w-full mt-7 gap-6">
        <PriceHistoryChart currency={currency} />
        <DonutChart
          data={riskRewardData}
          title="Risk vs Reward"
          description="Balance between risk and potential reward"
          colors={[currency.color, '#121212']} // rose and purple
          valueFormatString="percent"
        />
      </div>
    </div>
  );
}

export default CryptoBody;

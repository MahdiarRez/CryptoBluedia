import { ProgressBar } from '@/app/components/ui/progressBar';
import CardDetails from './cardDetails';
import { Currency } from '@/app/lib/utils/types';

interface HistoryData {
  year: number | null;
  value: number | string | null;
}

interface HistoryCardProps {
  curr: Currency;
  about: 'price' | 'rank' | 'rol';
}

function OverviewTab({ currency }: { currency: Currency }) {
  const radarData = [
    { name: 'risk', val: currency.risk },
    { name: 'reward', val: currency.reward },
    { name: 'psychology', val: currency.psychology },
    { name: 'sentiment', val: currency.sentiment },
    { name: 'value', val: currency.value },
  ];

  return (
    <div className="bg-WHITE h-auto">
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
      <div className="w-full flex flex-row items-center justify-center">
        <div>
          {radarData.map((item, index) => (
            <div key={item.name} className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-purple-500" />
                  <span className="text-slate-300 font-medium">
                    {item.name}
                  </span>
                </div>
                <span className="text-slate-400">{item.val}/100</span>
              </div>
              <ProgressBar
                value={item.val}
                delay={0.1 * index}
                color="from-purple-500 to-indigo-500"
              />
            </div>
          ))}
        </div>
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
          {about == 'rol' ? 'ROL Hisotry' : title}
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
            className="w-full relative flex justify-between items-center py-2 px-4 overflow-hidden rounded-lg"
          >
            <span
              className=" absolute top-0 right-0 bottom-0 left-0 opacity-15"
              style={{ backgroundColor: curr.color }}
            ></span>
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

export default OverviewTab;

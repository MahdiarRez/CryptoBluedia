import { Currency } from '@/app/lib/utils/types';
import { ProgressBar } from '@/app/components/ui/progressBar';

function FcasTab({ currency }: { currency: Currency }) {
  const radarData = [
    { name: 'risk', val: currency.risk },
    { name: 'reward', val: currency.reward },
    { name: 'psychology', val: currency.psychology },
    { name: 'sentiment', val: currency.sentiment },
    { name: 'value', val: currency.value },
  ];
  return (
    <div>
      {radarData.map((item, index) => (
        <div key={item.name} className="space-y-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-purple-500" />
              <span className="text-slate-300 font-medium">{item.name}</span>
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
  );
}

export default FcasTab;

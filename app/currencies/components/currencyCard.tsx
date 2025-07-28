import { Card, CardContent } from '@/app/components/uiKits/cardShadcn';
import { hexOpacity } from '@/app/lib/helper';
import { Currency } from '@/app/lib/types';
import Image from 'next/image';
import Link from 'next/link';

interface CurrencyCardProps {
  currency: Currency;
}

export function CurrencyCard({ currency }: CurrencyCardProps) {
  const color = currency.color;

  return (
    <Link href={`/currencies/${currency.id}`} className="block h-full">
      <Card className="h-full overflow-hidden border-none hover:shadow-md hover:-translate-y-0.5 transition-all  duration-300">
        <CardContent className="p-0">
          <div className="flex items-center p-4 border-b bg-white">
            <div className="relative mr-3">
              <Image
                src={currency.logo || '/logo.jpeg'}
                alt={`${currency.name} logo`}
                width={40}
                height={40}
                placeholder="empty"
                className="w-10 h-10 rounded-2xl"
              />
            </div>
            <div>
              <h3 className="font-medium text-DarkBlue capitalize text-nowrap">
                {currency.name}
              </h3>
              <p className="text-sm text-gray-500 opacity-70">
                {currency?.id?.toUpperCase()}
              </p>
            </div>
            <div className="ml-auto text-right">
              <p className="font-semibold text-DarkBlue/90">
                #{currency.rank2025}
              </p>
              <div
                className={`flex items-center justify-end text-sm $
                  `}
              >
                {currency.narrative}
              </div>
            </div>
          </div>

          <div
            className={`grid grid-cols-2 divide-x`}
            style={{ backgroundColor: hexOpacity(color, 0.9) }}
          >
            <div className="p-3 text-center">
              <p className="text-sm font-bold text-white">Risk</p>
              <p className="font-semibold text-white">{currency.risk} %</p>
            </div>
            <div className="p-3 text-center">
              <p className="text-sm font-bold text-white">Reward</p>
              <p className="font-semibold text-white">{currency.reward} %</p>
            </div>
          </div>

          <div className="px-4 py-3 bg-gray-50">
            <div className="flex justify-between items-center">
              <div className="text-xs text-DarkBlue font-semibold">
                Sentiment{' '}
                <span className="font-bold text-sm">{currency.sentiment}</span>{' '}
                %
              </div>
              <div className="text-xs text-blue-600 font-medium">
                View Details →
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

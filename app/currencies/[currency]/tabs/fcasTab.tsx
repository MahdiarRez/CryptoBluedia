import { Currency } from '@/app/lib/utils/types';
import { ProgressBar } from '@/app/components/ui/progressBar';
import { TiArrowSortedUp } from 'react-icons/ti';
import CardDetails from '../cardDetails';
import Image from 'next/image';
import { NumberTriggerOnScroll } from '@/app/components/ui/numberFlow';
import GlowText from '@/app/components/ui/glowText';
import { ResponsiveRadar } from '@nivo/radar';
import { hexOpacity } from '@/app/lib/helper';

const chartData = [
  {
    taste: 'Techno',
    Value: 123,
  },
  {
    taste: 'Anchain',
    Value: 11,
  },
  {
    taste: 'Fanda',
    Value: 66,
  },
  {
    taste: 'Structure',
    Value: 88,
  },
  {
    taste: 'Economy',
    Value: 199,
  },
];

function FcasTab({ currency }: { currency: Currency }) {
  const radarData = [
    { name: 'Thecno', val: currency.risk },
    { name: 'Anchain', val: currency.reward },
    { name: 'Fanda', val: currency.psychology },
    { name: 'Structure', val: currency.sentiment },
    { name: 'Economy', val: currency.value },
  ];
  const cColor = currency.color;
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full flex flex-col md2:flex-row items-start justify-start gap-5 h-full md2:h-60 ">
        <div className="w-full flex flex-col items-stretch justify-between h-full ">
          <div className="w-full rounded-lg overflow-hidden flex flex-row h-20 ">
            <div
              className="flex-1 flex justify-center items-center text-DarkBlue font-extrabold  h-full"
              style={{ backgroundColor: hexOpacity(cColor, 0.2) }}
            >
              F
            </div>
            <span className="h-full w-px bg-white"></span>
            <div
              className="flex-1 flex justify-center items-center text-DarkBlue font-extrabold  h-full"
              style={{ backgroundColor: hexOpacity(cColor, 0.4) }}
            >
              <div className="flex flex-col items-center justify-center gap-0 relative">
                <TiArrowSortedUp className="rotate-180 text-2xl absolute -top-5" />
                <span>C</span>
                <TiArrowSortedUp className="text-2xl absolute -bottom-5" />
              </div>
            </div>
            <span className="h-full w-px bg-white"></span>
            <div
              className="flex-1 flex justify-center items-center text-DarkBlue font-extrabold  h-full"
              style={{ backgroundColor: hexOpacity(cColor, 0.6) }}
            >
              B
            </div>
            <span className="h-full w-px bg-white"></span>
            <div
              className="flex-1 flex justify-center items-center text-DarkBlue font-extrabold  h-full"
              style={{ backgroundColor: hexOpacity(cColor, 0.8) }}
            >
              A
            </div>
            <span className="h-full w-px bg-white"></span>
            <div
              className="flex-1 flex justify-center items-center text-DarkBlue font-extrabold  h-full"
              style={{ backgroundColor: hexOpacity(cColor, 1) }}
            >
              S
            </div>
          </div>
          {/* <div className="text-DarkBlue mt-4 font-semibold text-lg h-full bg-red-400">
          Score : 980
        </div> */}
          <div className="flex flex-col mt-4 md2:mt-0 md2:flex-row items-center justify-between gap-3 w-full">
            <CardDetails
              className="w-full h-full"
              currency={currency}
              title="Score"
              value={980}
            />
            <CardDetails
              className="w-full h-full"
              currency={currency}
              title="Coin Level"
              value={'Gem'}
              isNumberVal={false}
            />
            <CardDetails
              className="w-full h-full"
              currency={currency}
              title="Upside"
              value={1150}
              symbol=" %"
            />
          </div>
          {/* <span className="text-DarkBlue mt-0.5 font-semibold text-lg">
          Coin Level : <span className="text-green-500">Gem</span>
        </span>
        <span className="text-DarkBlue mt-0.5 font-semibold text-lg">
          Upsite : 1200%
        </span> */}
        </div>
        <div className="w-full h-full flex flex-col  justify-between ">
          {radarData.map((item, index) => (
            <div key={item.name} className="space-y-1">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full "
                    style={{ backgroundColor: cColor }}
                  />
                  <span className="text-DarkBlue font-medium">{item.name}</span>
                </div>
                <span className="text-DarkBlue/80">{item.val}/100</span>
              </div>
              <ProgressBar
                value={item.val}
                delay={0.1 * index}
                color={cColor}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-row-reverse items-center justify-between mt-8 bg-DarkBlue/85 py-3 px-5 rounded-xl">
        <div className="flex flex-row items-center gap-4">
          <div className="flex flex-row items-center gap-2">
            {[...Array(5)].map((_, i) => {
              return (
                <div
                  className="w-10 h-10 rounded-lg bg-white flex justify-center items-center"
                  key={i}
                >
                  <Image
                    src={currency.logo}
                    alt={currency.name}
                    width={24}
                    height={24}
                    className="h-6 w-6 object-cover"
                  />
                </div>
              );
            })}
          </div>
          <GlowText className="text-xl text-white font-bold">
            <NumberTriggerOnScroll className="text-xl" once children={86} /> %
          </GlowText>
        </div>
        <span className="text-lg text-white font-semibold">
          Investment Value :
        </span>
      </div>
      <div className="h-96 w-full relative mt-9">
        <FcasChart data={chartData} color={cColor} />
      </div>
    </div>
  );
}

export function FcasChart({ data, color }: { data: any; color: string }) {
  return (
    <ResponsiveRadar
      data={data}
      keys={['Value']}
      indexBy="taste"
      valueFormat=">-0.3"
      margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
      borderColor={{ from: 'color' }}
      gridLabelOffset={36}
      dotSize={10}
      gridShape="linear"
      dotColor={{ theme: 'background' }}
      dotBorderWidth={2}
      colors={color}
      blendMode="multiply"
      motionConfig="stiff"
      legends={[
        {
          anchor: 'top-left',
          direction: 'column',

          translateX: -50,
          translateY: -40,
          itemWidth: 80,
          itemHeight: 20,
          itemTextColor: '#3e3e3e',
          symbolSize: 12,
          symbolShape: 'square',
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: '#000',
              },
            },
          ],
        },
      ]}
    />
  );
}

export default FcasTab;

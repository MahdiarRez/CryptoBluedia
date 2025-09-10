'use client';
import { ResponsiveRadar } from '@nivo/radar';
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

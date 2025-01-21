'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import Button from '@/app/components/button';
import {
  Card,
  CardBody,
  Typography,
  IconButton,
  TypographyProps,
  CardFooter,
} from '@material-tailwind/react';
import merge from 'deepmerge';

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

interface ChartsPropsType {
  height: number;
  series: object[];
  options: object;
}

function AreaChart({
  height = 90,
  series,
  colors,
  options,
}: Partial<ChartsPropsType> & {
  colors: string | string[];
}) {
  const chartOptions = React.useMemo(
    () => ({
      colors,
      ...merge(
        {
          chart: {
            height: height,
            type: 'area',
            zoom: {
              enabled: false,
            },
            toolbar: {
              show: false,
            },
          },
          title: {
            show: '',
          },
          dataLabels: {
            enabled: false,
          },
          legend: {
            show: false,
          },
          markers: {
            size: 0,
            strokeWidth: 0,
            strokeColors: 'transparent',
          },
          stroke: {
            curve: 'smooth',
            width: 2,
          },
          grid: {
            show: false,
            xaxis: {
              lines: {
                show: false,
              },
            },
            padding: {
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
            },
          },
          tooltip: {
            theme: 'light',
          },
          yaxis: {
            labels: {
              show: false,
            },
          },
          xaxis: {
            axisTicks: {
              show: false,
            },
            axisBorder: {
              show: false,
            },
            labels: {
              show: false,
            },
          },
          fill: {
            type: 'gradient',
            gradient: {
              shadeIntensity: 1,
              opacityFrom: 0.4,
              opacityTo: 0.6,
              stops: [0, 100],
            },
          },
        },
        options ? options : {}
      ),
    }),
    [height, colors, options]
  );

  return (
    <Chart
      type="area"
      height={height}
      series={series as ApexAxisChartSeries}
      options={chartOptions as never}
    />
  );
}

const TABLE_ROW = [
  {
    img: 'https://www.material-tailwind.com/logos/btc.png',
    digitalAsset: 'BTC',
    detail: 'Bitcoin',
    price: '$46,727.30',
    change: '+2.92%',
    volume: '$45.31B',
    market: '$915.61B',
    color: 'green',
    trend: 4,
  },

  {
    img: 'https://www.material-tailwind.com/logos/eth.png',
    digitalAsset: 'ETH',
    detail: 'Ethereum',
    price: '$2,609.30',
    change: '+6.80%',
    volume: '$23.42B',
    market: '$313.58B',
    color: 'green',
  },
  {
    img: 'https://www.material-tailwind.com/logos/usdt.png',
    digitalAsset: 'USDT',
    detail: 'TetherUS',
    price: '$1.00',
    change: '-0.01%',
    volume: '$94.37B',
    market: '$40,600',
    color: 'red',
  },
  {
    img: 'https://www.material-tailwind.com/logos/sol.png',
    digitalAsset: 'SOL',
    detail: 'Solana',
    price: '$1.00',
    change: '+6.35%',
    volume: '$3.48B',
    market: '$43.26B',
    color: 'green',
  },
];

const TABLE_HEAD = [
  {
    head: 'Digital Asset',
    customeStyle: '!text-left',
  },
  {
    head: 'Price',
    customeStyle: 'text-right',
  },
  {
    head: 'Change',
    customeStyle: 'text-right',
  },
  {
    head: 'Volume',
    customeStyle: 'text-right',
  },
  {
    head: 'Market Cap',
    customeStyle: 'text-right',
  },
  {
    head: 'Trend',
    customeStyle: 'text-right',
  },
  {
    head: 'Info',
    customeStyle: 'text-right',
  },
];

export function CryptoTable() {
  return (
    <Card
      className="h-full w-full rounded-2xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),_0px_1px_0px_0px_rgba(25,28,33,0.02),_0px_0px_0px_1px_rgba(25,28,33,0.08)]  overflow-hidden"
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      {/*<CardHeader*/}
      {/*  floated={false}*/}
      {/*  shadow={false}*/}
      {/*  className="mb-4 flex flex-wrap justify-between items-center rounded-none bg-WHITE"*/}
      {/*  placeholder={undefined}*/}
      {/*  onPointerEnterCapture={undefined}*/}
      {/*  onPointerLeaveCapture={undefined}*/}
      {/*>*/}
      {/*  <div className={'flex flex-col items-center justify-center'}>*/}
      {/*    */}
      {/*</CardHeader>*/}
      <CardBody
        className="overflow-x-auto overflow-y-hidden !px-0 py-2 "
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <table className="w-full min-w-max table-auto relative ">
          <thead>
            <tr>
              {TABLE_HEAD.map(({ head, customeStyle }) => (
                <th
                  key={head}
                  className={`border-b border-gray-300 !p-4 pb-8 ${customeStyle}`}
                >
                  <Typography
                    color="blue-gray"
                    variant="small"
                    className="!font-bold"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROW.map(
              (
                {
                  img,
                  digitalAsset,
                  detail,
                  price,
                  change,
                  volume,
                  market,
                  color,
                },
                index
              ) => {
                const isLast = index === TABLE_ROW.length - 1;
                const classes = isLast
                  ? '!p-4'
                  : '!p-4 border-b border-gray-300';
                return (
                  <tr key={digitalAsset}>
                    <td className={classes}>
                      <div className="flex items-center gap-4 text-left">
                        <img
                          src={img}
                          alt={digitalAsset}
                          className="h-10 w-10"
                        />
                        <div>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="!font-semibold"
                            placeholder={undefined}
                            onPointerEnterCapture={undefined}
                            onPointerLeaveCapture={undefined}
                          >
                            {digitalAsset}
                          </Typography>
                          <Typography
                            variant="small"
                            className="!font-normal text-gray-600"
                            placeholder={undefined}
                            onPointerEnterCapture={undefined}
                            onPointerLeaveCapture={undefined}
                          >
                            {detail}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                        variant="small"
                        className="text-right !font-normal text-gray-600"
                      >
                        {price}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                        color={color as TypographyProps['color']}
                        className="text-right !font-bold"
                      >
                        {change}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                        variant="small"
                        className="text-right !font-normal text-gray-600"
                      >
                        {volume}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                        variant="small"
                        className="text-right !font-normal text-gray-600"
                      >
                        {market}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <div className="ml-auto h-12 max-w-[12rem] -translate-y-6">
                        <AreaChart
                          colors={['#2196F373']}
                          options={{}}
                          series={[
                            {
                              name: '2023 Sales',
                              data: [30, 40, 500, 420, 700, 350, 500, 330, 900],
                            },
                          ]}
                        />
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex justify-end gap-4">
                        {/*<IconButton variant="text" size="sm">*/}
                        {/*  <DocumentMagnifyingGlassIcon className="h-5 w-5 text-gray-900" />*/}
                        {/*</IconButton>*/}
                        {/*<IconButton variant="text" size="sm">*/}
                        {/*  <FlagIcon className="h-5 w-5 text-gray-900" />*/}
                        {/*</IconButton>*/}
                        hi
                      </div>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </CardBody>
      <CardFooter
        className="flex flex-col gap-3 sm:flex-row sm:gap-0 items-center justify-between border-t border-blue-gray-50 p-4"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <Button classes={'rounded-lg font-medium min-w-[113px]'}>
          Previous
        </Button>
        <div className="flex items-center gap-2">
          <IconButton
            variant="outlined"
            size="sm"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            1
          </IconButton>{' '}
          <IconButton
            variant="outlined"
            size="sm"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            1
          </IconButton>{' '}
          <IconButton
            variant="outlined"
            size="sm"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            1
          </IconButton>{' '}
          <IconButton
            variant="outlined"
            size="sm"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            1
          </IconButton>{' '}
          <IconButton
            variant="outlined"
            size="sm"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            1
          </IconButton>{' '}
          <IconButton
            variant="outlined"
            size="sm"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            1
          </IconButton>
        </div>
        <Button classes={'rounded-lg font-medium min-w-[113px]'}>Next</Button>
      </CardFooter>
    </Card>
  );
}

export default CryptoTable;

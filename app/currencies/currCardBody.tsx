'use client';
import { Typography } from '@material-tailwind/react';
import Button from '@/app/components/button';
import { RiInfoCardFill } from 'react-icons/ri';
import React, { useContext } from 'react';
// import AreaChart from '@/app/currencies/areaChart';
import { CurrenciesContext } from '@/app/currencies/currCard';
import Link from 'next/link';
import img from '@/public/shibainu.png';
import Image from 'next/image';

export interface itemT {
  DigitalAsset: string;
  Price: number;
  Change: number;
  Volume: number;
  MarketCap: number;
  // Chart: string;
  BluediaScoring: string;
}

function CurrCardBody() {
  const currencies: itemT[] = useContext(CurrenciesContext);
  console.log(currencies);

  return (
    <tbody>
      {currencies?.map((item: itemT, index: number) => {
        const isLast = index === currencies.length - 1;
        const classes = isLast ? '!p-4' : '!p-4 border-b border-gray-300';
        return (
          <tr key={item.DigitalAsset}>
            <td className={classes}>
              <div className="flex items-center gap-4 text-left">
                <Image
                  src={img}
                  alt={item.DigitalAsset}
                  className="h-10 w-10 object-cover rounded-lg"
                  placeholder={'blur'}
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
                    {item.DigitalAsset}
                  </Typography>
                  <Typography
                    variant="small"
                    className="!font-normal text-gray-600 dark:text-gray-400"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    {'det'}
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
                className="text-right !font-normal text-gray-600 dark:text-gray-400"
              >
                {item.Price}
              </Typography>
            </td>
            <td className={classes}>
              <Typography
                variant="small"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                color={'red'}
                className="text-right !font-bold"
              >
                {item.Change}
              </Typography>
            </td>
            <td className={classes}>
              <Typography
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                variant="small"
                className="text-right !font-normal text-gray-600 dark:text-gray-400"
              >
                {item.Volume}
              </Typography>
            </td>
            <td className={classes}>
              <Typography
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                variant="small"
                className="text-right !font-normal text-gray-600 dark:text-gray-400"
              >
                {item.MarketCap}
              </Typography>
            </td>
            {/*<td className={classes}>*/}
            {/*  <div className="ml-auto h-12 max-w-[12rem] -translate-y-6">*/}
            {/*    <AreaChart*/}
            {/*      colors={['#28c9e1']}*/}
            {/*      options={{}}*/}
            {/*      series={[*/}
            {/*        {*/}
            {/*          name: '2025 Sales',*/}
            {/*          data: [30, 40, 500, 420, 700, 350, 500, 330, 900],*/}
            {/*        },*/}
            {/*      ]}*/}
            {/*    />*/}
            {/*  </div>*/}
            {/*</td>*/}
            <td className={classes}>
              <div className="flex justify-end gap-4">
                <Link href={`/currencies/${item.DigitalAsset}`}>
                  <Button
                    classes={
                      'rounded-lg px-6 flex flex-row-reverse items-center justify-center gap-1.5'
                    }
                  >
                    <span className={'tracking-wide font-medium'}>More</span>{' '}
                    <RiInfoCardFill className={'text-lg'} />
                  </Button>
                </Link>
              </div>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}

export default CurrCardBody;

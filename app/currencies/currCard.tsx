'use client';
import React, { createContext } from 'react';
import { Card, CardBody, Typography } from '@material-tailwind/react';
import { itemT } from '@/app/currencies/currCardBody';
import Pagination from '@/app/currencies/pagination';
import CurrCardBody from '@/app/currencies/currCardBody';

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
  // {
  //   head: 'Chart',
  //   customeStyle: 'text-right',
  // },
  {
    head: 'Bluedia-Scoring',
    customeStyle: 'text-right',
  },
];

export const CurrenciesContext = createContext([
  {
    DigitalAsset: 'assetName',
    Price: 22,
    Change: 22,
    Volume: 22,
    MarketCap: 22,
    // Chart: 'N/A',
    BluediaScoring: 'N/A',
  },
]);

function CurrCard({ currencies }: { currencies: itemT[] }) {
  return (
    <CurrenciesContext.Provider value={currencies}>
      <Card
        className="h-full w-full rounded-2xl dark:bg-DarkBlue dark:shadow-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),_0px_1px_0px_0px_rgba(25,28,33,0.02),_0px_0px_0px_1px_rgba(25,28,33,0.08)]  overflow-hidden"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
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
                      variant="small"
                      className="!font-bold text-DarkBlue dark:text-WHITE"
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
            <CurrCardBody />
          </table>
        </CardBody>
        <Pagination />
      </Card>
    </CurrenciesContext.Provider>
  );
}

export default CurrCard;

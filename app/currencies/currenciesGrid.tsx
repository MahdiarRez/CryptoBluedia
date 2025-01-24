'use client';
import React from 'react';
import Button from '@/app/components/button';
import {
  Card,
  CardBody,
  Typography,
  IconButton,
  // TypographyProps,
  CardFooter,
} from '@material-tailwind/react';
import CryptosBody from '@/app/currencies/currenciesBody';

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
    head: 'Chart',
    customeStyle: 'text-right',
  },
  {
    head: 'Bluedia-Scoring',
    customeStyle: 'text-right',
  },
];

export function CryptoTable() {
  return (
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
          <CryptosBody />
        </table>
      </CardBody>
      <CardFooter
        className="flex flex-col gap-3 sm:flex-row sm:gap-0 items-center justify-between border-t border-blue-gray-50 p-4"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <Button
          classes={
            'rounded-lg bg-transparent border-solid border border-DarkBlue font-normal min-w-[113px]'
          }
          text={'text-DarkBlue'}
        >
          Previous
        </Button>
        <div className="flex items-center gap-2">
          <IconButton
            variant="outlined"
            className={'border border-solid border-DarkBlue/40 text-DarkBlue'}
            size="md"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            1
          </IconButton>{' '}
          <IconButton
            variant="outlined"
            className={'border border-solid border-DarkBlue/40 text-DarkBlue'}
            size="md"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            2
          </IconButton>{' '}
          <IconButton
            variant="outlined"
            className={'border border-solid border-DarkBlue/40 text-DarkBlue'}
            size="md"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            3
          </IconButton>{' '}
          <IconButton
            variant="outlined"
            className={'border border-solid border-DarkBlue/40 text-DarkBlue'}
            size="md"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            4
          </IconButton>{' '}
          <IconButton
            color={'deep-purple'}
            variant="outlined"
            className={'border border-solid border-DarkBlue/40 text-DarkBlue'}
            size="md"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            ...
          </IconButton>{' '}
          <IconButton
            variant="outlined"
            className={'border border-solid border-DarkBlue/40 text-DarkBlue'}
            size="md"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            54
          </IconButton>
        </div>
        <Button
          classes={
            'rounded-lg bg-transparent border-solid border border-DarkBlue font-normal min-w-[113px]'
          }
          text={'text-DarkBlue'}
        >
          Next
        </Button>
      </CardFooter>
    </Card>
  );
}

export default CryptoTable;

import Button from '@/app/components/button';
import { CardFooter, IconButton } from '@material-tailwind/react';
import React from 'react';

function Pagination() {
  return (
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
  );
}

export default Pagination;

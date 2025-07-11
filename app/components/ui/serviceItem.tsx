import React from 'react';

function ServiceItem({
  h,
  p,
  icon,
}: {
  h: string;
  icon: React.ReactNode;
  p: string;
}) {
  return (
    <div className="lg2:min-h-[230px] text-DarkBlue  transition-colors duration-1000 w-full bg-white rounded-2xl flex flex-col p-8 items-start justify-between">
      {icon}
      <div className={'flex flex-col items-start w-full gap-2 mt-4'}>
        <h4 className={'text-2xl font-semibold'}>{h}</h4>
        <p className={'text-base font-normal text-left lg2:line-clamp-3'}>
          {p}
        </p>
      </div>
    </div>
  );
}

export default ServiceItem;

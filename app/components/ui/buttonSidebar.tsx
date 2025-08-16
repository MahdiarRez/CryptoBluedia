'use client';

import { ButtonProps } from '@/app/lib/types';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

export default function ButtonSidebar({
  label,
  id,
  icon,
  className,
  ...rest
}: ButtonProps) {
  const pathname = usePathname();
  return (
    <button
      type="button"
      {...rest}
      className={clsx(
        'w-full my-2 rounded-lg py-2.5 group cursor-pointer text-lg font-medium flex flex-row items-center justify-start pl-5 gap-2.5 transition',
        'text-left',
        'duration-150',
        pathname === id
          ? 'bg-LightBlue text-white cursor-default'
          : 'bg-transparent text-DarkBlue hover:bg-LightBlue/25',
        className
      )}
    >
      {icon}
      {label}
    </button>
  );
}

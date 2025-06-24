import React, { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';
import { PiNewspaperClippingFill } from 'react-icons/pi';

function NavMenuItem({
  children,
  href,
  icon,
}: {
  children: ReactNode;
  href: string;
  icon: ReactNode;
}) {
  const pathname = usePathname();
  return (
    <li className={'group relative min-w-fit'}>
      <Link
        className={clsx(
          'px-4 py-2.5 h-full font-semibold group-hover:opacity-40 text-sm gap-1 transition-opacity duration-200 dark:text-WHITE text-DarkBlue flex flex-row items-center',
          {
            'opacity-40': pathname == href,
          }
        )}
        href={href}
      >
        {icon}
        {children}
      </Link>
      {/* <span
        className={clsx(
          `w-1 h-1 absolute left-1/2 transform bg-DarkBlue bottom-1 -translate-x-1/2 animate-fade bg-opacity-70 animate-duration-500 rounded-full group-hover:flex`,
          {
            'flex group-hover:bg-opacity-70': pathname == href,
            'hidden group-hover:bg-opacity-40': pathname !== href,
          }
        )}
      ></span> */}
    </li>
  );
}

export default NavMenuItem;

import React, { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';

function NavMenuItem({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  const pathname = usePathname();
  return (
    <li className={'group relative'}>
      <Link className={'px-3'} href={href}>
        {children}
      </Link>
      <span
        className={clsx(
          `w-1 h-1 absolute -bottom-2 left-1/2 transform -translate-x-1/2 animate-fade-left bg-opacity-70 animate-duration-500 bg-DarkBlue rounded-full  group-hover:flex`,
          {
            'flex group-hover:bg-opacity-70': pathname == href,
            'hidden group-hover:bg-opacity-55': pathname !== href,
          }
        )}
      ></span>
    </li>
  );
}

export default NavMenuItem;
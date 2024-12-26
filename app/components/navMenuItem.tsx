import React, { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';

function NavMenuItem({
  children,
  href,
  isScrolled,
}: {
  children: ReactNode;
  href: string;
  isScrolled: boolean;
}) {
  const pathname = usePathname();
  return (
    <li className={'group relative py-3 rounded-lg min-w-fit'}>
      <Link className={'px-4 py-2.5 h-full'} href={href}>
        {children}
      </Link>
      <span
        className={clsx(
          `w-1 h-1 absolute left-1/2 transform -translate-x-1/2 animate-fade bg-opacity-70 animate-duration-500 rounded-full ${isScrolled ? 'bg-white bottom-1.5' : 'bg-DarkBlue bottom-1'} group-hover:flex`,
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

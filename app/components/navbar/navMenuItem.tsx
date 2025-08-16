import React, { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';

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
          'px-4 py-2.5 h-full font-semibold group-hover:opacity-40 text-sm gap-2 transition-opacity duration-200 dark:text-WHITE text-DarkBlue flex flex-row items-center',
          {
            'opacity-40': pathname == href,
          }
        )}
        href={href}
      >
        {icon}
        {children}
      </Link>
    </li>
  );
}

export default NavMenuItem;

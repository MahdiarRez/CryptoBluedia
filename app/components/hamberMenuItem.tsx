import React, { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

function HamberMenuItem({
  children,
  setMenuIsOpen,
  href,
}: {
  children: ReactNode;
  setMenuIsOpen: (value: boolean | ((prevValue: boolean) => boolean)) => void;
  href: string;
}) {
  const pathname = usePathname();
  return (
    <li className={'flex h-10 items-center justify-start'}>
      <Link
        className={`w-full h-full flex relative justify-start items-center group pl-7`}
        onClick={() => setMenuIsOpen(false)}
        href={href}
      >
        <span
          className={clsx(
            `w-1 h-1 absolute left-4 animate-fade bg-opacity-80 animate-duration-500 bg-white dark:bg-DarkBlue rounded-full group-hover:flex `,
            {
              'flex group-hover:bg-opacity-80': pathname == href,
              'hidden group-hover:bg-opacity-70': pathname !== href,
            }
          )}
        ></span>
        {children}
      </Link>
    </li>
  );
}

export default HamberMenuItem;

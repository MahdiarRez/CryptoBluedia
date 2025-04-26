'use client';
import { cn } from '@/app/lib/utils/framer';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'motion/react';
import logo from '@/public/logo.jpeg';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div
      ref={ref}
      // IMPORTANT: Change this to class of `fixed` if you want the navbar to be fixed
      className={cn('fixed inset-x-0 top-5 z-[999] w-full ', className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible }
            )
          : child
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? 'blur(10px)' : 'none',
        boxShadow: visible
          ? '0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset'
          : 'none',
        width: visible ? '30%' : '100%',
        y: visible ? 20 : 0,
      }}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        'relative z-[60]  mx-auto hidden w-full md:min-w-[700px] lg:min-w-[840px] min-w-[800px] xl:min-w-[900px] flex-row items-center justify-between self-start rounded-2xl bg-transparent px-5 sm:px-8 lg:px-28 xl:px-40 py-2 md:flex dark:bg-transparent',
        visible && 'bg-white/80 dark:bg-white/80',
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const path = usePathname();

  return (
    <motion.div
      className={cn(
        'absolute inset-0 px-20 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-semibold text-zinc-600 transition duration-200 hover:text-zinc-800 md:flex lg:space-x-2',
        className
      )}
    >
      {items.map((item, idx) => {
        return (
          <Link
            onClick={onItemClick}
            className={clsx(
              `relative px-4 py-2 text-DarkBlue  dark:text-white`,
              path == item.link ? 'opacity-20' : 'opacity-100 hover:opacity-60'
            )}
            key={`link-${idx}`}
            href={item.link}
          >
            <span className="relative z-20 ">{item.name}</span>
          </Link>
        );
      })}
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? 'blur(10px)' : 'none',
        boxShadow: visible
          ? '0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset'
          : 'none',
        width: visible ? '80%' : '100%',
        paddingRight: visible ? '16px' : '0px',
        paddingLeft: visible ? '16px' : '0px',
        // borderRadius: visible ? '4px' : '2rem',
        y: visible ? 20 : 0,
      }}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        'relative z-50 mx-auto flex w-full rounded-2xl  flex-col items-center justify-between bg-transparent  py-2 md:hidden',
        visible && 'bg-white/80 dark:bg-neutral-950/80',
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        'flex w-full px-4 sm:px-8 flex-row items-center justify-between',
        className
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cn(
            'absolute inset-x-0 top-16  z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-red-800 px-4 py-8 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:bg-neutral-950',
            className
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      className={`menu md:hidden bg-transparent border-none rounded-lg hover:bg-opacity-60 cursor-pointer flex p-0 focus:outline-none hover:bg-WHITE `}
      onClick={onClick}
      aria-label="Main Menu"
      aria-expanded={isOpen}
      aria-controls="main-navigation"
    >
      <svg width="50" height="50" viewBox="0 0 100 100">
        <path
          className={`line line1 ${
            isOpen ? 'opened' : ''
          } fill-none stroke-DarkBlue stroke-[5] transition-all cursor-pointer duration-500 ease-in-out`}
          d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
          style={{
            strokeDasharray: isOpen ? '90 207' : '60 207',
            strokeDashoffset: isOpen ? '-134' : '0',
          }}
        />
        <path
          className={`line line2 ${
            isOpen ? 'opened' : ''
          } fill-none stroke-DarkBlue stroke-[5] transition-all cursor-pointer duration-500 ease-in-out`}
          d="M 20,50 H 80"
          style={{
            strokeDasharray: isOpen ? '1 60' : '60 60',
            strokeDashoffset: isOpen ? '-30' : '0',
          }}
        />
        <path
          className={`line line3 ${
            isOpen ? 'opened' : ''
          } fill-none stroke-DarkBlue stroke-[5] transition-all cursor-pointer duration-500 ease-in-out`}
          d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
          style={{
            strokeDasharray: isOpen ? '90 207' : '60 207',
            strokeDashoffset: isOpen ? '-134' : '0',
          }}
        />
      </svg>
    </button>
    // ) : (
    //   <span className="text-black dark:text-white" onClick={onClick}>
    //     open
    //   </span>
  );
};

export const NavbarLogo = () => {
  return (
    <Link
      href="/"
      className="relative  cursor-pointer z-20 mr-4 flex items-center space-x-2 py-1 text-xl font-normal text-black"
    >
      <Image
        src={logo}
        alt="logo"
        placeholder="blur"
        width={33}
        height={33}
        className="rounded-lg"
      />
      <span className="font-medium text-black dark:text-white uppercase">
        Blue<span className="text-LightBlue">dia</span>
      </span>
    </Link>
  );
};

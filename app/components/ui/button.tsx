'use client';

import React, { ReactNode, ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  classes?: string;
  textColor?: string;
  isDisabled?: boolean;
}

function Button({
  children,
  classes,
  textColor = 'text-white',
  isDisabled = false,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={isDisabled}
      className={clsx(
        classes,
        textColor,
        'bg-DarkBlue hover:bg-LightBlue transition-all duration-300 ease-out px-6 h-10',
        {
          'disabled:bg-gray-500 disabled:hover:bg-gray-500': isDisabled,
          'dark:text-DarkBlue dark:bg-WHITE dark:hover:bg-LightBlue': true,
        }
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;

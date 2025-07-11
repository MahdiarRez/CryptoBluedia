import React, { ReactNode } from 'react';

function Button({
  children,
  classes,
  text = 'text-white',
  isDisabled = false,
}: {
  children: ReactNode;
  classes?: string;
  text?: string;
  isDisabled?: boolean;
}) {
  return (
    <button
      disabled={isDisabled}
      className={`${classes} ${text} disabled:hover:bg-gray-500 disabled:bg-gray-500 ${isDisabled && 'disabled'} bg-DarkBlue dark:text-DarkBlue dark:hover:bg-LightBlue dark:bg-WHITE transition-all duration-300 ease-out hover:bg-LightBlue px-6 h-10`}
    >
      {children}
    </button>
  );
}

export default Button;

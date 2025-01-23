import React, { ReactNode } from 'react';

function Button({
  children,
  classes,
  text = 'text-white',
}: {
  children: ReactNode;
  classes?: string;
  text?: string;
}) {
  return (
    <button
      className={`${classes} ${text} bg-DarkBlue dark:text-DarkBlue dark:bg-WHITE transition-all duration-300 ease-out hover:bg-LightBlue px-6 h-10`}
    >
      {children}
    </button>
  );
}

export default Button;

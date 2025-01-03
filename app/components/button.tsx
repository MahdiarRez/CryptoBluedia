import React, { ReactNode } from 'react';

function Button({
  children,
  classes,
}: {
  children: ReactNode;
  classes?: string;
}) {
  return (
    <button
      className={`${classes} text-white bg-DarkBlue dark:text-DarkBlue dark:bg-WHITE transition-all duration-300 hover:opacity-85 px-6 h-10`}
    >
      {children}
    </button>
  );
}

export default Button;

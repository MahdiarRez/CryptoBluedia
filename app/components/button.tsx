import React, { ReactNode } from 'react';

function Button({
  children,
  classes,
  isForNav = false,
}: {
  children: ReactNode;
  classes?: string;
  isForNav?: boolean;
}) {
  if (isForNav) {
    return (
      <button
        className={`${classes} text-white overflow-hidden flex flex-col justify-center items-center relative bg-DarkBlue rounded-lg px-6 transition-colors duration-300 h-10 group`}
      >
        <span className="group-hover:translate-y-10 transition-transform duration-300">
          {children}
        </span>
        <span className="bottom-10 group-hover:bottom-2 transition-all duration-300 absolute">
          {children}
        </span>
      </button>
    );
  }
  return (
    <button
      className={`${classes} text-white bg-DarkBlue dark:text-DarkBlue dark:bg-WHITE rounded-lg px-6 h-10`}
    >
      {children}
    </button>
  );
}

export default Button;

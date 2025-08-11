import React from 'react';
import { Toaster } from 'react-hot-toast';
import { toasterConfig } from '../constants';
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={
        'h-pageHeight w-dvw  bg-WHITE dark:bg-DarkBlue flex justify-center items-center'
      }
    >
      <div className="border border-solid border-DarkBlue rounded-xl p-9 bg-white">
        {children}
      </div>
      <Toaster {...toasterConfig} />
    </div>
  );
}

export default Layout;

import React from 'react';
import { NeonGradientCard } from '@/app/components/magicUi/neon-gradient-card';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={
        'h-dvh w-dvw bg-WHITE dark:bg-DarkBlue flex justify-center items-center'
      }
    >
      <div className="sm:max-w-md max-w-72 xs:max-w-96 mt-[7.407vh] w-full mx-auto rounded-2xl p-5 shadow-input bg-white dark:bg-DarkBlue">
        <div className="hidden sm:block">
          <NeonGradientCard borderSize={0} borderRadius={9}>
            {children}
          </NeonGradientCard>
        </div>

        <div className="sm:hidden">{children}</div>
      </div>
    </div>
  );
}

export default Layout;

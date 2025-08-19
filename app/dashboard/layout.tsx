import { ReactNode } from 'react';
import Sidebar from './components/sidebar';

function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-[700px]  h-[700px] overflow-y-hidden bg-WHITE px-5">
      <Sidebar />
      <main className="bg-white w-full my-7 rounded-2xl p-7 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}

export default MainLayout;

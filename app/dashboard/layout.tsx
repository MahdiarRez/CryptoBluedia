import { ReactNode } from 'react';
import Sidebar from './components/sidebar';

function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-[700px] border-t-2 border-white border-solid h-[700px] overflow-y-auto">
      <Sidebar />
      <main className="bg-white w-full h-full">{children}</main>
    </div>
  );
}

export default MainLayout;

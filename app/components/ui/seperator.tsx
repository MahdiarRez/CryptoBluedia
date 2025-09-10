import { ReactNode } from 'react';

function Seperator({ children }: { children: ReactNode }) {
  return (
    <div className=" w-full flex flex-row items-center justify-center my-14 gap-4 text-2xl text-DarkBlue/40">
      <span className="block h-0.5 w-56 bg-gradient-to-r via-DarkBlue/20 from-transparent to-DarkBlue/40"></span>
      <span>{children}</span>
      <span className="block h-0.5 w-56 bg-gradient-to-l via-DarkBlue/20 from-transparent to-DarkBlue/40"></span>
    </div>
  );
}

export default Seperator;

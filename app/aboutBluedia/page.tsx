import { Hero1 } from './hero1';
import { Hero2 } from './hero2';
import { Hero3 } from './hero3';
import { Hero4 } from './hero4';

export default function Page() {
  return (
    <div className="sm:px-8 lg:px-28 xl:px-40 bg-WHITE dark:bg-DarkBlue py-32 px-4 min-h-dvh w-full">
      <Hero1 />
      <Hero2 />
      <Hero3 />
    </div>
  );
}

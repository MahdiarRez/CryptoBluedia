import ContactForm from './contactForm';
import { Hero1 } from './hero1';
import { Hero2 } from './hero2';
import { Hero3 } from './hero3';

export const metadata = {
  title: 'About us',
  description: 'About crypto bluedia team',
};

export const dynamic = 'force-static'; // ssg

export default function Page() {
  return (
    <div className="sm:px-8 lg:px-28 xl:px-40 bg-WHITE dark:bg-DarkBlue pt-10 pb-32 px-4 min-h-dvh w-full">
      <Hero1 />
      <Hero2 />
      <ContactForm />
      <Hero3 />
    </div>
  );
}

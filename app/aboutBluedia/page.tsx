import { getUserWithProfile } from '../dashboard/actions/getUserProfile';
import { BluediaTeam } from './components/bluediaTeam';
import { Community } from './components/community';
import ContactForm from './components/contactForm';
import { HeaderDescription } from './components/header&Description';

export const metadata = {
  title: 'About us',
  description: 'About crypto bluedia team',
};

// export const dynamic = 'force-static';

export default async function Page() {
  const { user, profile, error } = await getUserWithProfile();
  console.log(profile);

  return (
    <div className="sm:px-8 lg:px-28 xl:px-40 bg-WHITE dark:bg-DarkBlue pt-10 pb-32 px-4 min-h-dvh w-full">
      <HeaderDescription />
      <BluediaTeam />
      <ContactForm />
      <Community />
    </div>
  );
}

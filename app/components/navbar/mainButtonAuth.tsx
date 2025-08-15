'use client';
import Link from 'next/link';
import { ButtonIntractive } from '../ui/buttonIntractive';
import { ButtonInteractiveSkeleton } from '../skeletons/buttonIntractiveSkeleton';
import { useAuth } from '@/app/context/authContext';

function MainButton() {
  const { profile, loading } = useAuth();

  if (loading) {
    return <ButtonInteractiveSkeleton />;
  }

  return (
    <>
      {profile ? (
        <Link href={'/dashboard'} className="md:block hidden">
          <ButtonIntractive className="bg-DarkBlue text-WHITE text-sm rounded-lg dark:bg-WHITE dark:text-DarkBlue">
            Dashboard
          </ButtonIntractive>
        </Link>
      ) : (
        <Link href={'/login'} className="md:block hidden">
          <ButtonIntractive className="bg-DarkBlue text-WHITE text-sm rounded-lg dark:bg-WHITE dark:text-DarkBlue">
            Login / Register
          </ButtonIntractive>
        </Link>
      )}
    </>
  );
}

export default MainButton;

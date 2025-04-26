'use client';
import { useRouter } from 'next/navigation';
import { InteractiveHoverButton } from './aceternityUi/btnAcet';

function BackBtn() {
  const router = useRouter();
  return (
    <InteractiveHoverButton
      onClick={() => router.back()}
      className=" fixed text-white left-5 bottom-5 z-50 rounded-lg bg-DarkBlue"
    >
      Back
    </InteractiveHoverButton>
  );
}

export default BackBtn;

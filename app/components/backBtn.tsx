'use client';
import { useRouter } from 'next/navigation';
import { InteractiveHoverButton } from './aceternityUi/btnAcet';

function BackBtn() {
  const router = useRouter();
  return (
    <InteractiveHoverButton
      onClick={() => router.back()}
      className=" fixed text-DarkBlue left-5 bottom-5 z-50 rounded-lg bg-white/50"
    >
      Back
    </InteractiveHoverButton>
  );
}

export default BackBtn;

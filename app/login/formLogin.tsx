'use client';
import React, { useActionState } from 'react';
import { Input } from '../components/aceternityUi/inputFormAcet';
import { Label } from '../components/aceternityUi/labelFormAcet';
import { cn } from '@/app/lib/utils/framer';
import { TextGenerate } from '@/app/components/textGenerate';
import Button from '@/app/components/button';
import { NeonGradientCard } from '@/app/components/magicUi/neon-gradient-card';
import { MdAccountBox } from 'react-icons/md';
import { formActionLogin } from '@/app/lib/utils/actions';

function FormLogin() {
  const [state, formAction, isPending] = useActionState(formActionLogin, null);

  console.log('state :', state);
  return (
    <div className="sm:max-w-md max-w-sm mt-[7.407vh] w-full mx-auto rounded-2xl p-5 shadow-input bg-white dark:bg-DarkBlue">
      <NeonGradientCard borderSize={0} borderRadius={9}>
        <div
          className={
            'flex flex-row items-center justify-start gap-1 flex-nowrap'
          }
        >
          <MdAccountBox
            className={'text-DarkBlue size-6 sm:size-7 dark:text-white'}
          />
          <h2 className="font-bold text-nowrap text-xl sm:text-2xl text-DarkBlue dark:text-white">
            Sign up at
          </h2>
          <TextGenerate
            text={'Crypto Bluedia'}
            delay={0.4}
            element={'h2'}
            preset={'fade'}
            classes="font-bold text-nowrap text-xl sm:text-2xl text-DarkBlue dark:text-white"
          />
        </div>
        {/*<p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">*/}
        {/*  Login to aceternity if you can because we don&apos;t have a login flow*/}
        {/*  yet*/}
        {/*</p>*/}
        <form className="mt-8 mb-1" action={formAction}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="firstName">First name</Label>
              <Input id="firstName" placeholder="Tyler" type="text" />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastName">Last name</Label>
              <Input id="lastName" placeholder="Durden" type="text" />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input id="password" placeholder="••••••••" type="password" />
          </LabelInputContainer>

          <Button
            classes="w-full h-12 text-lg  font-medium rounded-xl shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            // type="submit"
            isDisabled={isPending}
          >
            {isPending ? 'Signing up...' : 'Sign up'}
            <BottomGradient />
          </Button>

          <p className={'text-center mt-3'}>
            Already have account?{' '}
            <span
              className={
                'underline cursor-pointer ml-1 font-medium hover:text-DarkBlue transition-colors duration-300'
              }
            >
              Sign in
            </span>
          </p>
        </form>
      </NeonGradientCard>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn('flex flex-col space-y-2 w-full', className)}>
      {children}
    </div>
  );
};

export default FormLogin;

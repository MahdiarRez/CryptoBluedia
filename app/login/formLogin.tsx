'use client';
import React, { useActionState } from 'react';
import { Input } from '../components/aceternityUi/inputFormAcet';
import { Label } from '../components/aceternityUi/labelFormAcet';
import { cn } from '@/app/lib/utils/framer';
import Button from '@/app/components/button';
import { formActionLogin } from '@/app/lib/utils/actions';

function FormLogin() {
  const [state, formAction, isPending] = useActionState(formActionLogin, null);

  console.log('state :', state);
  return (
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

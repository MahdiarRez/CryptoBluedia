'use client';
import React, { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from '../../components/ui/button';
import Form from 'next/form';

function FormAuth({
  formAction,
  children,
  isPending,
}: {
  formAction: (payload: FormData) => void;
  children: ReactNode;
  isPending: boolean;
}) {
  const params = usePathname();
  const isLoginPage = params === '/login';

  return (
    <Form className="mt-8 mb-1" action={formAction}>
      <div className=" space-y-4 my-4">{children}</div>

      <Button
        classes="w-full h-12 text-lg  font-medium rounded-xl shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
        isDisabled={isPending}
      >
        {!isLoginPage
          ? isPending
            ? 'Signing up...'
            : 'Sign up'
          : isPending
            ? 'Signing In...'
            : 'Sign in'}
        <BottomGradient />
      </Button>

      <p className={'text-center mt-3'}>
        {!isLoginPage ? 'Already have account?' : "Don't have an account?"}{' '}
        <Link
          href={!isLoginPage ? '/login' : '/register'}
          className={
            'underline cursor-pointer ml-1 font-medium hover:text-DarkBlue transition-colors duration-300'
          }
        >
          {!isLoginPage ? 'Login' : 'Register'}
        </Link>
      </p>
    </Form>
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

export default FormAuth;

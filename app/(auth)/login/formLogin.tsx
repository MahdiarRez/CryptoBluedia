'use client';
import React, { useActionState, useEffect, useState } from 'react';
import FormAuth from '../components/formAuth';
import InputFloat from '../components/inputFloat';
import PasswordInput from '../components/inputPassword';
import toast from 'react-hot-toast';
import { handleLogin } from '@/app/lib/supabase/actions/login';
import { useAuth } from '@/app/context/authContext';
import { redirect } from 'next/navigation';

function FormLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { refreshUser } = useAuth();
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [state, formAction, isPending] = useActionState(handleLogin, {
    success: false,
    errors: [],
  });

  useEffect(() => {
    if (state.errors) {
      const errorObj: { [key: string]: string } = {};
      state.errors.forEach((err: { field: string; message: string }) => {
        console.log(errorObj);
        errorObj[err.field] = err.message;
        toast.error(err.message);
      });
      setErrors(errorObj);
    } else {
      setErrors({});
    }
  }, [state.errors]);

  useEffect(() => {
    if (state.success) {
      refreshUser();
      redirect('/currencies');
    }
  }, [state.success]);

  return (
    <FormAuth formAction={formAction} isPending={isPending}>
      <InputFloat
        label="email"
        type="email"
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={errors.email}
      />
      <PasswordInput
        label="password"
        autoComplete="current-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={errors.password}
      />
    </FormAuth>
  );
}

export default FormLogin;

'use client';
import React, { useActionState, useEffect, useState } from 'react';
import FormAuth from '../components/formAuth';
import { handleRegister } from '../../lib/utils/actions';
import InputFloat from '../components/inputFloat';
import PasswordInput from '../components/inputPassword';
import toast from 'react-hot-toast';

function FormRegister() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const [state, formAction, isPending] = useActionState(handleRegister, {
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

  return (
    <FormAuth isPending={isPending} formAction={formAction}>
      <InputFloat
        label="name"
        type="text"
        autoComplete="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        error={errors.name}
      />
      <InputFloat
        label="number"
        type="text"
        autoComplete="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        error={errors.number}
      />
      <InputFloat
        label="email"
        type="email"
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={errors.email || errors.profile}
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

export default FormRegister;

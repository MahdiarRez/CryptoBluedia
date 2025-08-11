import { z } from 'zod';

export const registerSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  number: z
    .string()
    .regex(
      /^09\d{9}$/,
      'Phone number must start with 09 and be exactly 11 digits, digits only'
    ),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
});

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

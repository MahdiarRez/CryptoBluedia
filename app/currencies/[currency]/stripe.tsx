'use client';

import type React from 'react';

import { useEffect, useState } from 'react';
import { cn } from '@/app/lib/utils/framer';

// This is a mock component to simulate the Stripe integration
// In a real app, you would use the actual Stripe SDK

interface StripeProps {
  options: {
    mode: string;
    amount: number;
    currency: string;
  };
  children: React.ReactNode;
  className?: string;
}

export function Stripe({ options, children, className }: StripeProps) {
  const [stripePromise, setStripePromise] = useState(null);

  useEffect(() => {
    // In a real implementation, you would load the actual Stripe SDK
    // setStripePromise(loadStripe('your_publishable_key'))

    // For demo purposes, we're just mocking this
    console.log('Stripe initialized with options:', options);
  }, [options]);

  return (
    <div className={cn('rounded-md border p-4', className)}>
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium">Amount</p>
          <p className="text-2xl font-bold">
            ${options.amount.toFixed(2)} {options.currency.toUpperCase()}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-8 w-12 rounded bg-[#6772E5]"></div>
          <span className="text-sm font-medium">Stripe</span>
        </div>
      </div>
      {children}
    </div>
  );
}

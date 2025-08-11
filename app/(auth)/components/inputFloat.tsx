'use client';

import type React from 'react';

import { forwardRef, useState } from 'react';
import clsx from 'clsx';
import { InputFloatProps } from '@/app/lib/types';

const InputFloat = forwardRef<HTMLInputElement, InputFloatProps>(
  (
    {
      error,
      className,
      label,
      value,
      borderClr = 'border-DarkBlue/20',
      onChange,
      onFocus,
      onBlur,
      ...rest
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(
      value ? String(value).length > 0 : false
    );

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      onBlur?.(e);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setHasValue(e.target.value.length > 0);
      onChange?.(e);
    };

    const isLabelFloating = isFocused || hasValue;

    return (
      <div className="w-full text-left">
        <div className="relative">
          <input
            ref={ref}
            id={label}
            name={label}
            spellCheck={false}
            value={value}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...rest}
            className={clsx(
              className,
              'w-full rounded-xl p-3 px-5 text-left border bg-white text-DarkBlue outline-none transition-all duration-300 ease-in-out',
              error ? 'border-red-500' : borderClr,
              label && 'placeholder-transparent'
            )}
            placeholder={label || rest.placeholder}
          />
          {label && (
            <label
              htmlFor={label}
              className={clsx(
                'absolute capitalize left-5 text-DarkBlue/50 pointer-events-none transition-all duration-300 ease-in-out cursor-text',
                isLabelFloating
                  ? 'top-0 -translate-y-1/2 text-sm bg-white px-2 text-DarkBlue'
                  : 'top-1/2 -translate-y-1/2 text-base',
                error && isLabelFloating && 'text-red-500'
              )}
            >
              {label}
            </label>
          )}
        </div>
      </div>
    );
  }
);

InputFloat.displayName = 'InputFloat';
export default InputFloat;

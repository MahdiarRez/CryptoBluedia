'use client';

import { forwardRef, useState } from 'react';
import clsx from 'clsx';
import { Eye, EyeOff } from 'lucide-react';
import { InputFloatProps } from '@/app/lib/types';

const PasswordInput = forwardRef<HTMLInputElement, InputFloatProps>(
  (
    { error, className, label, value, onFocus, onBlur, onChange, ...rest },
    ref
  ) => {
    const [show, setShow] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(
      value ? String(value).length > 0 : false
    );

    const isLabelFloating = isFocused || hasValue;

    return (
      <div className="relative w-full text-left">
        <input
          ref={ref}
          name={label}
          type={show ? 'text' : 'password'}
          value={value}
          onChange={(e) => {
            setHasValue(e.target.value.length > 0);
            onChange?.(e);
          }}
          onFocus={(e) => {
            setIsFocused(true);
            onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            onBlur?.(e);
          }}
          placeholder={label || rest.placeholder}
          {...rest}
          className={clsx(
            'peer w-full rounded-xl p-3 px-5 text-left border bg-white text-DarkBlue outline-none transition-all duration-300 ease-in-out',
            error ? 'border-red-500' : 'border-DarkBlue/20',
            label && 'placeholder-transparent',
            className
          )}
        />

        {/* label */}
        {label && (
          <label
            htmlFor={label}
            className={clsx(
              'absolute left-5 capitalize text-DarkBlue/50 pointer-events-none transition-all duration-300 ease-in-out cursor-text',
              isLabelFloating
                ? 'top-0 -translate-y-1/2 text-sm bg-white px-2 text-DarkBlue'
                : 'top-1/2 -translate-y-1/2 text-base',
              error && isLabelFloating && 'text-red-500'
            )}
          >
            {label}
          </label>
        )}

        {/* toggle button */}
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute top-4 right-3 text-gray-500 hover:text-gray-700"
          tabIndex={-1}
        >
          {show ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>
    );
  }
);

PasswordInput.displayName = 'PasswordInput';

export default PasswordInput;

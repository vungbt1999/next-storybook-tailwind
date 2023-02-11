import clsx from 'clsx';
import React from 'react';

export type ButtonProps = {
  children?: JSX.Element | string;
  variant?: 'default' | 'outline';
};

export function Button({ children, variant = 'default' }: ButtonProps) {
  return (
    <button
      className={clsx('rounded-lg border-solid py-16 px-36 text-semibold font-primary', {
        'bg-button text-white border-danger-600 border': variant === 'default',
        'bg-white text-neutral-900 border-neutral-900 border-2 ': variant === 'outline'
      })}
    >
      {children}
    </button>
  );
}

import clsx from 'clsx';
import React from 'react';
import { IconProps } from '.';

export default function Next({ className, transform }: IconProps) {
  return (
    <svg
      className={clsx(className, 'h-24', 'w-24')}
      transform={transform}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.9297 2.87012L17.9297 9.87012L10.9297 16.9201"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="M1 10H18" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

import clsx from 'clsx';
import React from 'react';
import { IconProps } from '.';

export default function ArrowUp({ className, transform }: IconProps) {
  return (
    <svg
      className={clsx(className, 'h-24', 'w-24')}
      transform={transform}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 17L17 7M17 7H7M17 7V17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

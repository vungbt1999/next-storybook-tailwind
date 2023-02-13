import clsx from 'clsx';
import React from 'react';
import { IconProps } from '.';

export default function Previous({ className, transform }: IconProps) {
  return (
    <svg
      className={clsx(className, 'h-24', 'w-24')}
      transform={transform}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.07031 17L2.07031 10L9.07031 3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M19 9.83008H2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

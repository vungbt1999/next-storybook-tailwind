import clsx from 'clsx';
import { IconProps } from '.';

export function Chevron({ className, transform }: IconProps) {
  return (
    <svg
      className={clsx(className, 'h-24', 'w-24')}
      transform={transform}
      viewBox="0 0 12 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1.5 0.849976L6 5.14998L10.5 0.849976" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

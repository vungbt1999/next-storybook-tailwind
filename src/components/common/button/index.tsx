import clsx from 'clsx';

export type ButtonProps = {
  children?: JSX.Element | string;
  className?: string;
  variant?: 'default' | 'outline';
  color?: 'default' | 'danger';
  size?: 'lg' | '2xl';

  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
};

export function Button({
  children,
  className,
  variant = 'default',
  color = 'default',
  size = '2xl',
  disabled,
  type,
  ariaLabel
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={clsx(
        className,
        'rounded-lg border-solid font-primary shadow-xs transition-all ease-linear',
        {
          // SIZE
          'py-16 px-36 text-lg-semibold': size === '2xl',
          'py-10 px-18 text-md-semibold': size === 'lg',

          // NORMAL STYLE
          'bg-white text-button hover:bg-danger-100': variant === 'default' && color === 'default',
          'bg-button text-white border-danger-600 border hover:bg-danger-900':
            variant === 'default' && color === 'danger',

          // OUTLINE STYLE
          'bg-white border-2': variant === 'outline',
          'text-neutral-900 border-neutral-900 hover:bg-neutral-300':
            variant === 'outline' && color === 'default',
          'text-button border-button hover:bg-danger-100':
            variant === 'outline' && color === 'danger'
        }
      )}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

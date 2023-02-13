/* eslint-disable @next/next/no-img-element */
import { ImageObj } from '@/types';
import clsx from 'clsx';
export * from './mock';

export type BlockTwoProps = {
  className?: string;
  title: string;
  items: ImageObj[];
};

export function BlockTwo({ className, title, items }: BlockTwoProps) {
  return (
    <div block-name="block-two" className={clsx(className, 'pt-48')}>
      <p className="text-xl-regular text-neutral-500 font-primary text-center">{title}</p>
      <div className="flex items-center justify-center mt-24">
        {items.map((item, index) => {
          return (
            <div
              key={index}
              className="mr-64 last:mr-0 relative w-[136px] max-w-[136] h-auto flex items-center justify-center"
            >
              <img
                src={item.url}
                alt={item.alternativeText || 'partner-img'}
                className="h-auto w-full"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

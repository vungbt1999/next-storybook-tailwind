/* eslint-disable @next/next/no-img-element */
import { ImageObj } from '@/types';
import clsx from 'clsx';
export * from './mock';

export type BlockFourProps = {
  className?: string;
  title: string;
  summary: string;
  items: {
    title: string;
    icon: string;
  }[];
};

export function BlockFour({ className, title, summary, items }: BlockFourProps) {
  return (
    <div block-name="block-four" className={clsx(className, 'container')}>
      <div
        dangerouslySetInnerHTML={{ __html: title }}
        className="text-display-lg-medium text-center font-primary"
      />
      <p className="text-xl-regular text-summary font-primary mt-24 text-center">{summary}</p>
      <div className="mt-40 grid grid-cols-4 gap-36">
        {items.map((item, index) => {
          return (
            <div
              key={index}
              className="shadow-lg hover:shadow-md transition-all bg-[#F7F8FC] rounded-2xl p-48 flex flex-col items-center justify-center"
            >
              <div
                dangerouslySetInnerHTML={{ __html: item.icon }}
                className="max-w-[68px] h-auto aspect-square"
              />
              <p className="text-md-semibold font-primary text-summary mt-28">{item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

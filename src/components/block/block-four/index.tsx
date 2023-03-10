/* eslint-disable @next/next/no-img-element */
import { ImageObj } from '@/types';
import clsx from 'clsx';
export * from './mock';

export type BlockFourProps = {
  id?: string;
  className?: string;
  title: string;
  summary: string | null;
  items: {
    title: string;
    icon: string;
  }[];
};

export function BlockFour({ className, title, summary, items, id }: BlockFourProps) {
  return (
    <div id={id} block-name="block-four" className={clsx(className, 'container')}>
      <div
        dangerouslySetInnerHTML={{ __html: title }}
        className="text-display-md-medium md:text-display-lg-medium text-center font-primary"
      />
      {summary && (
        <div
          className="text-lg-regular md:text-xl-regular text-summary font-primary mt-24 text-center"
          dangerouslySetInnerHTML={{ __html: summary }}
        />
      )}
      <div className="mt-40 grid grid-cols-2 md:grid-cols-4 gap-16 md:gap-36">
        {items.map((item, index) => {
          return (
            <div
              key={index}
              className="shadow-lg hover:shadow-md transition-all bg-[#F7F8FC] rounded-2xl py-24 px-12 md:p-48 flex flex-col items-center justify-center"
            >
              <div
                dangerouslySetInnerHTML={{ __html: item.icon }}
                className="max-w-[68px] h-auto aspect-square"
              />
              <div
                className="text-md-semibold font-primary text-summary mt-28"
                dangerouslySetInnerHTML={{ __html: item.title }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

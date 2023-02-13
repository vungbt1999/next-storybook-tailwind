/* eslint-disable @next/next/no-img-element */
import { ImageObj } from '@/types';
import clsx from 'clsx';
import { CardBlockThree } from './card';
export * from './mock';

export type BlockThreeProps = {
  className?: string;
  title: string;
  summary: string;
  items: CardBlockThree[];
};

export function BlockThree({ className, title, summary, items }: BlockThreeProps) {
  return (
    <div block-name="block-three" className={clsx(className, 'container')}>
      <p
        className="text-display-lg-medium text-summary font-primary text-center"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <div className="grid grid-cols-12 gap-24 mt-24">
        <p className="col-span-2"></p>
        <p className="text-xl-regular text-summary font-primary col-span-8 text-center">
          {summary}
        </p>
        <p className="col-span-2"></p>
      </div>

      <div className="flex flex-wrap gap-48 mt-40">
        {items.map((item, index) => (
          <CardBlockThree key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
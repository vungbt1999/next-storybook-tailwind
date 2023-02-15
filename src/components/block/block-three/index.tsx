/* eslint-disable @next/next/no-img-element */
import { ImageObj } from '@/types';
import clsx from 'clsx';
import { CardBlockThree } from './card';
export * from './mock';

export type BlockThreeProps = {
  id?: string;
  className?: string;
  title: string;
  summary: string | null;
  items: CardBlockThree[];
};

export function BlockThree({ className, title, summary, items, id }: BlockThreeProps) {
  return (
    <div id={id} block-name="block-three" className={clsx(className, 'container')}>
      <div
        className="text-display-md-medium md:text-display-lg-medium text-summary font-primary text-center"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {summary && (
        <>
          <div className="hidden md:grid grid-cols-12 gap-24 mt-24">
            <p className="col-span-2"></p>
            <div
              className="text-xl-regular text-summary font-primary col-span-8 text-center"
              dangerouslySetInnerHTML={{ __html: summary }}
            />
            <p className="col-span-2"></p>
          </div>

          {/** Show Summary Mobile */}
          <div
            className="block md:hidden text-lg-regular text-summary font-primary text-center mt-24"
            dangerouslySetInnerHTML={{ __html: summary }}
          />
        </>
      )}

      <div className="flex flex-wrap gap-48 mt-40">
        {items.map((item, index) => (
          <CardBlockThree key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

/* eslint-disable @next/next/no-img-element */
import { Button, RenderIcon } from '@/components/common';
import { ImageObj, LinkObj } from '@/types';
import clsx from 'clsx';
import { Fragment } from 'react';
export * from './mock';

export type BlockFiveProps = {
  className?: string;
  id?: string;
  title: string;
  items: {
    title: string;
    summary: string;
    image: ImageObj;
    ctaButtonLink: LinkObj;
  }[];
};

export function BlockFive({ className, title, items, id }: BlockFiveProps) {
  return (
    <div id={id} block-name="block-five" className={clsx(className, 'py-48 md:py-120')}>
      <div
        dangerouslySetInnerHTML={{ __html: title }}
        className="text-display-md-medium md:text-display-lg-medium text-gray-900 font-primary text-center"
      />
      <div className="mt-24 md:mt-[73px] max-w-full md:max-w-[976px] grid grid-cols-1 md:grid-cols-2 gap-56 m-auto">
        {items.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-gray-50 p-36 pb-40 rounded-2xl col-span-1 w-full h-auto hover:shadow-lg transition-all"
            >
              <div
                className="text-display-md-bold text-neutral-900 font-primary"
                dangerouslySetInnerHTML={{ __html: item.title }}
              />
              <div
                className="text-2l font-secondary mt-16 text-neutral-900"
                dangerouslySetInnerHTML={{ __html: item.summary }}
              />
              <div className="aspect-square max-w-[256px] h-auto mt-16">
                <img
                  alt={item.image.alternativeText || 'image-business'}
                  src={item.image.url}
                  className="object-contain w-full h-full"
                />
              </div>

              <Button size="2xl" className="px-28 mt-36">
                <div className="flex items-center">
                  {item.ctaButtonLink.title}
                  <RenderIcon name="arrowUp" className="text-button ml-12" />
                </div>
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* eslint-disable @next/next/no-img-element */
import { ImageObj, LinkObj } from '@/types';
import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

export type NavHeaderItemProps = {
  title: string;
  items: {
    link: LinkObj;
    summary: string | null;
    image: ImageObj | null;
    icon: string | null;
  }[];
  style: 'style_1' | 'style_2' | 'style_3' | null;
};
export type NavHeaderProps = {
  items: NavHeaderItemProps[];
  className?: string;
};

export function NavHeader({ items, className }: NavHeaderProps) {
  return (
    <div className={clsx(className, 'container grid grid-cols-11 gap-24 py-32 flex-wrap')}>
      {items.map((item, index) => {
        const listMenu = item.items || [];
        const styleVariant = item.style;

        return (
          <div
            key={index}
            className={clsx({
              'col-span-3': styleVariant === 'style_1',
              'col-span-4': styleVariant !== 'style_1'
            })}
          >
            <div
              dangerouslySetInnerHTML={{ __html: item.title }}
              className="text-sm-semibold text-primary font-primary"
            />
            <div className="mt-12">
              {listMenu.map((menuItem, mIndex) => {
                return (
                  <div
                    key={mIndex}
                    className={clsx({
                      'flex p-12': styleVariant !== 'style_1',
                      'rounded-lg hover:bg-gray-50 transition-all ease-linear':
                        styleVariant === 'style_2',
                      'flex flex-col gap-12': styleVariant === 'style_1'
                    })}
                  >
                    <div>
                      {styleVariant === 'style_2' && menuItem.icon && (
                        <div
                          dangerouslySetInnerHTML={{ __html: menuItem.icon }}
                          className="mr-16 !max-w-[24px] !max-h-[24px]"
                        />
                      )}
                      {styleVariant === 'style_3' && menuItem.image && (
                        <div className="mr-24 max-w-[144px] w-144 h-auto aspect-auto rounded-md">
                          <img
                            src={menuItem.image.url}
                            alt={menuItem.image.alternativeText || 'image-nav-header'}
                            className="w-full h-auto rounded-md"
                          />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <Link href={menuItem.link.url} target={menuItem.link.target}>
                        <div
                          dangerouslySetInnerHTML={{ __html: menuItem.link.title || '' }}
                          className={clsx('font-primary line-clamp-2', {
                            'text-md-semibold text-gray-600': styleVariant === 'style_1',
                            'text-md-semibold text-gray-900': styleVariant !== 'style_1'
                          })}
                        />
                      </Link>
                      <div
                        dangerouslySetInnerHTML={{ __html: menuItem.summary || '' }}
                        className="text-sm-regular text-gray-600 mt-4 line-clamp-2"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

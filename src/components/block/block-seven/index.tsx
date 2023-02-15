/* eslint-disable @next/next/no-img-element */
import { Button, RenderIcon } from '@/components/common';
import { ImageObj, LinkObj } from '@/types';
import clsx from 'clsx';
import Link from 'next/link';
export * from './mock';

export type BlockSevenProps = {
  className?: string;
  subtitle: string | null;
  title: string;
  summary: string | null;
  items: {
    image: ImageObj;
    link: LinkObj;
    date: string;
  }[];
  ctaButtonLink?: LinkObj;
  id?: string;
};

export function BlockSeven({
  className,
  id,
  title,
  subtitle,
  summary,
  ctaButtonLink,

  items
}: BlockSevenProps) {
  return (
    <div id={id} block-name="block-seven" className={clsx(className, 'container pb-96')}>
      {subtitle && (
        <div
          className="font-primary text-button text-md-semibold text-center"
          dangerouslySetInnerHTML={{ __html: subtitle }}
        />
      )}
      <div
        dangerouslySetInnerHTML={{ __html: title }}
        className="mt-12 text-display-md-semibold text-gray-900 font-primary text-center"
      />
      {summary && (
        <div
          className="mt-20 font-primary text-xl-regular text-gray-600 text-center"
          dangerouslySetInnerHTML={{ __html: summary }}
        />
      )}

      <div className="mt-64 container grid grid-cols-3 gap-32 px-0">
        {items.map((item, index) => {
          return (
            <div key={index} className="col-span-1 w-full h-auto shadow-lg rounded-lg">
              <div className="h-[240px] min-h-[240px] w-full aspect-[405.33/240] rounded-t-lg">
                <img
                  src={item.image.url}
                  alt={item.image.alternativeText || 'image-alt'}
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <div className="px-24 pb-24">
                <p className="text-sm-semibold font-primary text-subtitle mt-32">{item.date}</p>
                <Link href={item.link.url} target={item.link.target}>
                  <div className="flex items-start justify-between mt-8">
                    <p className="line-clamp-2 text-xl-semibold font-primary text-gray-900">
                      {item.link.title}
                    </p>
                    <RenderIcon name="arrowUp" className="text-black mt-5 min-w-[24px] ml-16" />
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {ctaButtonLink && (
        <Link
          href={ctaButtonLink.url}
          target={ctaButtonLink.target}
          className="flex justify-center mt-64"
        >
          <Button size="xl" variant="outline" color="danger">
            {ctaButtonLink.title}
          </Button>
        </Link>
      )}
    </div>
  );
}

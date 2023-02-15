import { Button } from '@/components/common';
import { LinkObj } from '@/types';
import clsx from 'clsx';
import React from 'react';
export * from './mock';

export type BlockOneProps = {
  id?: string;
  title: string;
  summary: string | null;
  ctaButtonLinks: LinkObj[];
  iframeEmbed: string;
  className?: string;
};

export function BlockOne({
  id,
  title,
  summary,
  ctaButtonLinks,
  iframeEmbed,
  className
}: BlockOneProps) {
  return (
    <div id={id} block-name="block-one" className={clsx('pt-64 pb-0 md:pb-64', className)}>
      <div className="container">
        <div
          dangerouslySetInnerHTML={{ __html: title }}
          className="text-display-sm-bold md:text-display-xl-semibold font-primary text-summary text-center"
        />

        {summary && (
          <>
            <div className="hidden md:grid grid-cols-12 gap-24 mt-24">
              <p className="col-span-3"></p>
              <div
                className="md:font-primary text-summary text-xl-regular text-center col-span-6 font-tertiary"
                dangerouslySetInnerHTML={{ __html: summary }}
              />
              <p className="col-span-3"></p>
            </div>
            {/** Summary Mobile Show */}
            <div
              className="block md:hidden text-summary text-lg-regular text-center font-tertiary mt-24"
              dangerouslySetInnerHTML={{ __html: summary }}
            />
          </>
        )}

        {/* List Button */}
        <div className="mt-24 flex items-center justify-center">
          {ctaButtonLinks.map((item, index) => {
            const isOutline = index % 2 !== 0;
            return (
              <Button
                key={item.id || index}
                className="px-36 mr-24 last:mr-0"
                color={isOutline ? 'default' : 'danger'}
                variant={isOutline ? 'outline' : 'default'}
              >
                {item.title}
              </Button>
            );
          })}
        </div>

        {/* Youtube Iframe */}
        <div className="grid grid-cols-12 gap-x-24">
          <div className="hidden md:block col-span-2"></div>
          <div
            className="mt-48 flex justify-center items-center aspect-video col-span-12 md:col-span-8"
            dangerouslySetInnerHTML={{ __html: iframeEmbed }}
          />
          <div className="hidden md:block col-span-2"></div>
        </div>
      </div>
    </div>
  );
}

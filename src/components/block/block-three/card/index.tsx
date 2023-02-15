/* eslint-disable @next/next/no-img-element */
import { Button } from '@/components/common';
import { ImageObj, LinkObj, StyleVariant } from '@/types';
import clsx from 'clsx';
import React from 'react';

export type CardBlockThree = {
  title: string;
  summary: string;
  ctaButtonLink: LinkObj;
  image: ImageObj;
  styleVariant?: StyleVariant;
};

export function CardBlockThree({
  title,
  summary,
  ctaButtonLink,
  image,
  styleVariant = 'style_1'
}: CardBlockThree) {
  return (
    <div
      block-name="block-three"
      component-name={`card-block-three-${styleVariant}`}
      className={clsx(
        'bg-gray-100 rounded-2xl py-24 px-16 md:p-48 md:pb-0 hover:shadow-lg transition-all',
        {
          'w-full flex': styleVariant === 'style_2',
          'w-full flex md:flex-1 md:min-w-[calc(50%-24px)]': styleVariant === 'style_1'
        }
      )}
    >
      <div
        className={clsx('flex justify-center flex-col items-center w-full md:w-auto md:block', {
          'flex-1': styleVariant === 'style_2'
        })}
      >
        <RenderImageView
          variant={styleVariant}
          image={image}
          className="block md:hidden max-w-[192px] h-auto aspect-square m-auto"
        />

        <p className="text-display-sm-semibold md:text-display-md-semibold font-primary text-black text-center md:text-start">
          {title}
        </p>
        <p className="mt-8 text-lg-regular md:text-xl-regular text-neutral-700 font-primary text-center md:text-start">
          {summary}
        </p>

        <div
          className={clsx({
            'flex justify-between mt-24 items-start': styleVariant === 'style_1'
          })}
        >
          <Button variant="outline" color="danger" className={clsx('mt-12 px-28')} size="2xl">
            {ctaButtonLink.title}
          </Button>

          <RenderImageView
            variant={styleVariant}
            image={image}
            className={clsx({
              'hidden md:hidden': styleVariant === 'style_2',
              'hidden md:block': styleVariant === 'style_1'
            })}
          />
        </div>
      </div>

      <RenderImageView
        variant={styleVariant}
        image={image}
        className={clsx({
          'hidden md:hidden': styleVariant === 'style_1',
          'hidden md:block': styleVariant === 'style_2'
        })}
      />
    </div>
  );
}

const RenderImageView = ({
  variant,
  image,
  className
}: {
  variant: StyleVariant;
  image: ImageObj;
  className?: string;
}) => {
  return (
    <div
      className={clsx(
        'h-auto aspect-square',
        {
          'max-w-[333px]': variant === 'style_2',
          'max-w-[300px]': variant === 'style_1'
        },
        className
      )}
    >
      <img
        src={image.url}
        alt={image.alternativeText || 'decor-image'}
        className="w-full h-full object-contain"
      />
    </div>
  );
};

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
      className={clsx('bg-gray-100 rounded-2xl p-48 pb-0 hover:shadow-lg transition-all', {
        'w-full flex': styleVariant === 'style_2',
        'flex-1 min-w-[calc(50%-24px)]': styleVariant === 'style_1'
      })}
    >
      <div
        className={clsx({
          'flex-1': styleVariant === 'style_2'
        })}
      >
        <p className="text-display-md-semibold font-primary text-black">{title}</p>
        <p className="mt-8 text-xl-regular text-neutral-700">{summary}</p>

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
              hidden: styleVariant === 'style_2',
              block: styleVariant === 'style_1'
            })}
          />
        </div>
      </div>

      <RenderImageView
        variant={styleVariant}
        image={image}
        className={clsx({
          hidden: styleVariant === 'style_1',
          block: styleVariant === 'style_2'
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

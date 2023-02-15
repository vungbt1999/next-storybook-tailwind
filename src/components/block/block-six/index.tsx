/* eslint-disable @next/next/no-img-element */
import { Button, RenderIcon } from '@/components/common';
import { ImageObj, LinkObj } from '@/types';
import clsx from 'clsx';
import Link from 'next/link';
import { useRef } from 'react';
import { FreeMode, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
export * from './mock';

export type BlockSixProps = {
  className?: string;
  title: string;
  summary: string | null;
  ctaButtonLink: LinkObj;
  id?: string;

  items: {
    image: ImageObj;
    title: string;
    summary: string | null;
    ctaButtonLink: LinkObj;
  }[];
};

export function BlockSix({
  className,
  title,
  summary,
  ctaButtonLink,
  id,

  items
}: BlockSixProps) {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div id={id} block-name="block-six" className={clsx(className, 'bg-gray-50 py-96')}>
      <div className="container flex justify-between items-start">
        <div className="flex-1">
          <div
            className="text-display-md-semibold text-gray-900 font-primary"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          {summary && (
            <div
              className="mt-20 font-primary text-xl-regular text-gray-600"
              dangerouslySetInnerHTML={{ __html: summary }}
            />
          )}
        </div>

        <Link href={ctaButtonLink.url} target={ctaButtonLink.target}>
          <Button variant="outline" color="danger" className="px-28">
            {ctaButtonLink.title}
          </Button>
        </Link>
      </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true
        }}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current
        }}
        modules={[FreeMode, Navigation]}
        className="mt-64 relative"
        onInit={(swiper) => {
          // @ts-ignore
          // eslint-disable-next-line no-param-reassign
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          // @ts-ignore
          // eslint-disable-next-line no-param-reassign
          swiper.params.navigation.nextEl = navigationNextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {items.map((item, index) => {
          const { image, title, summary } = item;
          return (
            <SwiperSlide key={index} className="h-auto">
              <div className="">
                <div className="h-[360px] min-h-[360px] w-full aspect-auto">
                  <img
                    src={image.url}
                    alt={image.alternativeText || 'image-slide'}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="px-24 mt-32">
                  <div
                    className="line-clamp-1 text-display-xs-semibold text-gray-900 font-primary"
                    dangerouslySetInnerHTML={{ __html: title }}
                  />
                  {summary && (
                    <div
                      className="line-clamp-2 mt-8 font-primary text-md-regular text-gray-600"
                      dangerouslySetInnerHTML={{ __html: summary }}
                    />
                  )}
                  <Link
                    href={item.ctaButtonLink.url}
                    target={item.ctaButtonLink.target}
                    className="flex items-center mt-26 w-fit"
                  >
                    <p className="text-button text-md-semibold font-primary">
                      {item.ctaButtonLink.title}
                    </p>
                    <RenderIcon name="arrowUp" className="!w-20 !h-20 text-button ml-8" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          );
        })}

        <div ref={navigationPrevRef} className="slider-nav absolute left-36">
          <RenderIcon name="previous" className="!w-20 !h-20 text-summary" />
        </div>
        <div ref={navigationNextRef} className="slider-nav absolute right-36">
          <RenderIcon name="next" className="!w-20 !h-20 text-summary" />
        </div>
      </Swiper>
    </div>
  );
}

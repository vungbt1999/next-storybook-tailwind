/* eslint-disable @next/next/no-img-element */
import { Button, Logo, RenderIcon } from '@/components/common';
import { ImageObj, LinkObj } from '@/types';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { HeaderDesktop } from './desktop';
import { HeaderMobile } from './mobile';
import { NavHeaderItemProps } from './nav';
export * from './mock';

export type NavigateItemType = {
  item: LinkObj;
  subNav?: NavHeaderItemProps[];
};

export type HeaderProps = {
  navigation: NavigateItemType[];
  logoUrl?: string;
  logo?: ImageObj;
  ctaButtonLink: LinkObj;
};

export function Header(props: HeaderProps) {
  const [isScroll, setIsScroll] = useState<boolean>(false);

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setIsScroll(true) : setIsScroll(false);
  };

  useEffect(() => {
    if (!window) return;
    window.addEventListener('scroll', listenScrollEvent);
    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    };
  }, []);

  return (
    <div
      layout-name="header-layout"
      id="header-layout"
      className="w-screen h-64 md:h-94 fixed transition-all top-0 z-50"
      style={
        isScroll
          ? {
              background: 'rgba(255, 255, 255, 0.9)',
              boxShadow: '0px 1px 8px rgba(0, 0, 0, 0.1)',
              backdropFilter: 'blur(2.5px)'
            }
          : undefined
      }
    >
      <HeaderDesktop {...props} />
      <HeaderMobile {...props} />
    </div>
  );
}

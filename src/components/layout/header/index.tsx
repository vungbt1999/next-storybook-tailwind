import { Button, Logo, RenderIcon } from '@/components/common';
import { LinkObj } from '@/types';
import Link from 'next/link';
import { useEffect, useState } from 'react';
export * from './mock';

export type NavigateItemType = {
  item: LinkObj;
  child?: LinkObj[];
};

export type HeaderProps = {
  items: NavigateItemType[];
};

export function Header({ items }: HeaderProps) {
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
      id="header-layout"
      className="w-screen h-94 fixed transition-all top-0 z-50"
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
      <div className="container h-full flex items-center justify-between">
        <Logo />
        <ul className="flex items-center">
          {items.map((nav, index) => {
            const item = nav.item;
            return (
              <Link
                key={item.id || index}
                href={item.url}
                target={item.target}
                className="mr-24 last:mr-0"
              >
                <li className="flex items-center text-md-medium font-primary text-neutral-900">
                  {item.title}
                  {nav.child && nav.child.length > 0 && (
                    <RenderIcon name="chevron" className="w-9 h-[4.3px] text-info-900 ml-8" />
                  )}
                </li>
              </Link>
            );
          })}
        </ul>
        <Button className="!px-48 !text-md-bold !rounded" color="danger">
          Build on DOS
        </Button>
      </div>
    </div>
  );
}

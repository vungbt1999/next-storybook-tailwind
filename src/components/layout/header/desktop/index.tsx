/* eslint-disable @next/next/no-img-element */
import { Button, Logo, RenderIcon } from '@/components/common';
import Link from 'next/link';
import { HeaderProps, navHeaderMockData } from '..';
import { NavHeader } from '../nav';

export function HeaderDesktop({ navigation, logoUrl = '/', ctaButtonLink, logo }: HeaderProps) {
  return (
    <div className="container h-full items-center justify-between hidden md:flex">
      <Link href={logoUrl}>
        {logo ? (
          <img src={logo.url} alt={logo.alternativeText || 'logo'} className="w-64 h-64" />
        ) : (
          <Logo />
        )}
      </Link>
      <ul className="flex items-center h-full">
        {navigation.map((nav, index) => {
          const item = nav.item;
          return (
            <div key={item.id || index} className="mr-24 last:mr-0 h-full">
              <li className="flex items-center text-md-medium font-primary text-neutral-900 h-full nav_item">
                <Link href={item.url} target={item.target} className="h-full flex items-center">
                  {item.title}
                </Link>
                {nav.subNav && nav.subNav.length > 0 && (
                  <>
                    <RenderIcon name="chevron" className="!w-9 !h-[4.3px] text-info-900 ml-8" />
                    <div className="sub_nav_header absolute top-94 right-0 left-0 w-full shadow-xl bg-white">
                      <NavHeader items={nav.subNav} />
                    </div>
                  </>
                )}
              </li>
            </div>
          );
        })}
      </ul>
      <Button className="!px-48 !text-md-bold !rounded" color="danger">
        {ctaButtonLink.title}
      </Button>
    </div>
  );
}

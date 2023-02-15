/* eslint-disable @next/next/no-img-element */
import { Logo, RenderIcon } from '@/components/common';
import React from 'react';
import { HeaderProps } from '..';
import Link from 'next/link';

export function HeaderMobile({ navigation, logoUrl = '/', ctaButtonLink, logo }: HeaderProps) {
  return (
    <div className="md:hidden flex items-center justify-between px-16">
      <div onClick={() => alert('Show')}>
        <RenderIcon name="nav" />
      </div>

      <Link href={logoUrl}>
        {logo ? (
          <img src={logo.url} alt={logo.alternativeText || 'logo'} className="w-64 h-64" />
        ) : (
          <Logo />
        )}
      </Link>

      <div className="opacity-0 invisible">
        <RenderIcon name="nav" />
      </div>
    </div>
  );
}

/* eslint-disable @next/next/no-img-element */
import { Button, Logo, RenderIcon } from '@/components/common';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { HeaderProps } from '..';

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
      <ul className="flex items-center">
        {navigation.map((nav, index) => {
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
                  <RenderIcon name="chevron" className="!w-9 !h-[4.3px] text-info-900 ml-8" />
                )}
              </li>
            </Link>
          );
        })}
      </ul>
      <Button className="!px-48 !text-md-bold !rounded" color="danger">
        {ctaButtonLink.title}
      </Button>
    </div>
  );
}

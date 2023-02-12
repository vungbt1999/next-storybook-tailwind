import { LinkObj } from '@/types';
import Link from 'next/link';
import React from 'react';

export type FooterNavigationProps = {
  title: string;
  items: LinkObj[];
};

export function FooterNavigation({ navigation }: { navigation: FooterNavigationProps[] }) {
  return (
    <div className="flex-1 flex justify-between">
      {navigation.map((item, index) => {
        const navItems = item.items;
        return (
          <div key={index} className="flex-1 mr-32 last:mr-0">
            <p className="text-sm-semibold text-gray-500 font-primary">{item.title}</p>
            <ul className="mt-16">
              {navItems.map((navItems, navIndex) => (
                <Link
                  key={navItems.id || navIndex}
                  href={navItems.url}
                  target={navItems.target}
                  className="mb-12 last:mb-0 block"
                >
                  <li className="text-md-semibold text-gray-600 font-primary">
                    <div dangerouslySetInnerHTML={{ __html: navItems.title || '' }} />
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

import { Logo } from '@/components/common';
import { LinkObj, SocialType } from '@/types';
import Link from 'next/link';
import React from 'react';
import { FooterNavigation, FooterNavigationProps } from './navigation';
import { FooterSocial } from './social';
import { FooterSubscribeForm, FooterSubscribeFormProps } from './subscribe-form';

export * from './mock';

export type FooterProps = {
  logoUrl?: string;
  title: string;
  navigation: FooterNavigationProps[];
  copyright: string;
  socials: SocialType[];
  subscribeForm: FooterSubscribeFormProps;
};

export function Footer({
  logoUrl = '/',
  title,
  navigation,
  socials,
  copyright,
  subscribeForm
}: FooterProps) {
  return (
    <div
      layout-name="footer-layout"
      className="py-48 border-t-[5px] border-solid border-danger-500"
    >
      <div className="container px-52">
        <FooterSubscribeForm {...subscribeForm} />
      </div>

      <div className="mt-64 py-64 border-t border-solid border-neutral-300">
        <div className="container px-52">
          <div className="flex justify-between">
            <div className="mr-64">
              <Link href={logoUrl}>
                <Logo />
              </Link>
              <p className="max-w-[320px] w-[320px] text-md-regular text-gray-600 mt-32 font-primary">
                {title}
              </p>
            </div>
            <FooterNavigation navigation={navigation} />
          </div>
        </div>
      </div>

      <div className="container px-52">
        <FooterSocial items={socials} copyright={copyright} />
      </div>
    </div>
  );
}

/* eslint-disable @next/next/no-img-element */
import { Logo } from '@/components/common';
import { ImageObj, LinkObj, SocialType } from '@/types';
import Link from 'next/link';
import React from 'react';
import { FooterNavigation, FooterNavigationProps } from './navigation';
import { FooterSocial } from './social';
import { FooterSubscribeForm, FooterSubscribeFormProps } from './subscribe-form';

export * from './mock';

export type FooterProps = {
  logoUrl?: string;
  logo?: ImageObj;
  title: string;
  navigation: FooterNavigationProps[];
  copyright: string;
  socials: SocialType[];
  subscribeForm: FooterSubscribeFormProps;
};

export function Footer({
  logoUrl = '/',
  logo,
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
      <div className="container md:px-52">
        <FooterSubscribeForm {...subscribeForm} />
      </div>

      <div className="mt-48 md:mt-64 py-48 md:py-64 border-t border-solid border-neutral-300 mx-12 md:mx-0">
        <div className="md:container md:px-52">
          <div className="flex justify-between flex-col md:flex-row">
            <div className="md:mr-64">
              <div className="w-fit m-auto md:m-0">
                <Link href={logoUrl}>
                  {logo ? (
                    <img
                      src={logo.url}
                      alt={logo.alternativeText || 'logo'}
                      className="w-64 h-64"
                    />
                  ) : (
                    <Logo />
                  )}
                </Link>
              </div>
              <p className="md:max-w-[320px] md:w-[320px] text-md-regular text-gray-600 mt-32 font-primary text-center md:text-start">
                {title}
              </p>
            </div>
            <FooterNavigation navigation={navigation} />
          </div>
        </div>
      </div>

      <div className="mx-12 md:mx-0 md:container md:px-52">
        <FooterSocial items={socials} copyright={copyright} />
      </div>
    </div>
  );
}

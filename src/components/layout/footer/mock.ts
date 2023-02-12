import { LinkObj } from '@/types';
import { linkObjMock } from '@/utils/common';
import { FooterProps } from '.';

const navigationItems: LinkObj[] = [
  {
    id: '1',
    title: 'Overview',
    url: '/'
  },
  {
    id: '2',
    title: 'Features',
    url: '/'
  },
  {
    id: '3',
    title: 'Solutions',
    url: '/'
  },
  {
    id: '4',
    title: 'Tutorials',
    url: '/'
  },
  {
    id: '5',
    title: 'Pricing',
    url: '/'
  },
  {
    id: '6',
    title: 'Releases',
    url: '/'
  }
];

export const footerMockData: FooterProps = {
  logoUrl: '/',
  title: 'Design amazing digital experiences that create more happy in the world.',
  navigation: [
    {
      title: 'Product',
      items: navigationItems
    },
    {
      title: 'Support',
      items: navigationItems
    },
    {
      title: 'Developer',
      items: navigationItems
    },
    {
      title: 'Social',
      items: navigationItems
    },
    {
      title: 'Company',
      items: navigationItems
    }
  ],
  copyright: '© 2023 DOS Labs. All rights reserved. Powered by DOS.',
  socials: [
    {
      id: '1',
      socialType: 'twitter',
      link: linkObjMock
    },
    {
      id: '2',
      socialType: 'linkIn',
      link: linkObjMock
    },
    {
      id: '3',
      socialType: 'facebook',
      link: linkObjMock
    },
    {
      id: '4',
      socialType: 'git',
      link: linkObjMock
    },
    {
      id: '5',
      socialType: 'peaceHand',
      link: linkObjMock
    }
  ],
  subscribeForm: {
    title: 'Join our newsletter',
    subtitle: 'Banking technology that has your back.',
    inputPlaceholder: 'Enter your email',
    ctaButtonText: 'Subscribe'
  }
};

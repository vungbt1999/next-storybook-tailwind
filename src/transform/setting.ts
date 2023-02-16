import { FooterProps, HeaderProps, NavigateItemType, PageLayoutProps } from '@/components/layout';
import { SocialType } from '@/types';
import {
  ComponentPageLayoutFooter,
  ComponentPageLayoutHeader,
  ComponentSharedSocialLink,
  GetSettingQuery,
  ImageFragment,
  LinkFragment
} from '@/utils/graphql-api/generated';
import { transformImageObj, transformLink } from '.';

export const transformSetting = (raw: GetSettingQuery): PageLayoutProps => {
  const data = raw.setting?.data?.attributes;
  const logoUrl = data?.logoUrl;
  const logo = data?.logo;
  const header = data?.header;
  const footer = data?.footer;

  return {
    header: {
      ...transformHeader(header as ComponentPageLayoutHeader),
      logoUrl: logoUrl,
      logo: {
        ...transformImageObj(logo),
        url: logo ? transformImageObj(logo).url : '/images/logo.png'
      }
    },
    footer: {
      ...transformFooter(footer as ComponentPageLayoutFooter),
      logoUrl: logoUrl,
      logo: {
        ...transformImageObj(logo),
        url: logo ? transformImageObj(logo).url : '/images/logo.png'
      }
    }
  };
};

const transformHeader = (data?: ComponentPageLayoutHeader): HeaderProps => {
  const dataReturn: HeaderProps = {
    navigation: [],
    ctaButtonLink: {
      title: '',
      url: ''
    }
  };

  if (data) {
    const navigation = data.navigation || [];
    const listNav: NavigateItemType[] = [];

    navigation.map((item) => {
      const navTitle = item?.title || '';
      const navLink = (item?.links || []).map((navLinkItem) =>
        transformLink(navLinkItem as LinkFragment)
      );
      const subNavs = item?.subnavs || [];

      if (navLink.length > 0) {
        listNav.push({
          item: {
            ...navLink[0],
            title: navTitle
          },
          subNav: subNavs.map((subNavItem) => ({
            title: subNavItem?.title || '',
            style: subNavItem?.style || 'style_1',
            items: (subNavItem?.items || []).map((sbNavItem) => ({
              link: transformLink(sbNavItem?.link),
              summary: sbNavItem?.summary || null,
              image: sbNavItem?.image ? transformImageObj(sbNavItem?.image as ImageFragment) : null,
              icon: sbNavItem?.icon || null
            }))
          }))
        });
      }
    });
    dataReturn.navigation = listNav;
    dataReturn.ctaButtonLink = transformLink(data.ctaButtonLink as LinkFragment);
  }

  return dataReturn;
};

const transformFooter = (data: ComponentPageLayoutFooter): FooterProps => {
  const socials = data.socials || [];
  const navigates = data.navigation || [];

  return {
    title: data.title || '',
    copyright: convertCopyRightText(data.copyright as string),
    subscribeForm: {
      title: data.subscribe?.title || '',
      subtitle: data.subscribe?.summary || '',
      inputPlaceholder: data.subscribe?.inputPlaceholder || '',
      ctaButtonText: data.subscribe?.ctaButtonText || ''
    },
    navigation: navigates.map((item) => ({
      title: item?.title || '',
      items: item?.links.map((item) => transformLink(item as LinkFragment)) || []
    })),
    socials: transformSocials(socials as ComponentSharedSocialLink[])
  };
};

const transformSocials = (data: ComponentSharedSocialLink[]): SocialType[] => {
  return data.map((item) => ({
    id: String(item.id),
    socialType: item.socialType,
    link: transformLink(item.link as LinkFragment)
  }));
};

const convertCopyRightText = (txt?: string) => {
  const pattern = '<<year>>';
  const newTxt = txt || '© <<year>> DOS Labs. All rights reserved. Powered by DOS.';
  return newTxt.replace(pattern, new Date().getFullYear().toString());
};

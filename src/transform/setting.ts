import { FooterProps, HeaderProps, NavigateItemType, PageLayoutProps } from '@/components/layout';
import { SocialType } from '@/types';
import {
  ComponentPageLayoutFooter,
  ComponentPageLayoutHeader,
  ComponentSharedSocialLink,
  GetSettingQuery,
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

      if (navLink.length > 0) {
        listNav.push({
          item: {
            ...navLink[0],
            title: navTitle
          },
          child: navLink.slice(1)
        });
      }
    });
    dataReturn.navigation = listNav;
    dataReturn.ctaButtonLink = transformLink(data.ctaButtonLink as LinkFragment);
  }

  return dataReturn;
};

const transformFooter = (data: ComponentPageLayoutFooter): FooterProps => {
  const socials = data.social || [];
  const navigates = data.navigation || [];

  return {
    title: data.title || '',
    copyright: data.copyright || '',
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

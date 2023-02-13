import { HeaderProps } from '.';

export const headerMockData: HeaderProps = {
  navigation: [
    {
      item: {
        id: '1',
        title: 'Developers',
        url: '/'
      },
      child: [
        {
          id: '1',
          title: 'Developers',
          url: '/'
        }
      ]
    },
    {
      item: {
        id: '2',
        title: 'Products',
        url: '/'
      }
    },
    {
      item: {
        id: '3',
        title: 'Company',
        url: '/'
      },
      child: [
        {
          id: '3',
          title: 'Company',
          url: '/'
        }
      ]
    },
    {
      item: {
        id: '4',
        title: 'Support',
        url: '/'
      }
    }
  ],
  ctaButtonLink: {
    title: 'Build on DOS',
    url: '/'
  }
};

import { HeaderProps } from '.';
import { NavHeaderItemProps, NavHeaderProps } from './nav';

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

export const navHeaderMockData: NavHeaderItemProps[] = [
  {
    title: 'Feature Index',
    items: [
      {
        link: {
          title: 'Get Started',
          url: '/'
        }
      },
      {
        link: {
          title: 'Start Building',
          url: '/'
        }
      },
      {
        link: {
          title: 'Developer Tools',
          url: '/'
        }
      },
      {
        link: {
          title: 'Developer Resources',
          url: '/'
        }
      },
      {
        link: {
          title: 'Adding plugins',
          url: '/'
        }
      },
      {
        link: {
          title: 'Dashboard templates',
          url: '/'
        }
      }
    ],
    style: 'style_1'
  },
  {
    title: 'Documentation',
    items: [
      {
        link: {
          title: 'Getting Started',
          url: '/'
        },
        summary: 'Read up core concepts and the DOS stack with our docs',
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 11.0857V12.0057C21.9988 14.1621 21.3005 16.2604 20.0093 17.9875C18.7182 19.7147 16.9033 20.9782 14.8354 21.5896C12.7674 22.201 10.5573 22.1276 8.53447 21.3803C6.51168 20.633 4.78465 19.2518 3.61096 17.4428C2.43727 15.6338 1.87979 13.4938 2.02168 11.342C2.16356 9.19029 2.99721 7.14205 4.39828 5.5028C5.79935 3.86354 7.69279 2.72111 9.79619 2.24587C11.8996 1.77063 14.1003 1.98806 16.07 2.86572M22 4L12 14.01L9 11.01" stroke="#E84142" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        `
      },
      {
        link: {
          title: 'Learn the Basics',
          url: '/'
        },
        summary: 'A Beginer Tutorial',
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.5 12.5C8.5 12.5 9.8125 14 12 14C14.1875 14 15.5 12.5 15.5 12.5M14.75 7.5H14.76M9.25 7.5H9.26M7 18V20.3355C7 20.8684 7 21.1348 7.10923 21.2716C7.20422 21.3906 7.34827 21.4599 7.50054 21.4597C7.67563 21.4595 7.88367 21.2931 8.29976 20.9602L10.6852 19.0518C11.1725 18.662 11.4162 18.4671 11.6875 18.3285C11.9282 18.2055 12.1844 18.1156 12.4492 18.0613C12.7477 18 13.0597 18 13.6837 18H16.2C17.8802 18 18.7202 18 19.362 17.673C19.9265 17.3854 20.3854 16.9265 20.673 16.362C21 15.7202 21 14.8802 21 13.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V14C3 14.93 3 15.395 3.10222 15.7765C3.37962 16.8117 4.18827 17.6204 5.22354 17.8978C5.60504 18 6.07003 18 7 18ZM15.25 7.5C15.25 7.77614 15.0261 8 14.75 8C14.4739 8 14.25 7.77614 14.25 7.5C14.25 7.22386 14.4739 7 14.75 7C15.0261 7 15.25 7.22386 15.25 7.5ZM9.75 7.5C9.75 7.77614 9.52614 8 9.25 8C8.97386 8 8.75 7.77614 8.75 7.5C8.75 7.22386 8.97386 7 9.25 7C9.52614 7 9.75 7.22386 9.75 7.5Z" stroke="#E84142" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        `
      },
      {
        link: {
          title: 'Build your NFT on DOS',
          url: '/'
        },
        summary: 'An asset or collectible that represents somthing unique',
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.5 15L17.5 12L14.5 9M9.5 9L6.5 12L9.5 15M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z" stroke="#E84142" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        `
      }
    ],
    style: 'style_2'
  },
  {
    title: 'Popular Tutorial',
    items: [
      {
        link: {
          title: 'How to write copy that converts',
          url: '/'
        },
        summary: 'Improve your conversion rat...',
        image: {
          url: '/images/fallback.png'
        }
      },
      {
        link: {
          title: 'How to create a powerful design presentation',
          url: '/'
        },
        summary: 'How to create a powerful...',
        image: {
          url: '/images/fallback.png'
        }
      },
      {
        link: {
          title: 'How to communicate the value of design',
          url: '/'
        },
        summary: 'Picture this. You’re conducti...',
        image: {
          url: '/images/fallback.png'
        }
      }
    ],
    style: 'style_3'
  }
];

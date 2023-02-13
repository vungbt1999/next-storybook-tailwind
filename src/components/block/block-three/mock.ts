import { BlockThreeProps } from '.';

export const blockThreeMock: BlockThreeProps = {
  title: 'Why <span style="color:#FF0000">DOS</span>?',
  summary:
    'DOS is not only the high throughput and low fees Avalanche subnet but also the whole ecosystem to build experiences that cater to the next billion users in web3.',
  items: [
    {
      title: 'Fast and Effective',
      summary: 'Horizontally scalable, instant finality and zero gas fees.',
      ctaButtonLink: {
        url: '/',
        title: 'Learn More'
      },
      image: {
        url: '/images/fallback.png'
      }
    },

    {
      title: 'Best User Experience',
      summary: 'Enhance onboarding experience and simplify Web3 interaction processes.',
      ctaButtonLink: {
        url: '/',
        title: 'Learn More'
      },
      image: {
        url: '/images/fallback.png'
      }
    },

    {
      title: 'Reliable for Developer',
      summary: 'Game engine SDKs, EVM Compatible. Zero blockchain development needed.',
      ctaButtonLink: {
        url: '/',
        title: 'Learn More'
      },
      image: {
        url: '/images/fallback.png'
      },
      styleVariant: 'style_2'
    }
  ]
};

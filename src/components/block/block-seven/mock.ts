import { BlockSevenProps } from '.';

export const blockSevenMock: BlockSevenProps = {
  subtitle: 'Latest News',
  title: 'What’s NEW at <span style="color:#E02D2E">DOS</span>',
  summary: 'Interviews, tips, guides, industry best practices, and news.',
  items: [
    {
      link: {
        title: 'Metados x Seedify: Incubation Announcement!',
        url: '/'
      },
      date: '20 Jan 2022',
      image: {
        url: '/images/fallback.png'
      }
    },

    {
      link: {
        title: 'MetaDOS: Recap MetaDOS at gamescom asia',
        url: '/'
      },
      date: '19 Jan 2022',
      image: {
        url: '/images/fallback.png'
      }
    },

    {
      link: {
        title: 'DOS Labs to launch an DOS, an Avalanche Subnet',
        url: '/'
      },
      date: '18 Jan 2022',
      image: {
        url: '/images/fallback.png'
      }
    }
  ],
  ctaButtonLink: {
    title: 'View all posts',
    url: '/'
  }
};

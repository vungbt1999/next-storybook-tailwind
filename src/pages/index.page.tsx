import { GetServerSidePropsContext } from 'next';
import { getHomePageSlug } from '../utils/server';

export default function HomePage() {
  return <></>;
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const homePageSlug = await getHomePageSlug();
  if (homePageSlug) {
    return {
      redirect: {
        destination: `/${homePageSlug}`,
        permanent: false
      }
    };
  }
  return {
    props: {}
  };
};

HomePage.withPageLayout = true;

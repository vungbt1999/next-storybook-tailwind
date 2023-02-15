import Blocks from '@/components/block';
import { withRevalidate } from '@/middleware/withRevalidate';
import { transformPage, transformSEO } from '@/transform';
import { getApiClient } from '@/utils/graphql-api';
import { findPageIdBySlugLocale, notFound } from '@/utils/server';
import clsx from 'clsx';
import { GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';

type Props = {
  page: ReturnType<typeof transformPage>;
};

export default function Page({ page }: Props) {
  const router = useRouter();
  if (router.isFallback) {
    return <div className="min-w-full min-h-full flex justify-center items-center">Loading...</div>;
  }

  return (
    <div
      style={{
        background: page?.backgroundImage
          ? `url(${page?.backgroundImage.url}) no-repeat center center`
          : undefined
      }}
      className={clsx({
        '!bg-cover': page?.backgroundImage
      })}
    >
      <Blocks blocks={page?.blocks || []} />
    </div>
  );
}

Page.withPageLayout = true;

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking'
  };
};

export const getStaticProps = withRevalidate(async (ctx: GetStaticPropsContext) => {
  const { slug = null } = ctx.params as any;
  const id = await findPageIdBySlugLocale(slug, ctx.locale);
  if (!id) {
    return notFound();
  }

  const apiClient = getApiClient();
  const result = await apiClient.getPage({ id });
  const page = transformPage(result);
  if (!page) {
    return notFound();
  }

  return {
    props: {
      page,
      seo: transformSEO(result.page?.data?.attributes?.seo)
    }
  };
});

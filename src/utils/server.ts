export type ContentType = 'chain';
export type ContentTypes = 'pages' | 'chains';

export const findIdBySlugLocale = ({
  contentTypes,
  slug
}: {
  contentTypes: ContentTypes;
  slug: string;
}) => {
  const url = `${process.env.RESTFUL_API_URL}/${contentTypes}/?filters[slug][$eq]=${slug}&populate=localizations&locale=all`;
  return fetch(url)
    .then((res) => res.json())
    .then((res) => {
      let entry = res?.data?.pop();
      if (entry) {
        return entry.id;
      }
      return null;
    })
    .catch((_err) => {
      return null;
    });
};

export const findPageIdBySlugLocale = (slug: string, locale?: string) =>
  findIdBySlugLocale({
    contentTypes: 'pages',
    slug
  });

export const notFound = () => {
  return {
    props: {
      message: 'Not found'
    },
    notFound: true
  };
};

export const getHomePageSlug = () => {
  const url = `${process.env.RESTFUL_API_URL}/setting?populate=homePage&locale=all`;
  return fetch(url)
    .then((res) => res.json())
    .then((res) => {
      const resData = res.data[0];
      return resData?.attributes?.homePage?.data?.attributes?.slug || null;
    })
    .catch((_err) => {
      return null;
    });
};

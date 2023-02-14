import { SEO, SEOData } from '@/components/common';
import { PageLayout, PageLayoutProps } from '@/components/layout';
import { themeConfig, ThemeProvider } from '@/config/themes';
import { transformSEO, transformSetting } from '@/transform';
import { ApiClientProvider, getApiClient } from '@/utils/graphql-api';
import type { AppProps } from 'next/app';
import App from 'next/app';
import { Fragment, useMemo } from 'react';
import '../styles/index.css';

type MyAppProps = {
  pageProps: any;
  setting: PageLayoutProps;
  seo: SEOData;
} & AppProps;

export default function MyApp({ Component, pageProps, seo, setting }: MyAppProps) {
  const Layout = (Component as any).withPageLayout ? PageLayout : Fragment;

  const settingLayout = useMemo<PageLayoutProps>(() => {
    return {
      ...setting
    };
  }, [setting]);

  return (
    <ApiClientProvider apiUrl={String(process.env.GRAPHQL_API_URL)}>
      <ThemeProvider config={themeConfig}>
        <Layout {...settingLayout}>
          <div>
            {seo && <SEO {...seo} />}
            <Component {...pageProps} />
          </div>
        </Layout>
      </ThemeProvider>
    </ApiClientProvider>
  );
}

MyApp.getInitialProps = async (appContext: any) => {
  const appProps = await App.getInitialProps(appContext);
  const apiClient = getApiClient();
  const result = await apiClient.getSetting();
  const setting = transformSetting(result);
  const seoDataApp =
    transformSEO(
      result.setting?.data?.attributes?.seo,
      result.setting?.data?.attributes?.siteName
    ) || {};
  const seoDataPage = appProps.pageProps.seo || {};
  const seo = { ...seoDataApp, ...seoDataPage };
  return {
    ...appProps,
    setting,
    seo: Object.keys(seo) ? seo : null
  };
};

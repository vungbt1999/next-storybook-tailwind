import { footerMockData, headerMockData, PageLayout } from '@/components/layout';
import { themeConfig, ThemeProvider } from '@/config/themes';
// import { ApiClientProvider } from '@/utils/graphql-api'
import type { AppProps } from 'next/app';
import { Fragment } from 'react';
import '../styles/index.css';

export default function App({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).withPageLayout ? PageLayout : Fragment;
  return (
    // <ApiClientProvider apiUrl={String(process.env.GRAPHQL_API_URL)}>
    <ThemeProvider config={themeConfig}>
      <Layout header={headerMockData} footer={footerMockData}>
        <Fragment>
          {/* {seo && <SEO {...seo} />} */}
          <Component {...pageProps} />
        </Fragment>
      </Layout>
    </ThemeProvider>
    // </ApiClientProvider>
  );
}

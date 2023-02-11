import { themeConfig, ThemeProvider } from '@/config/themes';
// import { ApiClientProvider } from '@/utils/graphql-api'
import type { AppProps } from 'next/app';
import { Fragment } from 'react';
import '../styles/index.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <ApiClientProvider apiUrl={String(process.env.GRAPHQL_API_URL)}>
    <ThemeProvider config={themeConfig}>
      <Fragment>
        <Component {...pageProps} />
      </Fragment>
    </ThemeProvider>
    // </ApiClientProvider>
  );
}

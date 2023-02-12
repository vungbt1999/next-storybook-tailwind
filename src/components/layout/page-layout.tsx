import Head from 'next/head';
import React, { Fragment } from 'react';
import { Footer, FooterProps } from './footer';
import { Header, HeaderProps } from './header';

export type PageLayoutProps = {
  children?: JSX.Element | string;
  header: HeaderProps;
  footer: FooterProps;
};
export function PageLayout({ children, header, footer }: PageLayoutProps) {
  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>

      <Header {...header} />
      <div className="content-container pt-94">{children}</div>
      <Footer {...footer} />
    </Fragment>
  );
}

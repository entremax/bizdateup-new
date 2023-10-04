import './global.css';
import type {AppProps} from 'next/app';
import Head from 'next/head';
import ReduxProvider from '@/store/Provider';
import React from 'react';
import theme from '@/theme/themeConfig';
import StyledComponentsRegistry from '@/lib/AntdRegistry';
import {ConfigProvider} from 'antd';
import RootLayout from '@/components/layout';

export default function App({Component, pageProps}: AppProps) {
  return (
    <ReduxProvider>
      <StyledComponentsRegistry>
        <ConfigProvider theme={theme}>
          <Head>
            <title>Bizdateup | Dashboard</title>
            <meta
              name='viewport'
              content='minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no'
            />
            <link
              rel={'shortcut icon'}
              href={'/logo.svg'}
            />
          </Head>
          <RootLayout>
            <Component {...pageProps} />
          </RootLayout>
        </ConfigProvider>
      </StyledComponentsRegistry>
    </ReduxProvider>
  );
}

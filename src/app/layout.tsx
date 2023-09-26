import React from 'react';
import { Inter } from 'next/font/google';

import StyledComponentsRegistry from '@/lib/AntdRegistry';

import './globals.css';
import { ConfigProvider } from 'antd';
import theme from '@/theme/themeConfig';
import ReduxProvider from '@/store/Provider';
import './globals.css';
import Navbar from '@/components/navbar'

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Bizdata',
  description: 'by @bizdata',
};

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang='en'>
    <body className={inter.className}>
      <StyledComponentsRegistry>
        <ReduxProvider>
          <ConfigProvider theme={theme}>
            <Navbar/>
            {children}
          </ConfigProvider>
        </ReduxProvider>
      </StyledComponentsRegistry>
    </body>
  </html>
);

export default RootLayout;

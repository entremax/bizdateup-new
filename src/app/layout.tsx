import React from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import theme from "@/theme/themeConfig";
import {ConfigProvider} from "antd";
import StyledComponentsRegistry from "@/lib/AntdRegistry";
import ReduxProvider from "@/store/Provider";
import AntNotification from "@/ui/notification";
import Navbar from "@/components/navbar";
import MobileNavbar from "@/components/mobileNavbar";
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Bizdata',
  description: 'by @bizdata',
};

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang='en'>
    <body className={inter.className}>
    <StyledComponentsRegistry>
      <ConfigProvider theme={theme}>
        <Navbar/>
        {children}
        <MobileNavbar/>
        <ReduxProvider>
          <AntNotification/>
        </ReduxProvider>
      </ConfigProvider>
    </StyledComponentsRegistry>
    </body>
  </html>
);

export default RootLayout;

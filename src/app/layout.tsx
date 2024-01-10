import React from 'react'
import { Inter } from 'next/font/google'
import './globals.css'
import theme from '@/theme/themeConfig'
import { ConfigProvider } from 'antd'
import StyledComponentsRegistry from '@/lib/AntdRegistry'
import ReduxProvider from '@/store/Provider'
import AntNotification from '@/components/notification'
import MobileNavbar from '@/components/navbar/navbar_mobile'
import UserProvider from '@/context/UserContext'
import Footer from '@/components/footer'
import NavbarNew from '@/components/navbar_new'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bizdata',
  description: 'by @bizdata',
}

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en">
    <body className={inter.className}>
      <StyledComponentsRegistry>
        <ConfigProvider theme={theme}>
          <ReduxProvider>
            <UserProvider>
              <NavbarNew />
              {children}
              <Footer />
              <MobileNavbar />
              <AntNotification />
            </UserProvider>
          </ReduxProvider>
        </ConfigProvider>
      </StyledComponentsRegistry>
    </body>
  </html>
)

export default RootLayout

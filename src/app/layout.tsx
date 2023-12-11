import React from 'react'
import { Inter } from 'next/font/google'
import './globals.css'
import theme from '@/theme/themeConfig'
import { ConfigProvider } from 'antd'
import StyledComponentsRegistry from '@/lib/AntdRegistry'
import ReduxProvider from '@/store/Provider'
import AntNotification from '@/components/notification'
import MobileNavbar from '@/components/navbar/navbar_mobile'
import Navbar from '@/components/navbar/navbar'
import UserProvider from '@/hooks/useUser'

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
              <Navbar />
              {children}
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

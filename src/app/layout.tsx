import React from 'react'
import { Inter } from 'next/font/google'
import './globals.css'
import theme from '@/theme/themeConfig'
import { ConfigProvider } from 'antd'
import StyledComponentsRegistry from '@/lib/AntdRegistry'
import ReduxProvider from '@/store/Provider'
import AntNotification from '@/components/notification'
import MobileNavbar from '@/components/navbar/navbar_mobile'
import UserProvider from '@/hooks/useUser'
import dynamic from 'next/dynamic'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bizdata',
  description: 'by @bizdata',
}
const Navbar = dynamic(() => import('@/components/navbar/navbar'), {
  ssr: false,
})
const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en">
    <body className={inter.className}>
      <StyledComponentsRegistry>
        <ConfigProvider theme={theme}>
          <ReduxProvider>
            <UserProvider>
              <Navbar />
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

import React from 'react'
import { Inter } from 'next/font/google'
import './globals.css'
import theme from '@/theme/themeConfig'
import { ConfigProvider } from 'antd'
import StyledComponentsRegistry from '@/lib/AntdRegistry'
import ReduxProvider from '@/store/Provider'
import AntNotification from '@/components/notification'
import MobileNavbar from '@/components/navbar/navbar_mobile'
import Footer from '@/components/footer'
import NavbarNew from '@/components/navbar_new'
import dynamic from 'next/dynamic'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bizdata',
  description: 'by @bizdata',
}
const CommonLayout=dynamic(()=>import('@/components/layouts/CommonLayout') ,{
  ssr:false
})
const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en">
    <body className={inter.className}>
      <StyledComponentsRegistry>
        <ConfigProvider theme={theme}>
          <ReduxProvider>
            <CommonLayout>
              <NavbarNew />
              {children}
              <Footer />
              <MobileNavbar />
              <AntNotification />
            </CommonLayout>
          </ReduxProvider>
        </ConfigProvider>
      </StyledComponentsRegistry>
    </body>
  </html>
)

export default RootLayout

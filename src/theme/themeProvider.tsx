import { ReactNode } from 'react'
import theme from '@/theme/themeConfig'
import StyledComponentsRegistry from '@/lib/AntdRegistry'
import { ConfigProvider } from 'antd'

/**
 * Provides Antdesign theme to the children components.
 *
 * @param {Object} props - The props object.
 * @param {ReactNode} props.children - The components that need to be themed.
 *
 * @return {ReactNode} - The themed components wrapped in `StyledComponentsRegistry` and `ConfigProvider`.
 */
export default function ThemeProvider({
  children,
}: {
  children: ReactNode
}): ReactNode {
  return (
    <StyledComponentsRegistry>
      <ConfigProvider theme={theme}>{children}</ConfigProvider>
    </StyledComponentsRegistry>
  )
}

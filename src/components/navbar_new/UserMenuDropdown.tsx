import React from 'react'
import { Menu } from 'antd'
import type { MenuProps } from 'antd/es/menu'

type MenuItem = Required<MenuProps>['items'][number]

const UserMenuDropdown = ({
  items,
  onClick,
}: {
  items: {
    label: React.JSX.Element
    key: string
    icon: React.JSX.Element
    hidden?: boolean | any
    danger?: boolean
  }[]
  onClick: MenuProps['onClick']
}) => {
  function getItem(
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    danger?: boolean,
    hidden?: boolean,
    children?: MenuItem[],
  ): MenuItem {
    if (hidden) {
      return null
    }
    return {
      key,
      icon,
      children,
      label,
      danger,
      onClick,
    } as MenuItem
  }

  const menuItems: MenuItem[] = items.map((item) =>
    getItem(item.label, item.key, item.icon, item.danger, item.hidden),
  )

  return <Menu style={{ width: 198 }} items={menuItems} />
}
export default UserMenuDropdown

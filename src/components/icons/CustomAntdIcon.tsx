'use client'
import React, {
  ComponentType,
  ForwardRefExoticComponent,
  SVGProps,
} from 'react'
import Icon from '@ant-design/icons'
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon'

interface IconWrapperProps {
  component:
    | ComponentType<CustomIconComponentProps | SVGProps<SVGSVGElement>>
    | ForwardRefExoticComponent<CustomIconComponentProps>
    | undefined
  className?: string
}

export default function IconWrapper(
  { component, className }: IconWrapperProps,
  props: Partial<CustomIconComponentProps>,
) {
  return <Icon component={component} className={className} {...props} />
}

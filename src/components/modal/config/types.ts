import { ModalFuncProps } from 'antd/lib/modal'
import React, { ReactNode } from 'react'

type Where = 'investLeft' | 'defaultCentered' | 'riskDisclosure'

export interface BaseModalProps extends ModalFuncProps {
  location?: Where
  children: React.ReactNode
  openType?: 'button' | 'conditional' | undefined | 'custom button'
  customOpenButton?: React.ReactNode
  onConditionalOpen?: () => undefined | boolean
  title?: ReactNode
  reset?: boolean
}

interface OpenWithButtonProps extends BaseModalProps {
  openType?: 'button'
}

interface OpenWithCustomButtonProps extends BaseModalProps {
  openType: 'custom button'
  customOpenButton: ReactNode
  open: boolean
}

interface OpenConditionallyProps extends BaseModalProps {
  openType: 'conditional'
  onConditionalOpen: () => boolean
}

export type CustomModelProps =
  | OpenConditionallyProps
  | OpenWithButtonProps
  | OpenWithCustomButtonProps

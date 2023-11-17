import { ModalFuncProps } from 'antd/lib/modal'
import React, { ReactNode } from 'react'

type Where = 'investLeft' | 'defaultCentered' | 'riskDisclosure'

export interface BaseModalProps extends ModalFuncProps {
  location?: Where
  children: React.ReactNode
  openType?: 'button' | 'conditional' | undefined
  onConditionalOpen?: () => undefined | boolean
  title?: ReactNode
}

interface OpenWithButtonProps extends BaseModalProps {
  openType?: 'button'
}

interface OpenConditionallyProps extends BaseModalProps {
  openType: 'conditional'
  onConditionalOpen: () => boolean
}

export type CustomModelProps = OpenConditionallyProps | OpenWithButtonProps

'use client'
import React, { ReactNode, useState } from 'react'
import { Button, ConfigProvider, Modal } from 'antd'
import {
  DefaultCenteredContentStyle,
  DefaultCenteredCustomProps,
  DefaultCenteredModalStyle,
  InvestContentStyle,
  InvestModalCustomProps,
  InvestModalStyle,
  RiskDisclosureContentStyle,
  RiskDisclosureCustomProps,
  RiskDisclosureModalStyle,
} from '@/ui/config/modalConfig'
import type * as CSS from 'csstype'
import { ModalFuncProps } from 'antd/lib/modal'

type Where = 'investLeft' | 'defaultCentered' | 'riskDisclosure'

interface Props extends ModalFuncProps {
  location?: Where
  children: React.ReactNode
  openWithButton?: boolean
  title?: ReactNode
}

const modalStyle = {
  defaultCentered: {
    modalStyle: DefaultCenteredModalStyle,
    contentStyle: DefaultCenteredContentStyle,
    modalProps: DefaultCenteredCustomProps,
  },
  investLeft: {
    modalStyle: InvestModalStyle,
    contentStyle: InvestContentStyle,
    modalProps: InvestModalCustomProps,
  },
  riskDisclosure: {
    modalStyle: RiskDisclosureModalStyle,
    contentStyle: RiskDisclosureContentStyle,
    modalProps: RiskDisclosureCustomProps,
  },
}

const CustomModal: React.FC<Props> = ({
  location = 'defaultCentered',
  children,
  openWithButton = false,
  title,
  ...props
}) => {
  console.log('location:', location, '\n Styles')
  const defaultStyle = modalStyle['defaultCentered']
  const [modalOpen, setModalOpen] = useState(!openWithButton)
  const [styleForModal] = useState<CSS.Properties>(
    modalStyle[location]?.modalStyle || defaultStyle.modalStyle,
  )
  const [stylesForModalContent] = useState<{}>(
    modalStyle[location]?.contentStyle || defaultStyle.contentStyle,
  )
  const [modalProps] = useState<ModalFuncProps>(
    modalStyle[location]?.modalProps || defaultStyle.modalProps,
  )

  const handleClose = () => {
    setModalOpen(!modalOpen)
  }

  return (
    <>
      {openWithButton ? (
        <Button
          onClick={handleClose}
          className="!bg-primary !text-white"
          type="default"
          size="large"
          block
        >
          I am ready to invest
        </Button>
      ) : null}
      <ConfigProvider
        modal={{ styles: stylesForModalContent, style: styleForModal }}
      >
        <Modal
          title={title}
          open={modalOpen}
          onOk={() => setModalOpen(false)}
          onCancel={() => setModalOpen(false)}
          {...modalProps}
          {...props}
        >
          {children}
        </Modal>
      </ConfigProvider>
    </>
  )
}

export default CustomModal

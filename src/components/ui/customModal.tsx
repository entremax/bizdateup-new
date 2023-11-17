'use client'
import React, { useMemo, useState } from 'react'
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
import { CustomModelProps } from '@/ui/config/types'

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

const CustomModal: React.FC<CustomModelProps> = ({
  location = 'defaultCentered',
  children,
  openType,
  onConditionalOpen,
  title,
  ...props
}) => {
  const defaultStyle = modalStyle['defaultCentered']
  const modelState = useMemo(() => {
    if (openType === 'button') {
      return false
    }
    if (openType === 'conditional') {
      return onConditionalOpen ? onConditionalOpen() : false
    }
    return true
  }, [onConditionalOpen, openType])

  const [modalOpen, setModalOpen] = useState(modelState)

  const styleForModal = useMemo(
    () => modalStyle[location]?.modalStyle || defaultStyle.modalStyle,
    [location, defaultStyle],
  )

  const stylesForModalContent = useMemo(
    () => modalStyle[location]?.contentStyle || defaultStyle.contentStyle,
    [location, defaultStyle],
  )

  const modalProps = useMemo(
    () => modalStyle[location]?.modalProps || defaultStyle.modalProps,
    [location, defaultStyle],
  )

  const handleClose = () => {
    setModalOpen(!modalOpen)
  }
  return (
    <>
      {openType === 'button' ? (
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

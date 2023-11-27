'use client'
import React, { useEffect, useMemo, useState } from 'react'
import { ConfigProvider, Modal } from 'antd'
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

export const dynamic = 'force-dynamic'

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
  customOpenButton,
  onConditionalOpen,
  title,
  reset,
  ...props
}) => {
  const defaultStyle = modalStyle['defaultCentered']

  const modelState = useMemo(() => {
    if (openType === 'conditional' && onConditionalOpen) {
      return onConditionalOpen ? onConditionalOpen() : false
    } else if (openType === 'custom button') {
      return false
    }
    return true
  }, [openType])

  const [modalOpen, setModalOpen] = useState(modelState)
  const [childrenVisible, setChildrenVisible] = useState(true)
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
    setChildrenVisible(false)
  }
  useEffect(() => {
    if (modalOpen) {
      setChildrenVisible(true)
    }
  }, [modalOpen])
  useEffect(() => {
    if (openType === 'conditional') {
      setModalOpen(onConditionalOpen)
    }
  }, [onConditionalOpen, openType])
  return (
    <>
      {openType === 'custom button' && customOpenButton}
      <ConfigProvider
        modal={{ styles: stylesForModalContent, style: styleForModal }}>
        <Modal
          title={title}
          open={modalOpen}
          onOk={handleClose}
          onCancel={handleClose}
          {...modalProps}
          {...props}
          destroyOnClose={true}>
          {(childrenVisible && children) || (reset && children)}
        </Modal>
      </ConfigProvider>
    </>
  )
}

export default CustomModal

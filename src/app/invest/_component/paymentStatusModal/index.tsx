'use client'
import { StartupData } from '@/types/_type'
import React from 'react'
import CustomModal from '@/ui/customModal'
import { useAppSelector } from '@/store/hooks'
import { useSearchParams } from 'next/navigation'

/**
 * Renders a modal to show payment status.
 *
 *
 */
const PaymentStatusModal: React.FC<{ startup: StartupData }> = ({
  startup,
}) => {
  const { payment } = useAppSelector((state) => state.Notify)
  const searchParams = useSearchParams()
  const query = searchParams.get('name')
  console.log(query)
  const handleModelBehavior = () => {
    return true
  }

  return (
    <CustomModal
      title={null}
      closable
      closeIcon
      openType={'conditional'}
      onConditionalOpen={handleModelBehavior}
    >
      Hello
    </CustomModal>
  )
}

export default PaymentStatusModal

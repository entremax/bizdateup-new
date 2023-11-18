'use client'
import { StartupData } from '@/types/_type'
import React from 'react'
import CustomModal from '@/ui/customModal'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

/**
 * Renders a modal to show payment status.
 *
 *
 */
const PaymentStatusModal: React.FC<{ startup: StartupData }> = ({
  startup,
}) => {
  const dispatch = useAppDispatch()
  const { payment } = useAppSelector((state) => state.Notify)

  const params = useParams()

  const handleOpen = () => {
    // setTimeout(() => {
    //   dispatch(destroyNotification())
    // }, 6000)

    return !!(
      payment &&
      payment.status === 'success' &&
      payment.startup_id === params?.id
    )
  }
  return (
    <CustomModal
      title={null}
      closable
      closeIcon
      openType={'conditional'}
      onConditionalOpen={handleOpen}>
      <div className="flex flex-col items-center justify-center gap-4">
        <Image
          src={'/cheers-beers.png'}
          alt={'cheers beers'}
          width={'140'}
          height={'120'}
        />
        <h3 className="reset text-center text-xl font-bold xl:text-2xl">
          Cheers!, We will review the payment in 1-2 working days
        </h3>
        <p className="reset text-md text-[rgba(68, 68, 68, 1)] text-center font-normal xl:text-lg">
          Sed ut perspicacity Ande omnibus iste natus error sit voluptatem
          accusation doloremque laudanum, totam rem aperiam, eaque ipsa quae ab
          ill inventory veritas et quasi architecto beatae vitae dicta sunt
          explicable
        </p>
        <Link href={'/dashboard'} className={'!primary_link '}>
          Go to Dashboard
        </Link>
      </div>
    </CustomModal>
  )
}

export default PaymentStatusModal

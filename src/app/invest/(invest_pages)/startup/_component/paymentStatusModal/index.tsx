'use client'
import { StartupData } from '@/types/invest'
import React from 'react'
import CustomModal from '@/components/modal/customModal'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import { destroyNotification } from '@/reducers/others/notificationSlice'
import { Button } from 'antd'

/**
 * Renders a modal to show payment status.
 *
 *
 */
const PaymentStatusModal: React.FC<{ startup: StartupData }> = ({
  startup,
}) => {
  const router = useRouter()
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
      onCancel={() => dispatch(destroyNotification())}
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
        <Button
          type={'default'}
          onClick={() => {
            dispatch(destroyNotification())
            return router.push('/dashboard', { scroll: false })
          }}
          className={'!primary_link !text-white'}>
          Go to Dashboard
        </Button>
      </div>
    </CustomModal>
  )
}

export default PaymentStatusModal

'use client'
import React from 'react'
import { cashfreeProd, cashfreeSandbox } from 'cashfree-pg-sdk-javascript'
import { useOnlinePaymentVerifyMutation } from '@/services/paymentSlice'
import { useRouter } from 'next/navigation'
import { store } from '@/store'
import { setNotification, showModal } from '@/reducers/others/notificationSlice'

type Props = {
  session_id: string
  searchParams: { order_id: string; startup_id: string }
}

const CaseFreeDrop: React.FC<Props> = ({ session_id, searchParams }) => {
  const router = useRouter()
  const order_id = searchParams?.order_id
  const startup_id = searchParams?.startup_id

  const [onlinePaymentVerify] = useOnlinePaymentVerifyMutation()
  const isProd = false
  const components = ['order-details', 'card', 'upi', 'app', 'netbanking']
  const style = {
    backgroundColor: '#ffffff',
    color: '#8686f5',
    fontSize: '14px',
    fontFamily: 'Lato',
    errorColor: '#ff0000',
    theme: 'light',
    borderRadius: '10px',
    boxShadow: '1px #fff',
    webKitScrollbar: 'none',
    width: '100%',
  }
  React.useEffect(() => renderDrop(), [])

  const paymentSuccess = async (data: any) => {
    if (data.order && data.order.status === 'PAID') {
      try {
        const res = await onlinePaymentVerify({ order_id })

        if ('data' in res && res?.data?.code === 200) {
          store.dispatch(
            showModal({
              status: 'success',
              startup_id,
            }),
          )
          return router.back()
        }
      } catch (e) {
        console.error(e)
      }

      store.dispatch(
        setNotification({
          type: 'error',
          message: "Couldn't verify Payment",
        }),
      )
    } else {
      store.dispatch(
        setNotification({
          type: 'error',
          message: "Couldn't verify Payment",
          description: data?.order?.message,
        }),
      )
    }
  }

  const paymentFailed = (data: any) => {
    store.dispatch(
      setNotification({
        type: 'error',
        message: data?.order?.errorText,
        description: data?.order?.message,
      }),
    )
  }
  const renderDrop = () => {
    if (order_id === '') {
      // alert('Order Token is empty');
      return
    }
    if (!components.length) {
      // alert('No drop in specified');
      return
    }
    let parent = document.getElementById('drop_in_container')
    if (parent) {
      parent.innerHTML = ''
    }
    let cashfree
    if (isProd) {
      cashfree = new cashfreeProd.Cashfree(session_id)
    } else {
      cashfree = new cashfreeSandbox.Cashfree(session_id)
    }

    cashfree.drop(parent, {
      onSuccess: paymentSuccess,
      onFailure: paymentFailed,
      components,
      style,
    })
  }
  return (
    <div
      id="drop_in_container"
      className={
        'md:w-4/4 scrollbar w-full rounded-[10px] border-0  caret-transparent shadow '
      }
    />
  )
}
export default CaseFreeDrop

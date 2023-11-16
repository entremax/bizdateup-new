'use client'
import React from 'react'
import { cashfreeProd, cashfreeSandbox } from 'cashfree-pg-sdk-javascript'
import { useOnlinePaymentVerifyMutation } from '@/services/paymentSlice'
import { useRouter } from 'next/navigation'

type Props = {
  session_id: string
  order_id: string
}

const CaseFreeDrop: React.FC<Props> = ({ session_id, order_id }) => {
  const router = useRouter()
  const [onlinePaymentVerify] = useOnlinePaymentVerifyMutation()
  const isProd = false
  const components = ['order-details', 'card', 'upi', 'app', 'netbanking']
  const style = {
    backgroundColor: '#ffffff',
    color: '#f3b617',
    fontSize: '16px',
    fontFamily: 'Lato',
    errorColor: '#e14d2a',
    theme: 'light',
    width: '50%',
  }

  React.useEffect(() => renderDrop(), [])

  const paymentUpdate = async () => {
    return await onlinePaymentVerify({
      order_id,
    })
      .unwrap()
      .then((res) => {
        console.log(res)
        return res
      })
      .catch((e) => {
        console.log(e)
      })
  }
  const paymentSuccess = async (data: any) => {
    console.log(data)
    if (data.order && data.order.status === 'PAID') {
      // alert("paid")
      const update = await paymentUpdate()
      console.log(update)
    } else {
    }
  }

  const paymentFailed = (data: any) => {}
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
      className={'md:w-2/4 m-auto shadow border-0 '}
    />
  )
}
export default CaseFreeDrop

'use client'
import { Button } from 'antd'
import { OfflinePayments, OnlinePaymentData, StartupData } from '@/types/invest'
import React, { useState } from 'react'
import { apiUri, capitalizeFirstLetter } from '@/lib/utils'
import { Icons } from '@/components/icons/icon'
import Image from 'next/image'
import CustomModal from '@/components/modal/customModal'
import InvestForm from '@/components/invest/investModal/investForm'
import ReduxProvider from '@/store/Provider'
import OfflinePayment from '@/components/invest/investModal/offlinePayment'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { usePaymentMutation } from '@/services/paymentSlice'
import { setNotification, showModal } from '@/reducers/others/notificationSlice'
import { useRouter } from 'next/navigation'

type TransactionTypes = 'online' | 'offline' | null
/**
 * Renders a form to invest a specified amount.
 *
 *
 */
const InvestTransactionModal: React.FC<{ startup: StartupData }> = ({
  startup,
}) => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const [amount, setAmount] = useState<number>(0)
  const [transactionType, setTransactionType] =
    useState<TransactionTypes>('online')
  const [open, setOpen] = useState(false)
  const [amountToPay, setAmountToPay] = useState(0)
  const { premiumMember, user } = useAppSelector((state) => state.authUser)
  const [payment, { isLoading: paymentLoading }] = usePaymentMutation()
  const calculateConvenienceFee = (amount: number) => Math.ceil(amount * 0.02)
  const calculateGst = (amount: number) =>
    premiumMember ? 0 : Math.ceil(calculateConvenienceFee(amount) * 0.18)

  const fees = React.useMemo(() => {
    const subscriptionAmount = amount
    const convenienceFee = calculateConvenienceFee(amount)
    const gst = calculateGst(amount)
    const extraFee = convenienceFee + gst
    const totalAmount = premiumMember ? amount : amount + convenienceFee + gst
    setAmountToPay(totalAmount)
    return {
      subscriptionAmount,
      convenienceFee,
      gst,
      totalAmount,
      extraFee,
    }
  }, [amount])

  const handlePayment = async (
    payment_mode: 'online' | 'offline',
    referenceId?: String,
  ) => {
    if (!user) {
      return
    }
    let payment_data: OnlinePaymentData | OfflinePayments = {
      order_amount: fees.totalAmount,
      order_currency: 'INR',
      order_note: `Payment for ${startup.registeredCompanyName} `,
      customer_id: user?._id,
      customer_email: user?.email,
      convenienceFee: fees.convenienceFee,
      customer_name: user?.firstName + ' ' + user?.lastName,
      customer_phone: user?.phone ? String(user?.phone) : undefined,
      startupId: startup._id,
      amount,
      tds: 0,
      gst: fees.gst,
    }
    if (payment_mode === 'offline') {
      payment_data = {
        ...payment_data,
        reference: referenceId,
        dateOfpayment: '',
      }
    }
    const payment_res = await payment({
      payment_mode,
      paymentData: { ...payment_data },
    })
      .unwrap()
      .then((res) => {
        if (res?.code !== 200) {
          dispatch(
            setNotification({
              type: 'error',
              message: "Couldn't Finish Payment",
              description: res?.message,
            }),
          )
          return
        }
        return res.data
      })
      .catch((e) => {
        dispatch(
          setNotification({
            type: 'error',
            message: "Couldn't Finish Payment",
            description: e?.data?.message
              ? e?.data?.message
              : 'Something went wrong!',
          }),
        )
        return
      })
    if (!payment_res) {
      return
    }
    if (transactionType === 'online') {
      const { order_id, payment_session_id: session_id } = payment_res
      router.push(
        '/payment/' +
          session_id +
          `?order_id=${order_id}&startup_id=${startup._id}`,
      )
    } else {
      // dispatch(
      //   setNotification({
      //     type: 'success',
      //     message: 'Redirecting to payment page',
      //   }),
      // )
      handleClose()
      dispatch(
        showModal({
          status: 'success',
          startup_id: startup._id,
        }),
      )
    }
  }
  const handleOpen = () => {
    setOpen(!open)
  }
  const handleClose = () => {
    setTransactionType('online')
    setAmount(0)
    setOpen(false)
  }
  return (
    <CustomModal
      title={
        <div className="flex items-center gap-4 p-4 shadow">
          {transactionType === 'offline' ? (
            <Button
              className={'!border-none !shadow-none !outline-none '}
              icon={<Icons.ArrowLeft height={13} width={13} />}
              onClick={() => setTransactionType(null)}
              ghost
            />
          ) : (
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-400">
              <Image
                src={apiUri().v1 + '/logo/' + startup.logo}
                height={45}
                width={45}
                alt={startup.companyName}
              />
            </div>
          )}
          <h5 className="leading-normaltext-primary-dark reset text-xl font-bold">
            {transactionType === 'offline'
              ? 'Offline Payment'
              : capitalizeFirstLetter(
                  startup.registeredCompanyName.trim().split(' '),
                )}
          </h5>
        </div>
      }
      location={'investLeft'}
      openType={'custom button'}
      className={'!invest-modal'}
      customOpenButton={
        <Button
          onClick={handleOpen}
          className="!bg-primary !text-white"
          type="default"
          size="large"
          block>
          I am ready to invest
        </Button>
      }
      closable
      closeIcon
      open={open}
      onOk={handleClose}
      onCancel={handleClose}>
      {transactionType === 'offline' ? (
        <>
          <OfflinePayment
            paymentLoading={paymentLoading}
            handlePayment={handlePayment}
            amountToPay={amountToPay}
          />
        </>
      ) : (
        <ReduxProvider>
          <InvestForm
            startup={startup}
            fees={fees}
            paymentLoading={paymentLoading}
            handlePayment={handlePayment}
            setTransactionType={setTransactionType}
            setAmount={setAmount}
            amount={amount}
            setAmountToPay={setAmountToPay}
          />
        </ReduxProvider>
      )}
    </CustomModal>
  )
}

export default InvestTransactionModal

'use client'
import React, { useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import { Icons } from '@/icons'
import { Button, Divider, Input, Tooltip } from 'antd'

type Props = {
  amountToPay: number
  handlePayment: (payment_mode: 'offline', referenceId: string) => void
  paymentLoading: boolean
}
const OfflinePayment: React.FC<Props> = ({
  amountToPay = 0,
  handlePayment,
  paymentLoading = false,
}) => {
  const [referenceId, setReferenceId] = useState('')
  const BankDetails = {
    name: 'BIZDATEUP TECHNOLOGIES PRIVATE LIMITED',
    accountNumber: 50000700057404,
    ifsc: 'YESB0CMSNOC',
  }

  return (
    <div className={'flex flex-col gap-4'}>
      <div className="grid gap-4 p-8 pb-4">
        <p className="reset xl:text-md text-sm font-medium text-gray-700">
          Use the below details to transfer money using RTGS, NEFT OR IMPS.
        </p>
        <div className={'grid gap-6'}>
          <BankDetail
            label={'Name'}
            title={'A/C Name'}
            value={BankDetails.name}
          />
          <BankDetail
            label={'Account Number'}
            title={'A/C No.'}
            value={BankDetails.accountNumber}
          />
          <BankDetail label={'IFSC'} title={'IFSC'} value={BankDetails.ifsc} />
          <BankDetail
            label={'Amount to be Paid'}
            title={'Amount to be Paid'}
            value={`₹ ${amountToPay}`}
          />
        </div>
      </div>
      <Divider style={{ margin: 0 }} />
      <div className="grid gap-4 p-8 pt-4">
        <p className="reset xl:text-md text-sm font-medium text-gray-700">
          Please enter transaction reference ID
        </p>
        <div className="grid gap-4">
          <Input
            onChange={(e) => setReferenceId(e.target.value)}
            value={referenceId}
            size={'large'}
            placeholder={'Reference ID'}
          />
          <Button
            loading={paymentLoading}
            onClick={() => handlePayment('offline', referenceId)}
            className={'!primary_button !text-white'}
            size={'large'}
            block>
            Submit Reference ID
          </Button>
          <p className="reset text-center text-sm font-medium italic">
            Your investment will be processed within 1-2 working days after
            payment.
          </p>
        </div>
      </div>
    </div>
  )
}

const BankDetail = ({
  label,
  title,
  value,
}: {
  label: string
  title: string
  value: string | number
}) => {
  const [tooltipTitle, setTooltipTitle] = React.useState('Copy')

  const handleTooltipChange = () => {
    setTooltipTitle(`${title} copied`)
    setTimeout(() => {
      setTooltipTitle('Copy')
    }, 1000)
  }

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col gap-1">
        <p className="reset xl:text-md flex items-center text-[#828F99] sm:text-base">
          {label}
        </p>
        <p className="reset xl:text-md font-medium text-[#252525] sm:text-base">
          {value}
        </p>
      </div>
      {label === 'Amount to be Paid' ? null : (
        <CopyToClipboard text={value.toString()} onCopy={handleTooltipChange}>
          <Tooltip title={tooltipTitle}>
            <Icons.Copy />
          </Tooltip>
        </CopyToClipboard>
      )}
    </div>
  )
}

export default OfflinePayment

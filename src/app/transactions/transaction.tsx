'use client'
import Image from 'next/image'
import { IInvestmentItem } from '@/types'
import { apiUri, capitalizeFirstLetter, formatCustomDate } from '@/lib/utils'
import { Tooltip } from 'antd'

export default function Transaction({
  transaction,
}: {
  transaction: IInvestmentItem
}) {
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
    } catch (error) {
      console.error('Copy to clipboard failed', error)
    }
  }

  return (
    <div
      key={transaction._id}
      className="border_gray grid grid-cols-12 items-center gap-4 rounded-xl p-4">
      <div className="col-span-full flex items-center gap-4 md:col-span-4">
        <div className="border_gray relative min-h-[3rem] min-w-[3rem] max-w-[3rem]">
          <Image
            src={`${apiUri().v1}/logo_by_startup/${transaction.startup}`}
            alt="Logo"
            layout="fill"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="flex-warp truncate text-ellipsis break-words text-xl lg:hidden">
            {capitalizeFirstLetter(transaction.companyName.split(' ')).slice(
              0,
              2,
            )}
            ...
          </h3>
          <h3 className="flex-warp hidden truncate text-ellipsis break-words text-xl lg:flex">
            {capitalizeFirstLetter(transaction.companyName.split(' ')).slice(
              0,
              3,
            )}
            ...
          </h3>
        </div>
      </div>
      <div className="col-span-full grid grid-cols-2 items-center gap-8 md:col-span-8 md:grid-cols-5">
        <div
          className="flex flex-col gap-2"
          onClick={() => copyToClipboard(transaction.type)}>
          <p className="text-sm text-neutral-400">Mode of payment</p>
          <Tooltip title={transaction.type}>
            <span className="cursor-pointer text-base font-semibold">
              {transaction.type}
            </span>
          </Tooltip>
        </div>
        <div
          className="flex flex-col gap-2"
          onClick={() => copyToClipboard(transaction.orderId)}>
          <p className="truncate text-ellipsis text-sm text-neutral-400">
            Transaction ID
          </p>
          <Tooltip title={transaction.orderId}>
            <span className="cursor-pointer truncate text-ellipsis text-base font-semibold">
              {transaction.orderId}
            </span>
          </Tooltip>
        </div>
        <div
          className="flex flex-col gap-2"
          onClick={() =>
            copyToClipboard(transaction.amountBreakdown.amount.toString())
          }>
          <p className="text-sm text-neutral-400">Amount</p>
          <Tooltip title={transaction.amountBreakdown.amount.toString()}>
            <span className="cursor-pointer text-base font-semibold">
              {transaction.amountBreakdown.amount}
            </span>
          </Tooltip>
        </div>
        <div
          className="flex flex-col gap-2"
          onClick={() =>
            copyToClipboard(formatCustomDate(transaction.dateOfpayment))
          }>
          <p className="text-sm text-neutral-400">Date</p>
          <Tooltip title={formatCustomDate(transaction.dateOfpayment)}>
            <span className="cursor-pointer text-base font-semibold">
              {formatCustomDate(transaction.dateOfpayment)}
            </span>
          </Tooltip>
        </div>
        <div
          className="flex flex-col gap-2"
          onClick={() => copyToClipboard(transaction.status)}>
          <p className="text-sm text-neutral-400">Status</p>
          <Tooltip title={transaction.status}>
            <span className="cursor-pointer text-base font-semibold text-[#16A713]">
              {transaction.status}
            </span>
          </Tooltip>
        </div>
      </div>
    </div>
  )
}

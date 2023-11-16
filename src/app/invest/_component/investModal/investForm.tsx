import { StartupData } from '@/types/_type'
import React, { useRef, useState } from 'react'
import { Button, Checkbox, Form, Input, Tooltip } from 'antd'
import { InputRef } from 'antd/lib/input'
import { useAppSelector } from '@/store/hooks'
import { cn, formatIndianValuation } from '@/lib/utils'
import { Icons } from '@/components/ui/icon'

type TransactionTypes = 'online' | 'offline' | null
type Props = {
  startup: StartupData
  amount: number
  setAmount: React.Dispatch<React.SetStateAction<number>>
  setTransactionType: React.Dispatch<React.SetStateAction<TransactionTypes>>
  setAmountToPay: React.Dispatch<React.SetStateAction<number>>
  fees: any
  paymentLoading: boolean
  handlePayment: (payment_mode: 'online') => void
}
type FieldType = {
  username?: string
  password?: string
  policy?: string
  risk_investment?: string
}

const InvestForm: React.FC<Props> = ({
  startup,
  amount,
  setAmount,
  paymentLoading,
  setTransactionType,
  setAmountToPay,
  fees,
  handlePayment,
}) => {
  const { premiumMember } = useAppSelector((state) => state.authUser)
  const inputRef = useRef<InputRef | null>(null)
  const minInvestment = startup.dealTerms.minimumInvestment
  const [policyChecked, setPolicyChecked] = useState(false)
  const [riskInvestmentChecked, setRiskInvestmentChecked] = useState(false)

  const amountToAdd = [50000, 75000, 100000]

  /**
   * Adds a specified amount to the current value and updates the amount.
   *
   * @param {number} i - The amount to be added.
   */
  const addAmount = (i: number) => {
    let currentValue: number = 0
    if (inputRef.current && inputRef.current.input) {
      currentValue = inputRef?.current?.input.valueAsNumber || 0
    }
    const newAmount = currentValue + i
    setAmount(newAmount)
  }

  /**
   * Updates the value of the `amount` state variable based on the current value of an input field.
   *
   * @function handleAmountChange
   * @returns {void}
   */
  const handleAmountChange = (): void => {
    let currentValue: number = amount
    if (inputRef.current && inputRef.current.input) {
      currentValue = Number.isNaN(inputRef?.current?.input.valueAsNumber)
        ? 0
        : inputRef?.current?.input.valueAsNumber
    }
    setAmount(currentValue)
  }

  return (
    <div className="flex flex-col gap-4  h-full p-4">
      <h6 className="p-0 m-0 text-lg font-bold text-gray-700">
        Investment amount
      </h6>
      <Input
        size="large"
        type="number"
        ref={inputRef}
        value={
          amount <= 0
            ? `min ₹ ${formatIndianValuation(
                startup.dealTerms.minimumInvestment,
              )}`
            : amount
        }
        onChange={handleAmountChange}
        placeholder={`min ₹ ${formatIndianValuation(
          startup.dealTerms.minimumInvestment,
        )}`}
        className="!py-2 placeholder-gray-300 peer-focus:text-medium font-light text-sm !border-primary"
        status={amount > minInvestment ? '' : 'warning'}
        // help={(amount>0&&amount>minInvestment)?}
      />
      <div className="flex flex-row gap-3">
        {amountToAdd.map((i) => (
          <Button
            onClick={() => addAmount(i)}
            className="!text-primary !outline-gray-300 !border-gray-300 font-normal text-sm"
            key={i}
          >
            + ₹{i}
          </Button>
        ))}
      </div>
      <div className="bg-[#FAFAFA] p-6 flex flex-col rounded-xl gap-4">
        <div className="flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <span className={'text-base font-medium text-[#444]'}>
              Subscription amount
            </span>
            <Tooltip title={'jda'}>
              <Icons.Info height={'1rem'} width={'1rem'} />
            </Tooltip>
          </div>
          <span className={'text-base font-medium text-[#444]'}>
            ₹ {fees.subscriptionAmount}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <span className={'text-base font-medium text-[#444]'}>
              Convenience Fee
            </span>
            <Tooltip title={'jda'}>
              <Icons.Info height={'1rem'} width={'1rem'} />
            </Tooltip>
            {premiumMember ? (
              <div className=" px-3 rounded-full text-md bg-yellow-400">
                MEMBER WAVIER
              </div>
            ) : null}
          </div>
          <span
            className={cn(
              'text-base font-medium text-[#444]' +
                (premiumMember && ' line-through'),
            )}
          >
            ₹ {fees.convenienceFee}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <span className={'text-base font-medium text-[#444]'}>GST</span>
            <Tooltip title={'jda'}>
              <Icons.Info height={'1rem'} width={'1rem'} />
            </Tooltip>
          </div>
          <span className={'text-base font-medium text-[#444]'}>
            ₹ {fees.gst}
          </span>
        </div>
        <div className="border-0 border-t-[0.12rem] border-dashed border-[#828F99] mt-3 mb-2" />
        <div className="flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <span className={'text-base font-medium text-primary-dark'}>
              Total Amount
            </span>
            <Tooltip title={'jda'}>
              <Icons.Info height={'1rem'} width={'1rem'} />
            </Tooltip>
          </div>
          <span className={'text-base font-medium text-[#444]'}>
            ₹ {fees.totalAmount}
          </span>
        </div>
      </div>
      <Form style={{ minWidth: '100%' }}>
        <Form.Item<FieldType> name="policy" valuePropName="checked">
          <Checkbox
            className={'text-sm font-normal'}
            onChange={(e) => setPolicyChecked(e.target.checked)}
          >
            I agree to the Terms of Use and have read and understand the Privacy
            Policy.
          </Checkbox>
        </Form.Item>
        <Form.Item<FieldType> name="risk_investment" valuePropName="checked">
          <Checkbox
            className={'text-sm font-normal'}
            onChange={(e) => setRiskInvestmentChecked(e.target.checked)}
          >
            I bear to undertake the risk in investment.
          </Checkbox>
        </Form.Item>
      </Form>

      <div className="grow"></div>

      <div className={'flex flex-col gap-4'}>
        <Button
          onClick={() => handlePayment('online')}
          loading={paymentLoading}
          disabled={
            !riskInvestmentChecked ||
            !policyChecked ||
            amount < startup.dealTerms.minimumInvestment
          }
          size={'large'}
          className={'!bg-primary !text-white !border-primary'}
          block
        >
          Pay Online
        </Button>
        <Button
          disabled={
            !riskInvestmentChecked ||
            !policyChecked ||
            amount < startup.dealTerms.minimumInvestment
          }
          size={'large'}
          className={
            '!bg-light-shadow !text-primary  !border-none !outline-none'
          }
          onClick={() => setTransactionType('offline')}
          block
        >
          Pay Offline
        </Button>
      </div>
    </div>
  )
}
export default InvestForm

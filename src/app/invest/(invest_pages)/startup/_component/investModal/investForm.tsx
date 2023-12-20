import { StartupData } from '@/types/invest'
import React, { useRef, useState } from 'react'
import { Button, Checkbox, Form, Input, Tooltip } from 'antd'
import { InputRef } from 'antd/lib/input'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { cn, formatIndianValuation } from '@/lib/utils'
import { Icons } from '@/components/icons/icon'
import { useRouter } from 'next/navigation'
import TermsModal from '@/components/invest/termsModals'
import Link from 'next/link'
import { setAmountToInvest } from '@/reducers/user/investorSlice'

type TransactionTypes = 'online' | 'offline' | null
type Props = {
  startup: StartupData
  amount: number
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
  paymentLoading,
  setTransactionType,
  setAmountToPay,
  fees,
  handlePayment,
}) => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const { premiumMember } = useAppSelector((state) => state.authUser)
  const { amountToInvest } = useAppSelector(({ investor }) => investor)
  const inputRef = useRef<InputRef | null>(null)
  const minInvestment = startup.dealTerms.minimumInvestment
  const [policyChecked, setPolicyChecked] = useState(false)
  const [riskInvestmentChecked, setRiskInvestmentChecked] = useState(false)
  const [termsModal, setTermsModal] = useState(false)
  const amountToAdd = [50000, 75000, 100000]

  /**
   * Adds a specified amount to the current value and updates the amount.
   *
   * @param {number} i - The amount to be added.
   */
  const addAmount = (i: number) => {
    let currentValue: number = amountToInvest
    if (inputRef.current && inputRef.current.input) {
      currentValue = inputRef?.current?.input.valueAsNumber || 0
    }
    const newAmount = currentValue + i
    dispatch(setAmountToInvest(newAmount))
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
    dispatch(setAmountToInvest(currentValue))
  }

  return (
    <div className="flex h-full flex-col  gap-4 py-4">
      <h6 className="m-0 p-0 px-4 text-lg font-bold text-gray-700">
        Investment amount
      </h6>
      <div className="mx-4">
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
          className="peer-focus:text-medium !border-primary !py-2 text-sm font-light text-gray-700 placeholder-gray-300 peer-active:font-bold"
          status={amount > minInvestment ? '' : 'warning'}
          // help={(amount>0&&amount>minInvestment)?}
        />
      </div>
      <div className="flex flex-row gap-3 px-4">
        {amountToAdd.map((i) => (
          <Button
            onClick={() => addAmount(i)}
            className="!border-gray-300 text-sm font-normal !text-primary !outline-gray-300"
            key={i}>
            + ₹{i}
          </Button>
        ))}
      </div>
      <div className="mx-4 flex flex-col gap-4 rounded-xl bg-[#FAFAFA] p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
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
          <div className="flex items-center gap-2">
            <span className={'text-base font-medium text-[#444]'}>
              Convenience Fee
            </span>
            <Tooltip title={'jda'}>
              <Icons.Info height={'1rem'} width={'1rem'} />
            </Tooltip>
            {premiumMember ? (
              <div className=" md:text-md rounded-full bg-yellow-400 px-3 text-xs text-black-lighter">
                MEMBER WAVIER
              </div>
            ) : null}
          </div>
          <span
            className={cn(
              'text-base font-medium text-[#444]' +
                (premiumMember && ' line-through'),
            )}>
            ₹ {fees.convenienceFee}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className={'text-base font-medium text-[#444]'}>GST</span>
            <Tooltip title={'jda'}>
              <Icons.Info height={'1rem'} width={'1rem'} />
            </Tooltip>
          </div>
          <span className={'text-base font-medium text-[#444]'}>
            ₹ {fees.gst}
          </span>
        </div>
        <div className="mb-2 mt-3 border-0 border-t-[0.12rem] border-dashed border-[#828F99]" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
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
      <Form style={{ minWidth: '100%', margin: '0 1rem' }}>
        <Form.Item<FieldType> name="policy" valuePropName="checked">
          <Checkbox
            className={'text-sm font-normal'}
            onChange={(e) => setPolicyChecked(e.target.checked)}>
            I agree to to <TermsModal type={'terms'} /> and have read and
            understand the <TermsModal type={'policy'} />.
          </Checkbox>
        </Form.Item>
        <Form.Item<FieldType> name="risk_investment" valuePropName="checked">
          <Checkbox
            className={'text-sm font-normal'}
            onChange={(e) => setRiskInvestmentChecked(e.target.checked)}>
            I bear to undertake the <TermsModal type={'risk'} />.
          </Checkbox>
        </Form.Item>
      </Form>

      <div className="grow"></div>
      <div className={'relative grid gap-4'}>
        {!premiumMember && amount > 0 && (
          <div
            className={
              'absolute -top-11 left-0 right-0 flex items-center border-none bg-[#13A772] px-8 py-1 text-white'
            }>
            <span>
              You can save ₹{fees.convenienceFee + fees.gst} with Bizdateup
              Membership
            </span>
            <div className="grow"></div>
            <Link href={'/join'} className={'font-bold text-white '}>
              JOIN NOW {'   '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="11"
                viewBox="0 0 13 11"
                fill="none">
                <path
                  d="M11.9883 5.30599L1.36328 5.30599"
                  stroke="white"
                  strokeWidth="1.0625"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.70313 1.03853L11.9885 5.30553L7.70312 9.57324"
                  stroke="white"
                  strokeWidth="1.0625"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        )}
        <div className="grid gap-4 px-4">
          <Button
            onClick={() => {
              setTransactionType('online')
              handlePayment('online')
            }}
            loading={paymentLoading}
            disabled={
              !riskInvestmentChecked ||
              !policyChecked ||
              amount < startup.dealTerms.minimumInvestment
            }
            size={'large'}
            className={'!border-primary !bg-primary !text-white'}
            block>
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
              '!border-none !bg-light-shadow  !text-primary !outline-none '
            }
            onClick={() => setTransactionType('offline')}
            block>
            Pay Offline
          </Button>
        </div>
      </div>
    </div>
  )
}
export default InvestForm

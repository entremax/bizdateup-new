'use client'
import { Progress, Space } from 'antd'
import { cn } from '@/lib/utils'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { AuthUserState, IInvestmentItem } from '@/types'
import React, { ReactElement } from 'react'
import Link from 'next/link'
import {
  useGetInvestmentDetailsQuery,
  useGetTotalInvestmentQuery,
} from '@/services/apiSlice'
import { setInvestmentDetails } from '@/reducers/user/investorSlice'

/**
 * Represents a KYC Indicator component.
 * @function KycIndicator
 * @param {Object} options - The options object.
 * @param {string} [options.className] - The class name for the component.
 * @param {boolean} [options.hidden] - Whether the component is hidden.
 * @returns {ReactElement} The KYC Indicator component.
 */
const KycIndicator = ({
  className,
  hidden,
}: {
  className?: string
  hidden?: boolean
}): ReactElement => {
  const dispatch = useAppDispatch()
  let userData: AuthUserState = useAppSelector((state) => state.authUser)
  const { user, token, kycStatus, kycCompletionPercentage, refId } = userData

  const { totalamount, investedStartups } = useAppSelector(
    ({ investor }) => investor,
  )
  const { data: amount } = useGetTotalInvestmentQuery(refId)
  const { data: investmentDetails } = useGetInvestmentDetailsQuery(refId)

  React.useEffect(() => {
    if (investmentDetails) {
      let pending = [] as IInvestmentItem[]
      let approved = [] as IInvestmentItem[]
      investmentDetails.map((item) => {
        if (item.status === 'pending') {
          pending.push(item)
        } else {
          approved.push(item)
        }
      })
      dispatch(
        setInvestmentDetails({
          totalamount: amount ? amount : 0,
          investedStartups: {
            pending,
            approved,
          },
        }),
      )
    }
  }, [investmentDetails])

  return (
    <>
      {user && kycCompletionPercentage < 100 ? (
        <div
          className={cn(
            'border_gray grid gap-2 rounded-xl bg-light-shadow p-5' +
              ' ' +
              className +
              (hidden ? 'hidden' : ''),
          )}>
          <div className={'flex'}>
            <div className="grid">
              <h5 className={'reset text-lg font-semibold text-black-lighter'}>
                Complete your KYC
              </h5>
              <p className={'!m-0 !p-0 text-sm text-typography-gray-400'}>
                To allow payments we require you to complete KYC
              </p>
            </div>
            <div className="grow"></div>
            <Space wrap>
              <Progress
                strokeLinecap="butt"
                type="dashboard"
                percent={kycCompletionPercentage}
                size={67}
                gapDegree={0}
              />
            </Space>
          </div>
          <Link
            href={'/profile/investor'}
            className={'!primary_link !my-3 !mb-0 !text-sm !text-white'}>
            Continue procedure
          </Link>
        </div>
      ) : (
        <div
          className={cn(
            'border_gray grid gap-2 divide-x-0 divide-y divide-solid divide-gray-300 rounded-xl !bg-white shadow' +
              ' ' +
              className +
              (hidden ? 'hidden' : ''),
          )}>
          <div className={'grid gap-2 px-4 py-3'}>
            <h3 className={'reset text-3xl'}>₹ {totalamount}</h3>
            <p className={'reset text-sm text-gray-400'}>
              total amount invested in {investedStartups.approved.length}{' '}
              startups
            </p>
          </div>
          <div className="grid items-center justify-center">
            <Link href={'/portfolio'} className={'py-2 text-primary'}>
              Check Portfolio
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
export default KycIndicator

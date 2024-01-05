'use client'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { IInvestmentItem } from '@/types'
import { setInvestmentDetails } from '@/reducers/user/investorSlice'
import {
  useGetInvestmentDetailsQuery,
  useGetTotalInvestmentQuery,
} from '@/services/apiSlice'
import { useAppDispatch, useAppSelector } from '@/store/hooks'

type Props = {
  token: string
  user_id: string
  className?: string
  hidden?: boolean
}

export default function CompletedProfile({
  token,
  className,
  hidden,
  user_id,
}: Props) {
  const { data: amount } = useGetTotalInvestmentQuery({ token, refId: user_id })
  const { data: investmentDetails } = useGetInvestmentDetailsQuery({
    token,
    refId: user_id,
  })
  const dispatch = useAppDispatch()
  const { totalamount, investedStartups } = useAppSelector(
    ({ investor }) => investor,
  )

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
  }, [dispatch, amount, investmentDetails])

  return (
    <>
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
            total amount invested in {investedStartups.approved.length} startups
          </p>
        </div>
        <div className="grid items-center justify-center">
          <Link href={'/portfolio'} className={'py-2 text-primary'}>
            Check Portfolio
          </Link>
        </div>
      </div>
    </>
  )
}

'use client'
import React from 'react'
import { Icons } from '@/icon'
import { Button } from 'antd'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { useAppSelector } from '@/store/hooks'

const Plans = () => {
  const { user } = useAppSelector(({ authUser }) => authUser)
  const tableData = {
    headers: ['Features', 'Free', 'Membership'],
    features: [
      {
        name: 'Molestie lobortis massa.',
        isFree: true,
        needMembership: true,
      },
      {
        name: 'Molestie lobortis massa.',
        isFree: false,
        needMembership: true,
      },
      {
        name: 'Molestie lobortis massa.',
        isFree: false,
        needMembership: true,
      },
      {
        name: 'Molestie lobortis massa.',
        isFree: false,
        needMembership: 'Up to 20 Users',
      },
    ],
  }
  return (
    <div
      className={cn(
        user?.membership?.isMember === 'no'
          ? 'border_gray hidden rounded-2xl bg-white pt-0 shadow-md md:grid'
          : 'hidden',
      )}>
      <div className="flex items-center justify-center px-4 py-4 pb-3 shadow">
        <div className={'relative grid w-20 items-end justify-center'}>
          <Icons.Premium
            className={'absolute -top-[25%] bottom-[10%] left-[34%]'}
            height={'25'}
            width={'25'}
          />
          <Image
            src={'/logo.svg'}
            height={50}
            width={60}
            alt={'BizDateup Logo'}
          />
        </div>
        <h4
          className={
            '!m-0 !p-0 text-xl font-bold text-primary-dark md:text-2xl'
          }>
          10x benefits with membership plan
        </h4>
        <div className="grow" />
        <Button
          type={'default'}
          className={
            '!hover:bg-primary rounded-lg bg-primary !px-8 text-sm font-bold !text-white !outline-none'
          }>
          Upgrade Now
        </Button>
      </div>

      <table
        className={
          '!table-fixed !divide-x-0 !divide-y !divide-solid !divide-gray-300'
        }>
        <thead>
          <tr className={'text-left'}>
            {tableData.headers.map((head, index) => (
              <th
                key={index}
                className={'px-4 py-3 text-sm !font-medium !text-gray-900 '}>
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody
          className={
            'divide !divide-x-0 !divide-y !divide-solid !divide-gray-300'
          }>
          {tableData.features.map((rowData, index) => (
            <tr key={index} className={'text-left'}>
              <td className={'px-6 py-5 text-sm font-medium text-gray-500'}>
                {rowData.name}
              </td>
              <td className={'px-6 py-5 text-sm font-medium text-gray-500'}>
                {rowData.isFree ? <Icons.Checked /> : <Icons.Minus />}
              </td>
              <td
                className={
                  "px-6 py-5 font-['Montserrat'] text-sm font-medium text-gray-700"
                }>
                {typeof rowData.needMembership === 'boolean' &&
                rowData.needMembership ? (
                  <Icons.Checked />
                ) : null}
                {typeof rowData.needMembership === 'string' &&
                  rowData.needMembership}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default Plans

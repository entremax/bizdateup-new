'use client'
import { useState } from 'react'
import { Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { cn, formatCustomDate } from '@/lib/utils'
import capitalize from 'antd/lib/_util/capitalize'
import { StartupInvestment } from '@/types'
import Download from '@/components/dashboard/startup/downloadFiles'

interface DataType {
  key: string
  investorName: string
  type: string
  createdAt: Date
  amountBreakdown: {}
  status: string
}

const columns: ColumnsType<DataType> = [
  {
    title: <span className="text-sm font-semibold text-gray-400">Sr No</span>,
    dataIndex: 'serial',
    key: 'serial',
    render: (text, record, index) => {
      const { current = 1, pageSize = 10 } = tablePagination // Assuming you have pagination settings
      return <span>{index + 1 + (current - 1) * pageSize}</span>
    },
  },
  {
    title: (
      <span className="text-sm font-semibold text-gray-400">Investor Name</span>
    ),
    dataIndex: 'name',
    key: 'name',
    render: (text, record) => (
      <div className={'flex flex-col gap-1'}>
        <span className={'font-semibold'}>{record.investorName}</span>
        {/* <span className={'text-[#666666]'}>{record.email}</span> */}
      </div>
    ),
  },

  {
    title: (
      <span className="text-sm font-semibold text-gray-400">
        Date Of Investment
      </span>
    ),
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: (text) => (
      <span className="font-semibold">{formatCustomDate(text)}</span>
    ),
  },
  {
    title: <span className="text-sm font-semibold text-gray-400">Mode</span>,
    dataIndex: 'type',
    key: 'type',
    render: (text) => <span className="font-semibold">{text}</span>,
  },
  {
    title: <span className="text-sm font-semibold text-gray-400">Status</span>,
    dataIndex: 'status',
    key: 'status',
    render: (text) => (
      <span
        className={cn(
          `${
            text != 'accepted'
              ? 'text-[#999999]'
              : 'font-semibold text-[#16A713]'
          }`,
        )}>
        {capitalize(text)}
      </span>
    ),
  },
  {
    title: (
      <span className="text-sm font-semibold text-gray-400">Total Amount</span>
    ),
    dataIndex: 'amountBreakdown',
    key: 'amountBreakdown',
    render: (text) => (
      <span className="font-semibold">
        {/* {text.amount} */}
        {parseInt(text.amount) > 0 ? `₹${text.amount}` : '-'}
      </span>
    ),
  },
]

const tablePagination = {
  current: 1,
  pageSize: 5,
  total: 0,
}

export default function Investments({
  investData,
}: {
  investData: StartupInvestment
}) {
  const [currentPage, setCurrentPage] = useState(1)

  const data: DataType[] = investData?.map((startup, index) => ({
    key: String(index),
    investorName: startup.investorName,
    type: startup.type,
    createdAt: startup.createdAt,
    amountBreakdown: startup.amountBreakdown,
    status: startup.status,
  }))

  const columnDefinitions = [
    { accessor: 'key', name: 'Key', fieldType: 'String' },
    { accessor: 'investorName', name: 'Investor Name', fieldType: 'String' },
    { accessor: 'type', name: 'Type', fieldType: 'String' },
    { accessor: 'createdAt', name: 'Date', fieldType: 'Date' },
    { accessor: 'amountBreakdown', name: 'Invest Amount', fieldType: 'Object' },
    { accessor: 'status', name: 'Status', fieldType: 'String' },
  ]

  const rowData = investData?.map((startup, index) => [
    String(index + 1),
    startup.investorName,
    startup.type,
    startup.createdAt,
    // @ts-ignore
    startup.amountBreakdown?.amount,
    startup.status,
  ])

  tablePagination.total = data?.length
  const handleTableChange = (pagination: any) => {
    setCurrentPage(pagination)
  }
  return (
    <div
      className={
        ' flex flex-col gap-3 rounded-xl p-4 shadow-sm md:mx-14 md:flex-col lg:mx-32'
      }>
      <div
        className={
          ' flex flex-row items-center justify-between md:mx-4 lg:mx-4'
        }>
        <h2>Investors</h2>
        {investData ? (
          // @ts-ignore

          <Download columnDefinitions={columnDefinitions} rowData={rowData} />
        ) : null}
      </div>
      <Table
        id={'refer-table'}
        className={'border_gray rounded-xl'}
        columns={columns}
        dataSource={data.slice(
          (currentPage - 1) * tablePagination.pageSize,
          currentPage * tablePagination.pageSize,
        )}
        pagination={{
          current: currentPage,
          pageSize: tablePagination.pageSize,
          total: tablePagination.total,
          position: ['bottomLeft'],
          onChange: (e) => handleTableChange(e),
        }}
      />
    </div>
  )
}

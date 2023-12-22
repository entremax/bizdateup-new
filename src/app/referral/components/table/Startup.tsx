'use client'
import { Button, Space, Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { useSearch } from '@/components/referral/table/context'
import { cn } from '@/lib/utils'
import capitalize from 'antd/lib/_util/capitalize'

interface DataType {
  key: string
  name: string
  email: string
  status: 'pending' | 'accepted'
  targets: number
  total_raised: number
  commission: number
  total_commission: number
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
      <span className="text-sm font-semibold text-gray-400">Startup Name</span>
    ),
    dataIndex: 'name',
    key: 'name',
    render: (text, record) => (
      <div className={'flex flex-col gap-1'}>
        <span className={'font-semibold'}>{record.name}</span>
        <span className={'text-[#666666]'}>{record.email}</span>
      </div>
    ),
  },
  {
    title: <span className="text-sm font-semibold text-gray-400">Status</span>,
    dataIndex: 'status',
    key: 'status',
    render: (text) => (
      <span
        className={cn(
          `${
            text === 'pending'
              ? 'text-[#999999]'
              : 'font-semibold text-[#16A713]'
          }`,
        )}>
        {capitalize(text)}
      </span>
    ),
  },
  {
    title: <span className="text-sm font-semibold text-gray-400">Target</span>,
    dataIndex: 'target',
    key: 'target',
    render: (text) => (
      <span className="font-semibold">
        {parseInt(text) > 0 ? `₹${text}` : '-'}
      </span>
    ),
  },
  {
    title: (
      <span className="text-sm font-semibold text-gray-400">Total Raised</span>
    ),
    dataIndex: 'total_raised',
    key: 'total_raised',
    render: (text) => (
      <span className="font-semibold">
        {parseInt(text) > 0 ? `₹${text}` : '-'}
      </span>
    ),
  },
  {
    title: (
      <span className="text-sm font-semibold text-gray-400">Commission</span>
    ),
    dataIndex: 'commission',
    key: 'commission',
    render: (text) => (
      <span className="font-semibold">
        {parseInt(text) > 0 ? `₹${text}` : '-'}
      </span>
    ),
  },
  {
    title: <span className="text-sm font-semibold text-gray-400">Action</span>,
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <Button type={'default'} className={'!text-primary !outline-primary'}>
          Notify to reinvest
        </Button>
      </Space>
    ),
  },
]

const tablePagination = {
  current: 1, // current page number
  pageSize: 10, // page size
  total: 0, // total number of items (set to 0 initially)
}

export default function Investor() {
  const { results } = useSearch()

  const data: DataType[] = results?.startups?.map((startup, index) => ({
    key: String(index), // Convert index to string for unique key
    name: startup.name,
    email: startup.email,
    status: startup.status,
    targets: startup.target,
    activeStatus: startup.activeStatus,
    total_raised: startup.totalRaised,
    commission: startup.totalCommission,
    total_commission: startup.totalConfirmedCommission,
  }))

  // Update total based on the number of items in the data
  tablePagination.total = data?.length

  return (
    <div className={'my-4 overflow-auto'}>
      <Table
        id={'refer-table'}
        className={'border_gray rounded-xl'}
        columns={columns}
        dataSource={data}
        pagination={{ ...tablePagination, position: ['bottomLeft'] }}
      />
    </div>
  )
}

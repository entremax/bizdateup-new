'use client'
import React, { useState } from 'react'
import { Button, DatePicker, Input, Select } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { useSearch } from '@/components/referral/table/context'
import { useAppDispatch } from '@/store/hooks'
import {
  setDateRangeFilter,
  setInvestmentStatus,
  setKYCFilter,
  setStartupStatusFilter,
} from '@/reducers/user/accelerator'
import {
  InviteeDetails,
  KYCFilter,
  StartupStatusFilter,
} from '@/types/referral'
import { Dayjs } from 'dayjs'

const { RangePicker } = DatePicker

type Props = {
  acceleratorData: InviteeDetails
}

type RangeValue = [Dayjs | null, Dayjs | null] | null

const SearchAndFilter: React.FC<Props> = ({ acceleratorData }) => {
  const dispatch = useAppDispatch()
  const { setSearchQuery, searchIn } = useSearch()

  const [dateRange, setDateRange] = useState<RangeValue>()

  const handleReset = () => {
    setSearchQuery('')
    dispatch(setKYCFilter('all'))
    dispatch(setInvestmentStatus('all'))
    dispatch(setStartupStatusFilter('all'))
  }

  const onRangeChange = (dates: RangeValue, dateStrings: [string, string]) => {
    setDateRange(dates)
    console.log(dates)
    console.log(dateStrings)
    dispatch(setDateRangeFilter(dateStrings))
    // Dispatch date range if needed
    // dispatch(setDateRange(dateStrings));
  }

  return (
    <div className="hidden gap-4 md:flex">
      <div className="lg:min-w-[30vw]">
        <Input
          addonBefore={<SearchOutlined />}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for keywords"
        />
      </div>
      <Select
        defaultValue="all"
        style={{ width: 220 }}
        onChange={(value: KYCFilter | StartupStatusFilter) =>
          searchIn === 'investors'
            ? dispatch(setKYCFilter(value))
            : dispatch(setStartupStatusFilter(value))
        }
        options={
          searchIn === 'investors' ? kycStatusOptions : startupStatusOptions
        }
      />
      {searchIn === 'investors' && (
        <Select
          defaultValue="all"
          style={{ width: 220 }}
          onChange={(value: 'all' | true | false) =>
            dispatch(setInvestmentStatus(value))
          }
          options={investmentStatusOptions}
        />
      )}
      <RangePicker
        renderExtraFooter={() => 'extra footer'}
        onChange={onRangeChange}
      />
      <div className="grow"></div>
      <Button type="text" onClick={handleReset}>
        Reset
      </Button>
    </div>
  )
}

const kycStatusOptions = [
  { value: 'all', label: 'Select KYC Status' },
  { value: 'done', label: 'Done' },
  { value: 'pending', label: 'Pending' },
]

const startupStatusOptions = [
  { value: 'all', label: 'Select Startup Status' },
  { value: 'live', label: 'Live' },
  { value: 'not-live', label: 'Not Live' },
]

const investmentStatusOptions = [
  { value: 'all', label: 'Select Investment Status' },
  { value: true, label: 'Invested' },
  { value: false, label: 'Not Invested' },
]

export default SearchAndFilter

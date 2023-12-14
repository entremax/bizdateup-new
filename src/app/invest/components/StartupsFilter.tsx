import { Input, Select } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { debounce } from 'lodash'
import { searchFilter } from '@/reducers/user/startupSlice'
import { StartupTypes } from '@/types/startup'
import data from '@/data'

type Props = {
  startupType: StartupTypes
}
export default function StartupFilters({ startupType }: Props) {
  const [keywords, setKeywords] = useState('')
  const [category, setCategory] = useState('All Categories')
  const [minInvestment, setMinInvestment] = useState('50000')
  const dispatch = useDispatch()

  const debouncedSearch = useCallback(
    debounce(
      (searchTerm: string) =>
        dispatch(
          searchFilter({ startupType, searchTerm, minInvestment, category }),
        ),
      500,
    ),
    [dispatch, startupType, minInvestment, category],
  )

  useEffect(() => {
    if (keywords) {
      debouncedSearch(keywords)
    }
  }, [keywords, debouncedSearch])

  return (
    <div className="flex flex-wrap  items-center justify-center  gap-4 md:justify-start">
      <div className="lg:max-w-[40vw]">
        <Input
          addonBefore={<SearchOutlined />}
          onChange={(e) => setKeywords(e.target.value)}
          placeholder={'Search for keywords'}
        />
      </div>
      <Select
        defaultValue={category}
        style={{ width: 220 }}
        onChange={(value) => setCategory(value)}
        options={data.sectorOptions.map((option, index) => ({
          key: index,
          value: option.value,
          label: option.label,
        }))}
      />
      <Select
        placeholder={'Min Investment'}
        style={{ width: 170 }}
        onChange={(value) => setMinInvestment(value)}
        options={[
          { value: '50000', label: '₹50,000' },
          { value: '100000', label: '₹1 Lakh' },
          { value: '1000000', label: '₹10 Lakh' },
          { value: '100000000', label: '₹1 crore' },
          { value: '1000000000', label: 'Above ₹1 crore  ' },
        ]}
      />
      <Select
        placeholder={'Sort By'}
        style={{ width: 170 }}
        // loading
        options={[
          { value: 'name', label: 'Startup Name' },
          { value: 'i-min-to-max', label: 'Minimum to Maximum' },
          { value: 'i-max-to-min', label: 'Maximum to Minimum' },
        ]}
      />
    </div>
  )
}

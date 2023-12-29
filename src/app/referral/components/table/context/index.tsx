'use client'
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import {
  InviteeDetails,
  ReferedInvestor,
  ReferedStartup,
} from '@/types/referral'
import { setAccelerator } from '@/reducers/user/accelerator'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { debounce } from 'lodash'

type SearchResults = {
  investors: ReferedInvestor[]
  startups: ReferedStartup[]
}

type ProviderProps = {
  children: React.ReactNode
  accelerator: InviteeDetails | undefined // Make accelerator optional
  searchParams: { [key: string]: string | string[] | undefined }
}

type SearchType = 'investors' | 'startups'

type ContextProps = {
  searchIn: SearchType
  results: SearchResults
  searchQuery: string
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>
}

const SearchContext = createContext<ContextProps | undefined>(undefined)

const SearchContextProvider: React.FC<ProviderProps> = ({
  children,
  accelerator,
  searchParams,
}) => {
  const tableType = searchParams?.tab
  const {
    kycFilter,
    investmentFilter,
    dateRangeFilter: dateRange,
    startupStatusFilter,
  } = useAppSelector(({ accelerator }) => accelerator)
  const dispatch = useAppDispatch()
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [searchIn, setSearchIn] = useState<SearchType>('investors')
  const [results, setResults] = useState<SearchResults>({
    investors: [],
    startups: [],
  })

  const debouncedSearch = useCallback(
    debounce((searchTerm: string) => {
      setResults((prevResults) => ({
        ...prevResults,
        [searchIn]: performSearch(searchTerm),
      }))
    }, 500),
    [searchQuery, searchIn, kycFilter, investmentFilter, dateRange],
  )

  useEffect(() => {
    if (accelerator) {
      setResults({
        investors: accelerator.investors || [],
        startups: accelerator.startups || [],
      })
    }
  }, [accelerator])

  useEffect(() => {
    debouncedSearch(searchQuery)
  }, [searchQuery, debouncedSearch, kycFilter, investmentFilter, dateRange])

  useEffect(() => {
    setSearchIn(
      !tableType || tableType !== 'startups' ? 'investors' : 'startups',
    )
  }, [tableType])

  useEffect(() => {
    if (accelerator) {
      dispatch(setAccelerator(accelerator))
    }
  }, [dispatch, accelerator])

  const performSearch = (query: string) => {
    if (!accelerator) {
      return []
    }
    let resultToReturn: (ReferedInvestor | ReferedStartup)[] = []
    resultToReturn = accelerator[searchIn].filter((user) => {
      const { name, email, date } = user
      const matchesName = name
        ? name.toLowerCase().includes(query.toLowerCase())
        : false
      const matchesEmail = email
        ? email.toLowerCase().includes(query.toLowerCase())
        : false
      return matchesName || matchesEmail
    })

    if (searchIn === 'investors') {
      if (kycFilter !== 'all') {
        resultToReturn = filterResultsByKycStatus(resultToReturn)
      }
    }
    if (investmentFilter !== 'all') {
      resultToReturn = filterByInvestmentStatus(resultToReturn)
    }
    if (startupStatusFilter !== 'all') {
      resultToReturn = filterByStartupByStatus(resultToReturn)
    }
    if (
      dateRange &&
      !(dateRange && dateRange[0] === '' && dateRange[1] === '')
    ) {
      resultToReturn = filterResultsByDateRange(resultToReturn)
    }
    return resultToReturn
  }

  const isDateInRange = (
    dateToCheck: string,
    startDate: string,
    endDate: string,
  ) => {
    const date = new Date(dateToCheck)
    const start = new Date(startDate)
    const end = new Date(endDate)

    return date >= start && date <= end
  }
  const filterResultsByDateRange = (
    users: (ReferedInvestor | ReferedStartup)[],
  ) => {
    return users.filter((user) =>
      user.date
        ? !dateRange || isDateInRange(user.date, dateRange[0], dateRange[1])
        : true,
    )
  }
  const filterResultsByKycStatus = (
    users: (ReferedInvestor | ReferedStartup)[],
  ) => {
    return users.filter((user) => {
      if ('status' in user) {
        return kycFilter === 'pending' && user.status === 'pending'
      }
      return (
        (kycFilter === 'done' && user.kyc) ||
        (kycFilter === 'pending' && !user.kyc)
      )
    })
  }
  const filterByInvestmentStatus = (
    users: (ReferedInvestor | ReferedStartup)[],
  ) => {
    return users.filter((user) => {
      console.log(investmentFilter)
      if ('totalInvestmentAmount' in user) {
        return investmentFilter === true
          ? user.totalInvestmentAmount > 0
          : user.totalInvestmentAmount <= 0
      }
    })
  }

  const filterByStartupByStatus = (
    users: (ReferedInvestor | ReferedStartup)[],
  ) => {
    return users.filter((user) => {
      if ('activeStatus' in user) {
        return investmentFilter === true && user.activeStatus === 'live'
      }
    })
  }

  return (
    <SearchContext.Provider
      value={{ searchIn, results, searchQuery, setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  )
}

export const useSearch = (): ContextProps => {
  const context = useContext(SearchContext)
  if (!context) {
    throw new Error('useSearch must be used within a SearchContextProvider')
  }
  return context
}

export default SearchContextProvider

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IStartupReducer, StartupTypes } from '@/types/startup'
import { StartupData } from '@/types/invest'

interface IStartupPayload {
  startup: StartupData[]
  ccps: StartupData[]
  ccds: StartupData[]
  equity: StartupData[]
}

type SearchActionPayload = {
  startupType: StartupTypes
  searchTerm: string
  category: string
  minInvestment: string
}
const initialState = {
  updates: [],
  search: [],
  startups: {
    all: [],
    startup: [],
    ccps: [],
    ccds: [],
    equity: [],
    closed: [],
  },
} as IStartupReducer

export const startupSlice = createSlice({
  name: 'startup',
  initialState,
  reducers: {
    searchFilter: (state, action: PayloadAction<SearchActionPayload>) => {
      const { searchTerm, startupType, minInvestment } = action.payload
      state.search = state.startups[startupType].filter((startup) => {
        const { companyName, shortDescription, dealTerms } = startup
        
        let matchesCompanyName = companyName
          ? companyName.toLowerCase().includes(searchTerm.toLowerCase())
          : false
        let matchesShortDescription = shortDescription
          ? shortDescription.toLowerCase().includes(searchTerm.toLowerCase())
          : false
        let matchesMinInvestment = minInvestment
          ? dealTerms.minimumInvestment >= parseInt(minInvestment)
          : true
        return matchesCompanyName || matchesShortDescription
      })
    },
    setStartups: (
      state,
      {
        payload: { startup, ccps, ccds, equity },
      }: PayloadAction<IStartupPayload>,
    ) => {
      state.startups = {
        ...state.startups,
        all: [...startup, ...ccps, ...ccds, ...equity],
        startup,
        ccps,
        ccds,
        equity,
      }
    },
    setStartupUpdates: (
      state,
      {
        payload: { updates },
      }: PayloadAction<{
        updates: any[]
      }>,
    ) => {
      state.updates = updates
    },
    setClosedDeals: (state, action) => {
      state.startups = { ...state.startups, closed: action.payload }
    },
    reset: () => initialState,
  },
})
export const { searchFilter, setStartups, setStartupUpdates } =
  startupSlice.actions

export default startupSlice.reducer

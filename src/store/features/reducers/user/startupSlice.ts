import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IStartupReducer, StartupTypes } from '@/types/startup'
import { IClosedStartupDeal, StartupData } from '@/types/invest'

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
  },
  closedDeals: [],
} as IStartupReducer

export const startupSlice = createSlice({
  name: 'startup',
  initialState,
  reducers: {
    searchFilter: (state, action: PayloadAction<SearchActionPayload>) => {
      const { searchTerm, startupType, minInvestment } = action.payload
      // @ts-ignore
      state.search = state.startups[startupType].filter((startup) => {
        const { registeredCompanyName, shortDescription, dealTerms } = startup

        let matchesCompanyName = registeredCompanyName
          ? registeredCompanyName
              .toLowerCase()
              .includes(searchTerm.toLowerCase())
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
    setClosedDeals: (state, action: { payload: IClosedStartupDeal[] }) => {
      state.closedDeals = action.payload
    },
    reset: () => initialState,
  },
})
export const { searchFilter, setStartups, setClosedDeals, setStartupUpdates } =
  startupSlice.actions

export default startupSlice.reducer

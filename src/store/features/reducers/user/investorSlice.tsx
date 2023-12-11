import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IInvestmentItem, IInvestorSlice } from '@/types'

const initialState = {
  totalamount: 0,
  investedStartups: {
    pending: [] as IInvestmentItem[],
    approved: [] as IInvestmentItem[],
  },
} as IInvestorSlice

export const investorSlice = createSlice({
  name: 'investor',
  initialState,
  reducers: {
    setInvestmentDetails: (
      state,
      {
        payload: { totalamount, investedStartups },
      }: PayloadAction<{
        totalamount: number
        investedStartups: {
          pending: IInvestmentItem[]
          approved: IInvestmentItem[]
        }
      }>,
    ) => {
      state.totalamount = totalamount
      state.investedStartups = investedStartups
    },
    reset: () => initialState,
  },
})
export const { setInvestmentDetails } = investorSlice.actions

export default investorSlice.reducer

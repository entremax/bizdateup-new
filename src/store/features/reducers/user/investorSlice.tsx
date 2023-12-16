import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IInvestmentItem, IInvestorSlice } from '@/types'

const initialState = {
  amountToInvest: 0,
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
    setAmountToInvest: (state, action) => {
      state.amountToInvest = action.payload
    },
    reset: () => initialState,
  },
})
export const { setInvestmentDetails, setAmountToInvest } = investorSlice.actions

export default investorSlice.reducer

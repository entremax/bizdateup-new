import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AcceleratorInitialState, InviteeDetails } from '@/types/referral'

const initialState = {
  accelerator: null,
  kycFilter: 'all',
  investmentFilter: 'all',
  startupStatusFilter: 'all',
} as AcceleratorInitialState

export const acceleratorSlice = createSlice({
  name: 'accelerator',
  initialState,
  reducers: {
    setAccelerator: (state, action: PayloadAction<InviteeDetails>) => {
      const { investors, withdraws, startups } = action.payload

      state.accelerator = { ...action.payload }
      state.investorCommission = {
        pending: investors.reduce(
          (sum, item) => sum + (item.totalCommission || 0),
          0,
        ),
        confirmed: investors.reduce(
          (sum, item) => sum + (item.totalConfirmedCommission || 0),
          0,
        ),
      }
      state.startupCommission = {
        pending: startups.reduce(
          (sum, item) => sum + (item.totalCommission || 0),
          0,
        ),
        confirmed: startups.reduce(
          (sum, item) => sum + (item.totalConfirmedCommission || 0),
          0,
        ),
      }
      state.totalWithdrawals = withdraws?.reduce((acc, entry) => {
        acc[entry.status] = (acc[entry.status] || 0) + parseFloat(entry.amount)
        return acc
      }, {})
    },
    setRedeemable: (state) => {
      state.totalCommission = parseFloat(
        state.investorCommission.confirmed + state.startupCommission.confirmed,
      ).toFixed(2)
      state.redeemable = (
        parseFloat(state.investorCommission.confirmed.toString()) +
        parseFloat(state.startupCommission.confirmed.toString()) -
        (parseFloat(
          state.totalWithdrawals.approve ? state.totalWithdrawals.approve : '0',
        ) +
          parseFloat(
            state.totalWithdrawals.pending
              ? state.totalWithdrawals.pending
              : '0',
          ))
      ).toFixed(2)
    },
    searchInvestorsData: (state, action) => {},
    setKYCFilter: (state, action) => {
      state.kycFilter = action.payload
    },
    setInvestmentStatus: (state, action) => {
      state.investmentFilter = action.payload
    },
    setStartupStatusFilter: (state, action) => {
      state.startupStatusFilter = action.payload
    },
    setDateRangeFilter: (state, action) => {
      state.dateRangeFilter = action.payload
    },
  },
})

export const {
  setAccelerator,
  setRedeemable,
  setKYCFilter,
  setInvestmentStatus,
  setStartupStatusFilter,
  setDateRangeFilter,
} = acceleratorSlice.actions
export default acceleratorSlice.reducer

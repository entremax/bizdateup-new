import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  InvestorUserPayload,
  InvestorUserState,
  KYCStatus,
  KYCStatusArray,
  StartupUserPayload,
  StartupUserState,
} from '@/types'

const initialState = {
  token: null,
  userId: null,
  refId: null,
  temp_auth_medium: null,
  user: null,
  kycStatus: [] as KYCStatusArray,
  isVerified: false,
  kycCompletionPercentage: 0,
  riskAccepted: false,
  premiumMember: false,
} as InvestorUserState | StartupUserState

export const authUser = createSlice({
  name: 'authUser',
  initialState,
  reducers: {
    temp_values(state, action) {
      state.temp_auth_medium = action.payload
    },
    setInvestorId(state, action) {
      state.userId = action.payload
    },
    reset: () => initialState,
    setUser: (state, { payload }: PayloadAction<any>) => {
      state.token = payload.token
      state.user = payload.userData
      state.refId = payload.refId

      if (payload.role === 'investor') {
        state.role = 'investor'
        const { kycStatus, premiumMember } = payload
        const pendingStatuses: KYCStatus[] = []
        const totalStatuses: KYCStatus[] = [
          KYCStatus.profile,
          KYCStatus.pan,
          KYCStatus.aadhar,
          KYCStatus.bank,
          KYCStatus.other,
        ]

        totalStatuses.forEach((status) => {
          if (kycStatus && kycStatus.includes(status)) {
            pendingStatuses.push(status)
          }
        })
        state.kycStatus = kycStatus
        state.premiumMember = premiumMember
        state.kycCompletionPercentage =
          ((totalStatuses.length - pendingStatuses.length) /
            totalStatuses.length) *
          100
      }
      if (payload.role === 'startup') {
        state.role = 'startup'
      }
    },
    setStartup: (state) => {},
    setVerify(state, { payload }: PayloadAction<boolean>) {
      state.isVerified = payload
    },
    setRiskAccept(state) {
      state.riskAccepted = true
    },
  },
})
export const { setRiskAccept, temp_values, reset, setInvestorId, setUser } =
  authUser.actions

export default authUser.reducer

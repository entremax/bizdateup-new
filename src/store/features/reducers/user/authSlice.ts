import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  DataInner,
  InvestorUserState,
  KYCStatus,
  KYCStatusArray,
  StartupUserState,
} from '@/types'
import { StartupData } from '@/types/invest'

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
    setUser: (
      state,
      {
        payload: { token, userData, refId, kycStatus, premiumMember, role },
      }: PayloadAction<{
        token: string
        userData: DataInner | StartupData
        refId: string
        kycStatus: KYCStatusArray
        premiumMember: boolean
        role: 'investor' | 'startup'
      }>,
    ) => {
      state.token = token
      state.user = userData
      state.refId = refId
      state.role = role
      if (state.role === 'investor') {
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

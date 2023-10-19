import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {AuthUserState, DataInner, KYCStatusArray} from '@/types';


const initialState = {
  token: null,
  investorUserId: null,
  refId: null,
  temp_auth_medium: null,
  user: null,
  kycStatus: [] as KYCStatusArray,
  isVerified: false,
  kycCompletionPercentage:0
} as AuthUserState

export const authUser = createSlice({
  name: 'authUser',
  initialState,
  reducers: {
    temp_values(state, action) {
      state.temp_auth_medium = action.payload;
    },
    setInvestorId(state, action) {
      state.investorUserId = action.payload;
    },
    reset: () => initialState,
    setUser: (
      state,
      {
        payload: { token, userData, refId, kycStatus },
      }: PayloadAction<{
        token: string;
        userData: DataInner;
        refId: string;
        kycStatus: KYCStatusArray;
      }>
    ) => {
      state.token = token;
      state.user = userData;
      state.refId = refId;
      state.kycStatus = kycStatus;
    },
    setVerify(state, { payload }: PayloadAction<boolean>) {
      state.isVerified = payload;
    },
    setKycCompletionPercentage(state,{payload}: PayloadAction<number>){
      state.kycCompletionPercentage=payload
    }
  },
});
export const { temp_values, setVerify, reset, setInvestorId, setUser ,setKycCompletionPercentage} =
  authUser.actions;

export default authUser.reducer;

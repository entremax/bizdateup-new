import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {AuthUserState, DataInner, KYCStatusArray} from '@/types';


const initialState: AuthUserState = {
  token: '',
  investorUserId: '',
  refId: '',
  temp_auth_medium: '',
  user: {} as DataInner,
  kycStatus: [] as KYCStatusArray,
  isVerified: false,
  kycCompletionPercentage:0
};

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
    logoutUser: () => initialState,
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
export const { temp_values, setVerify, logoutUser, setInvestorId, setUser ,setKycCompletionPercentage} =
  authUser.actions;

export default authUser.reducer;

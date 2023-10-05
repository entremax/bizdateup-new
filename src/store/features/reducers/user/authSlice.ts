import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {DataInner} from "@/types";


const initialState = {
  temp_auth_medium: '',
  user: {} as DataInner,
  kycStatus: [] as ['profile', 'pan', 'aadhar', 'bank', 'other'] | []
} as any

export const authUser = createSlice({
  name: 'authUser',
  initialState,
  reducers: {
    temp_values(state, action) {
      state.temp_auth_medium = action.payload
    },
    setInvestorId(state, action) {
      state.investorUserId = action.payload
    },
    logoutUser: () => initialState,
    setUser: (
      state,
      {
        payload: {
          token,
          userData,
          refId,
          kycStatus
        }
      }: PayloadAction<{
        token: string,
        userData: DataInner,
        refId: string,
        kycStatus?: ['profile' | 'pan' | 'aadhar' | 'bank' | 'other'] | []
      }>) => {
      state.token = token;
      state.user = userData;
      state.refId = refId;
      state.kycStatus = kycStatus
    },
    setVerify(state, {payload}: PayloadAction<boolean>) {
      state.isVerified = payload
    },
    
  }
});
// Action creators are generated for each case reducer function
export const {temp_values, setVerify, logoutUser, setInvestorId, setUser} = authUser.actions;

export default authUser.reducer;

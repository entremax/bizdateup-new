import {createSlice} from '@reduxjs/toolkit';


const initialState = {
  temp_email: '',
  user: 'guest user',
  token: '',
  userType: '',
  userToken: '',
  isUserAuthenticated: false,
  isVerified: false
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
    loginUser(state, action) {
      state.user = action.payload.id;
      state.userType = action.payload.userType;
      state.userToken = action.payload.userToken;
      state.isUserAuthenticated = true;
    },
    setVerify(state, action) {
      state.isVerified = action.payload.isVerified
    },
    
  }
});
// Action creators are generated for each case reducer function
export const {temp_values, setVerify, loginUser, logoutUser, setInvestorId} = authUser.actions;

export default authUser.reducer;

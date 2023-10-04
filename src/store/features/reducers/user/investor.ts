import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tokenInvestor: '',
  authDataInvestor: {},
  authRefInvestor: '',
} as any;

export const investorSlice = createSlice({
  name: 'authUser',
  initialState,
  reducers: {
    setInvestor(state, action) {
      state.tokenInvestor = action.payload.id;
      state.authDataInvestor = action.payload.User_Type;
      state.authRefInvestor = action.payload.accessToken;
    },
  },
});
// Action creators are generated for each case reducer function
export const { setInvestor } = investorSlice.actions;

export default investorSlice.reducer;

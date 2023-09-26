import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  temp_email: '',
  user: 'guest user',
  token: '',
  userType: '',
  userToken: '',
  isUserAuthenticated: false,
};
export const authUser = createSlice({
  name: 'authUser',
  initialState,
  reducers: {
    tempEmail: (state, action) => {
      state.temp_email = action.payload
    },
    logoutUser: () => initialState,
    loginUser: (state, action) => {
      state.user = action.payload.id;
      state.userType = action.payload.User_Type;
      state.userToken = action.payload.accessToken;
      state.isUserAuthenticated = true;
    },
  },
});
// Action creators are generated for each case reducer function
export const {tempEmail, loginUser, logoutUser} = authUser.actions;

export default authUser.reducer;

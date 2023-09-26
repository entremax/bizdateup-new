import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  show: true,
};

export const sidebar = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggle: (state) => {
      state.show = !state.show;
    },
  },
});

export const { toggle } = sidebar.actions;
export default sidebar.reducer;

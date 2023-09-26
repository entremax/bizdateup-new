import { PayloadAction, createSlice } from '@reduxjs/toolkit';
interface IChatMessage {
  user: string;
  ai: string;
}
const initialState = {
  query: '',
  chats: [] as IChatMessage[],
};

export const chat = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setChats: (state, action: PayloadAction<IChatMessage[]>) => {
      state.chats = action.payload;
    },
  },
});

export const { setQuery, setChats } = chat.actions;
export default chat.reducer;

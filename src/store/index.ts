import authUser from './features/authSlice';
import chat from './features/chatSlice';
import sidebar from './features/sidebar';
import {configureStore} from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    sidebar,
    chat,
    authUser,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store
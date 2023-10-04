import investorSlice from './features/reducers/user/investor';
import authUserSlice from './features/reducers/user/authSlice';
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { api } from '@/store/features/apiSlice';
import { setupListeners } from '@reduxjs/toolkit/query';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};
const authUser = persistReducer(persistConfig, authUserSlice);

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    authUser,
    investor: investorSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
setupListeners(store.dispatch);

const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store, persistor };

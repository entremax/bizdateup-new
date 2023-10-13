import authUserSlice from './features/reducers/user/authSlice';
import Notify from './features/reducers/others/notificationSlice'
import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {api} from '@/store/features/services/apiSlice';
import {setupListeners} from '@reduxjs/toolkit/query';

/**
 * Configuration options for data persistence.
 */
const persistConfig= {
  key: 'root',
  version: 1,
  storage,
};

const authUser = persistReducer(persistConfig, authUserSlice);

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    authUser,
    Notify
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type ReduxThunkAction<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>
setupListeners(store.dispatch);

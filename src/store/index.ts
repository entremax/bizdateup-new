// noinspection JSUnusedGlobalSymbols

import authUserSlice from './features/reducers/user/authSlice'
import Notify from './features/reducers/others/notificationSlice'
import investor from './features/reducers/user/investorSlice'
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { api } from '@/store/features/services/apiSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { NextApi } from '@/services/NextApiSlice'
import { paymentApi } from '@/services/paymentSlice'

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [NextApi.reducerPath]: NextApi.reducer,
    [paymentApi.reducerPath]: paymentApi.reducer,
    authUser: authUserSlice,
    investor,
    Notify,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      api.middleware,
      NextApi.middleware,
      paymentApi.middleware,
    ),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type ReduxThunkAction<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>
setupListeners(store.dispatch)

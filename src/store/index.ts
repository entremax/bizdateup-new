// noinspection JSUnusedGlobalSymbols

import authUserSlice from '@/reducers/user/authSlice'
import Notify from '@/reducers/others/notificationSlice'
import investor from '@/reducers/user/investorSlice'
import accelerator from '@/reducers/user/accelerator'
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { api } from '@/services/apiSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { NextApi } from '@/services/NextApiSlice'
import { paymentApi } from '@/services/paymentSlice'
import { startupsApiSlice } from '@/services/startupApiSlice'
import startupSlice from '@/reducers/user/startupSlice'

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [NextApi.reducerPath]: NextApi.reducer,
    [paymentApi.reducerPath]: paymentApi.reducer,
    [startupsApiSlice.reducerPath]: startupsApiSlice.reducer,
    authUser: authUserSlice,
    startup: startupSlice,
    investor,
    accelerator,
    Notify,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      api.middleware,
      NextApi.middleware,
      paymentApi.middleware,
      startupsApiSlice.middleware,
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

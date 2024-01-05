import { createSlice } from '@reduxjs/toolkit'
import { StartupUserState } from '@/types'

const initialState = {
  token: null,
  startup: null,
  role: 'startup',
} as StartupUserState

export const authStartup = createSlice({
  name: 'authStartup',
  initialState,
  reducers: {
    setStartup: (state, action) => {},
  },
})

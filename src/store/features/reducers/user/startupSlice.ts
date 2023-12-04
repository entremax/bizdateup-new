import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { StartupUpdate } from '@/types/startup'

const initialState = {
  updates: [],
} as { updates: StartupUpdate[] }

export const startupSlice = createSlice({
  name: 'startup',
  initialState,
  reducers: {
    setStartupUpdates: (
      state,
      {
        payload: { updates },
      }: PayloadAction<{
        updates: any[]
      }>,
    ) => {
      state.updates = updates
    },
    reset: () => initialState,
  },
})
export const { setStartupUpdates } = startupSlice.actions

export default startupSlice.reducer

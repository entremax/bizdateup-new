import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { NotificationType } from '@/types'

type IStatus = { status: 'canceled' | 'success' | 'failed'; startup_id: string }

interface IInitialState {
  type: NotificationType | null
  message: string | null
  description?: string | null
  payment?: IStatus | null
}

const initialState: IInitialState = {
  type: null,
  message: null,
  description: null,
  payment: null,
}

export const Notify = createSlice({
  name: 'notify',
  initialState,
  reducers: {
    setNotification: (
      state,
      {
        payload: { type, message, description },
      }: PayloadAction<{
        type: NotificationType
        message: string
        description?: string
      }>,
    ) => {
      state.type = type
      state.message = message
      state.description = description
    },
    destroyNotification: () => initialState,
    showModal: (state, { payload }: PayloadAction<IStatus>) => {
      state.payment = payload
    },
  },
})

export const { setNotification, destroyNotification, showModal } =
  Notify.actions
export default Notify.reducer

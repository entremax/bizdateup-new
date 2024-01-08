import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { NotificationType } from '@/types'

type IStatus = { status: 'canceled' | 'success' | 'failed'; startup_id: string }

interface IInitialState {
  type: NotificationType | null
  message: string | null
  description?: string | null
  payment?: IStatus | null
  referer?: string | null
}

const initialState: IInitialState = {
  type: null,
  message: null,
  description: null,
  payment: null,
  referer: null,
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
    destroyNotification: (state) => {
      state.type = null
      state.message = null
      state.description = null
      state.payment = null
    },
    showModal: (state, { payload }: PayloadAction<IStatus>) => {
      state.payment = payload
    },
    setReferer: (state, { payload }: PayloadAction<string | null>) => {
      let pathnameInfo: string | null = null
      console.log('Payload', payload)
      if (payload) {
        pathnameInfo = new URL(payload)?.pathname
      }
      console.log('PathName', pathnameInfo)
      state.referer = pathnameInfo
    },
  },
})

export const { setNotification, setReferer, destroyNotification, showModal } =
  Notify.actions
export default Notify.reducer

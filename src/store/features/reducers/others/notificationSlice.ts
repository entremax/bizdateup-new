import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {NotificationType} from "@/types";
interface IInitialState {
  type: NotificationType|null;
  message: string|null;
  description?: string|null;
}
const initialState = {
  type: null,
  message: null,
  description: null,
} as IInitialState;

export const Notify = createSlice({
  name: 'notify',
  initialState,
  reducers: {
    setNotification: (
      state,
      {
        payload: { type, message,
        description},
      }: PayloadAction<{
        type: NotificationType;
        message: string;
        description?:string
      }>
    ) => {
      state.type = type;
      state.message = message;
      state.description=description
    },
    destroyNotification: () => initialState,
  },
});
export const { setNotification, destroyNotification } = Notify.actions;

export default Notify.reducer;

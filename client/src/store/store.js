import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slice/userSlice'
import messageReducer from './slice/message/message.slice.js'

export const store = configureStore({
  reducer: {
    user: userSlice,
    message: messageReducer
  },
})

import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice";
import messageReducer from "./slice/message/message.slice.js";
import socketReducer from "./slice/socket/socket.slice.js";

export const store = configureStore({
  reducer: {
    user: userSlice,
    message: messageReducer,
    socket: socketReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredPaths: ["socket.socket"]
      },
    }),
});

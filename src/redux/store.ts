import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlices";
import analyticsReducer from "./slices/analyticsSlice";

export const store = configureStore({
  reducer: {
    users: userReducer,
    analytics: analyticsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
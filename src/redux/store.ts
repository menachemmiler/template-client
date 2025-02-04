import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export default store;

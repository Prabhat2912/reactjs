import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../features/Slice";
export const data = configureStore({
  reducer: dataReducer,
});

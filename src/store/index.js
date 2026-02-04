import { configureStore } from "@reduxjs/toolkit";
// Import your slices here later
import uiReducer from "./slices/uiSlice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
  },
});

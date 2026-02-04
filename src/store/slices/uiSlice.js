import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { 
    language: "en",
    isLoggedIn: false 
  },
  reducers: {
    setLanguage: (state, action) => { state.language = action.payload; },
    toggleAuth: (state) => { state.isLoggedIn = !state.isLoggedIn; },
  },
});

export const { setLanguage, toggleAuth } = uiSlice.actions;
export default uiSlice.reducer;

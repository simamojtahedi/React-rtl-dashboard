import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const themeMode = localStorage.getItem("theme");

export interface InitialState {
  theme: string;
}
const initialState: InitialState = {
  theme: themeMode ? themeMode : "light",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    switchTheme: (state, action: PayloadAction<string>) => {
      localStorage.setItem("theme", action.payload);
      state.theme = action.payload;
    },
  },
});

// Part 4
export const { switchTheme } = appSlice.actions;
export default appSlice.reducer;

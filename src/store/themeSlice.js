import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    longBar: false,
    enabled: false,
    registerButton: false,
    
  },
  reducers: {
    setLongNavBar: (state, action) => {
      state.longBar = action.payload;
    },
    setEnabled: (state, action) => {
      state.enabled = action.payload;
    },
    setRegisterButton: (state, action) => {
      state.registerButton = action.payload;
    },
  },
});

export default themeSlice.reducer;
export const { setLongNavBar, setEnabled, setRegisterButton } =
  themeSlice.actions;

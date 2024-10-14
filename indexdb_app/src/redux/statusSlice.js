import { createSlice } from "@reduxjs/toolkit";

const statusSlice = createSlice({
    name: 'online',
    initialState: {
      isOnline: navigator.onLine,
    },
    reducers: {
      setOnlineStatus: (state, action) => {
        state.isOnline = action.payload;
      },
    },
  });

export const { setOnlineStatus } = statusSlice.actions;
export default statusSlice.reducer;
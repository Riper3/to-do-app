import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: ''
}

const tokenSlice = createSlice({
  name: 'tokenSlice',
  initialState,
  reducers: {
    storeToken: (state, action) => {
      state.token = action.payload;
    }
  }
})

export const { storeToken } = tokenSlice.actions;
export default tokenSlice.reducer;
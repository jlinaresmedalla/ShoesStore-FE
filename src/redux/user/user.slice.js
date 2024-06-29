import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo: 0,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    saveUserInfo: (state, actions) => {
      state.userInfo = actions.payload;
    },
  },
});

export const { saveUserInfo } = userSlice.actions;

export default userSlice.reducer;

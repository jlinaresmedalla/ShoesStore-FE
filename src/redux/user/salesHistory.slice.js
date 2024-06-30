import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  salesHistory: [],
};

export const salesHistorySlice = createSlice({
  name: 'salesHistory',
  initialState,
  reducers: {
    addSale: (state, actions) => {
      state.salesHistory?.push(actions.payload);
    },
  },
});

export const { addSale } = salesHistorySlice.actions;

export default salesHistorySlice.reducer;

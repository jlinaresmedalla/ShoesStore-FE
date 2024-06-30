import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, actions) => {
      state.cart.push(actions.payload);
    },
  },
});

export const { addCart } = cartSlice.actions;

export default cartSlice.reducer;

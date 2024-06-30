import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './user/cart.slice';
import saleHistoryReducer from './user/salesHistory.slice';
import userReducer from './user/user.slice';

export const store = configureStore({
  reducer: {
    userState: userReducer,
    cartState: cartReducer,
    saleHistoryState: saleHistoryReducer,
  },
});

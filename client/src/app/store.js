import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import timeblockReducer, { timeblockSlice } from '../features/timeblocks/timeblockSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    timeblocks: timeblockReducer
  },
});

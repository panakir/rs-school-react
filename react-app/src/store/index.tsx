import { configureStore } from '@reduxjs/toolkit';
import searchValueReducer from './searchValueSlice/searchValueSlice';

export const store = configureStore({
  reducer: {
    searchValue: searchValueReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

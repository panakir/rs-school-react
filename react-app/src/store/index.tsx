import { configureStore } from '@reduxjs/toolkit';
import searchValueReducer from './searchValueSlice/searchValueSlice';
import loadingReducer from './isLoadingSlice/isLoadingSlice';

export const store = configureStore({
  reducer: {
    searchValue: searchValueReducer,
    isLoading: loadingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

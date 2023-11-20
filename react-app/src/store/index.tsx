import { configureStore } from '@reduxjs/toolkit';
import searchValueReducer from './searchValueSlice/searchValueSlice';
import loadingReducer from './isLoadingSlice/isLoadingSlice';
import amountItemsReducer from './amountItemsPerPage/amountItemsPerPage';

export const store = configureStore({
  reducer: {
    searchValue: searchValueReducer,
    isLoading: loadingReducer,
    amountItemsOnPage: amountItemsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

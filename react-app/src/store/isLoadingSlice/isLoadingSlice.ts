import { createSlice } from '@reduxjs/toolkit';

interface LoadingState {
  isLoading: boolean;
}

const initialState: LoadingState = {
  isLoading: false,
};

export const isLoadingSlice = createSlice({
  name: 'Loading',
  initialState,
  reducers: {
    setLoadingOnPage: (state, { payload }) => {
      state.isLoading = payload;
    },
  },
});

export const { setLoadingOnPage } = isLoadingSlice.actions;
export default isLoadingSlice.reducer;

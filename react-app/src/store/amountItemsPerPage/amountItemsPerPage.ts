import { createSlice } from '@reduxjs/toolkit';

interface AmountItemsState {
  amount: number;
}

const initialState: AmountItemsState = {
  amount: 10,
};

export const amountItemsSlice = createSlice({
  name: 'amountItemsOnPage',
  initialState,
  reducers: {
    setAmountItems: (state, { payload }) => {
      state.amount = payload;
    },
  },
});

export const { setAmountItems } = amountItemsSlice.actions;
export default amountItemsSlice.reducer;

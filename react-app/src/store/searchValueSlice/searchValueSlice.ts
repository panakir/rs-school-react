import { createSlice } from '@reduxjs/toolkit';

interface SearchValueState {
  searchValue: string;
}

const initialState: SearchValueState = {
  searchValue: localStorage.getItem('searchRequest') || '',
};

const searchValueSlice = createSlice({
  name: 'searchValue',
  initialState,
  reducers: {
    setSearchValue: (state, { payload }) => {
      state.searchValue = payload;
    },
  },
});

export const { setSearchValue } = searchValueSlice.actions;
export default searchValueSlice.reducer;

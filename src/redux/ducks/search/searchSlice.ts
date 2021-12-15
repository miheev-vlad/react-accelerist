import { createSlice } from '@reduxjs/toolkit';

export type SearchStateProps = {
  showAdvancedSearch: boolean;
};

const initialState: SearchStateProps = {
  showAdvancedSearch: false,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    toggleShowAdvancedSearch: state => {
      state.showAdvancedSearch = !state.showAdvancedSearch;
    },
  },
});

export const { toggleShowAdvancedSearch } = searchSlice.actions;

export default searchSlice.reducer;

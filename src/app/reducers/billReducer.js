import { createSlice } from "@reduxjs/toolkit";

// create metri slice
const billSlice = createSlice({
  name: "metricSlice",
  initialState: {
    searchedProducts: [],
  },
  reducers: {
    updateSearchedProducts: (state, { payload }) => ({
      ...state,
      searchedProducts: [...payload],
    }),
  },
});

export const {
  updateSearchedProducts: updateSearchedProductAction,
} = billSlice.actions;

export default billSlice.reducer;

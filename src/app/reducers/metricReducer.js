import { createSlice } from "@reduxjs/toolkit";

// create metri slice
const metricSlice = createSlice({
  name: "metricSlice",
  initialState: [],
  reducers: {
    getAllMetrics: (state, { payload }) => ({
      ...state,
      metrics: [...payload],
    }),
  },
});

export const { getAllMetrics: getAllMetricsAction } = metricSlice.actions;

export default metricSlice.reducer;

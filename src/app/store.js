import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import productReducer from "./reducers/productRecuder";
import metricRecuder from "./reducers/metricReducer";
import billReducer from "./reducers/billReducer";
import logger from "redux-logger";

const reducers = {
  product: productReducer,
  metric: metricRecuder,
  bill: billReducer,
};
export default configureStore({
  reducer: { ...reducers },
  middleware: [...getDefaultMiddleware(), logger],
  devTools: process.env.NODE_ENV !== "production",
});

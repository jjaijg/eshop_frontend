import axios from "../axios";
import { getAllMetricsAction } from "../reducers/metricReducer";

export const getAllMetrics = () => (dispatch) => {
  axios
    .get(`metrics`)
    .then((res) => dispatch(getAllMetricsAction(res.data)))
    .catch((err) => console.log(err));
};

import axios from "../axios";
import { getAllMetricsAction } from "../reducers/metricReducer";

export const getAllMetrics = () => (dispatch) => {
  axios
    .get(`metrics`)
    .then((res) => dispatch(getAllMetricsAction(res.data._embedded.metrics)))
    .catch((err) => console.log(err));
};

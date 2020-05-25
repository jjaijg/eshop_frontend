import axios from "../axios";
import { getAllMetricsAction } from "../reducers/metricReducer";

export const getAllMetrics = () => (dispatch) => {
  axios
    .get(`metrics`)
    .then((res) => dispatch(getAllMetricsAction(res.data._embedded.metrics)))
    .catch((err) => console.log(err));
};

// get metric detail for a particular product
export const getMetric = async (product) => {
  // get relative url
  const metric_url = product._links.metric.href.split("/");
  const rel_url = metric_url.splice(4, metric_url.length).join("/");
  return await axios.get(`/${rel_url}`);
};

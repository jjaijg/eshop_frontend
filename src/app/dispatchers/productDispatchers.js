import axios from "../axios";

import {
  productsLoadingAction,
  productPaginationAction,
  getProductsAction,
  deleteProductAction,
  showEditProductModalAction,
  isEditProductAction,
  selectedProductAction,
  createProductAction,
} from "../reducers/productRecuder";

// get all products
export const getAllProducts = (params = {}) => (dispatch) => {
  const { current, pageSize } = params.pagination;
  const { sortField, sortOrder } = params;
  dispatch(productsLoadingAction(true));
  axios
    .get(`products`, {
      params: {
        projection: "productList",
        page: current - 1,
        size: pageSize,
      },
    })
    .then((res) => {
      // set pagination
      dispatch(
        productPaginationAction({
          total: 100,
          ...params.pagination,
        })
      );
      // set products
      dispatch(getProductsAction(res.data._embedded.products));
      // set loading
      dispatch(productsLoadingAction(false));
    })
    .catch((err) => console.log(err));
};

// create new product
export const addProduct = (product) => (dispatch) => {
  dispatch(productsLoadingAction(true));
  axios.post(`products`, product).then((res) => {
    dispatch(createProductAction(res.data));
    dispatch(productsLoadingAction(false));
  });
};

// Edit a product

// Delete a product
export const deleteProduct = (id) => (dispatch) => {
  dispatch(productsLoadingAction(true));
  axios
    .delete(`/products/${id}`)
    .then((res) => {
      dispatch(deleteProductAction(id));
      dispatch(selectedProductAction({}));
      dispatch(showEditProductModalAction(false));
      dispatch(productsLoadingAction(false));
      dispatch(isEditProductAction(false));
    })
    .catch((err) => console.log(err));
};

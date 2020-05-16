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
      // get paginations and products
      const { products } = res.data._embedded
      const { totalElements } = res.data.page
      // set pagination
      dispatch(
        productPaginationAction({
          total: totalElements,
          ...params.pagination,
        })
      );
      // set products
      dispatch(getProductsAction(products));
      // set loading
      dispatch(productsLoadingAction(false));
    })
    .catch((err) => console.log(err));
};

// create new product
export const addProduct = (product) => (dispatch) => {
  axios.post(`products`, product).then((res) => {
    dispatch(createProductAction(res.data));
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

import axios from "../axios";
import { message, notification } from "antd";

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
      const { products } = res.data._embedded;
      const { totalElements } = res.data.page;
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
    .catch((err) => {
      dispatch(productsLoadingAction(false));
      notification.error({
        message: "Error",
        description: `Error in getting products, Error: ${err.message}`,
      });
    });
};

// create new product
export const addProduct = (product) => async (dispatch) => {
  dispatch(productsLoadingAction(true));
  await axios
    .post(`products`, product)
    .then((res) => {
      dispatch(createProductAction(res.data));
      dispatch(productsLoadingAction(false));

      message.success(`${product.tamilName} added to list successfully!`);
    })
    .catch((err) => {
      // console.log(err.toJSON());
      dispatch(productsLoadingAction(false));
      notification.error({
        message: "Error",
        description: `Error in adding product, Error: ${err.message}`,
      });
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

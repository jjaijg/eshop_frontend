import axios from "../axios";
import { message, notification } from "antd";

import {
  productsLoadingAction,
  productPaginationAction,
  getProductsAction,
  deleteProductAction,
  showEditProductModalAction,
  isEditProductAction,
  isAddProductAction,
  isDeleteProductAction,
  isEditingProductAction,
  selectedProductAction,
  createProductAction,
  editProductAction,
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
  dispatch(isAddProductAction(true));
  await axios
    .post(`products`, product)
    .then((res) => {
      dispatch(createProductAction(res.data));
      dispatch(isAddProductAction(false));

      message.success(`${product.tamilName} added to list successfully!`);
    })
    .catch((err) => {
      // console.log(err.toJSON());
      dispatch(isAddProductAction(false));
      notification.error({
        message: "Error",
        description: `Error in adding product, Error: ${err.message}`,
      });
    });
};

// Edit a product
export const editProduct = ({ id, ...product }) => (dispatch) => {
  dispatch(isEditingProductAction(true));
  axios
    .put(`/products/${id}`, product)
    .then(() => {
      axios
        .get(`/products/${id}?projection=productList`)
        .then((res) => {
          dispatch(editProductAction(res.data));
          dispatch(selectedProductAction(res.data));
          dispatch(isEditingProductAction(false));
        })
        .catch((err) => {
          dispatch(isEditingProductAction(false));

          console.log(err);
        });
    })
    .catch((err) => {
      dispatch(isEditingProductAction(false));
      console.log(err);
    });
};

// Delete a product
export const deleteProduct = (id) => (dispatch) => {
  dispatch(isDeleteProductAction(true));
  axios
    .delete(`/products/${id}`)
    .then((res) => {
      dispatch(deleteProductAction(id));
      dispatch(selectedProductAction({}));
      dispatch(isDeleteProductAction(false));
      dispatch(showEditProductModalAction(false));
      dispatch(isEditProductAction(false));
    })
    .catch((err) => {
      dispatch(isDeleteProductAction(false));
      console.log(err);
    });
};

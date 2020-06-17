import axios from "../axios";
import a from "axios";
import { message, notification } from "antd";

import {
  productsLoadingAction,
  productPaginationAction,
  getProductsAction,
  showEditProductModalAction,
  isEditProductAction,
  isAddProductAction,
  isDeleteProductAction,
  isEditingProductAction,
  selectedProductAction,
  editProductAction,
} from "../reducers/productRecuder";

// get all products
export const getAllProducts = (params) => (dispatch) => {
  const { current, pageSize } = params.pagination;
  let { sortField, sortOrder } = params;
  if (sortOrder === "descend") sortField += ",desc";
  dispatch(productsLoadingAction(true));
  axios
    .get(`/products`, {
      params: {
        projection: "productList",
        page: current - 1,
        size: pageSize,
        sort: sortOrder ? sortField : "id",
      },
    })
    .then((res) => {
      // get paginations and products
      const { products } = res.data._embedded;
      const { totalElements } = res.data.page;
      // set pagination
      dispatch(
        productPaginationAction({
          pagination: {
            total: totalElements,
            ...params.pagination,
          },
          urlParms: {
            sortField: params.sortField,
            sortOrder: params.sortOrder,
          },
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

// Search product
let ctoken = null;
export const searchProducts = async (query) => {
  console.log(`query : ${query}`);
  if (ctoken) ctoken.cancel();
  ctoken = a.CancelToken.source();
  return await axios.get(
    "/products/search/findByTanglishNameContainingIgnoreCase/",
    {
      params: {
        tanglishName: query,
        cancelToken: ctoken.token,
      },
    }
  );
};

// create new product
export const addProduct = (product, params) => async (dispatch) => {
  dispatch(isAddProductAction(true));
  await axios
    .post(`/products`, product)
    .then((res) => {
      // dispatch(createProductAction(res.data));
      dispatch(isAddProductAction(false));
      dispatch(getAllProducts(params));
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
    .patch(`/products/${id}`, product)
    .then((p) => {
      console.log(`p : ${p}`);
      axios
        .get(`products/${id}?projection=productList`)
        .then((res) => {
          dispatch(selectedProductAction(res.data));
          dispatch(editProductAction(res.data));
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
export const deleteProduct = (id, params) => (dispatch) => {
  dispatch(isDeleteProductAction(true));
  axios
    .delete(`/products/${id}`)
    .then((res) => {
      console.log(`id: ${id}`);
      // dispatch(deleteProductAction(id));
      dispatch(selectedProductAction({}));
      dispatch(getAllProducts(params));
      dispatch(isDeleteProductAction(false));
      dispatch(showEditProductModalAction(false));
      dispatch(isEditProductAction(false));
    })
    .catch((err) => {
      dispatch(isDeleteProductAction(false));
      console.log(err);
      notification.error({
        message: "Error",
        description: `Error in deleting product, Error: ${err.message}`,
      });
    });
};

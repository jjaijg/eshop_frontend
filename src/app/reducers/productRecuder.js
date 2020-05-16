import { createSlice } from "@reduxjs/toolkit";

// Create product slice
const productsSlice = createSlice({
  name: "productsSlice",
  initialState: {
    products: [],
    recentProducts: [],
    selectedProduct: {},
    pagination: { current: 1, pageSize: 10, showSizeChanger: true },
    isEditProduct: false,
    isadding: false,
    loading: false,
    showEditProductModal: false,
  },
  reducers: {
    create: (state, { payload }) => {
      const {
        products,
        recentProducts,
        pagination: { pageSize },
      } = state;
      // if products list >= pageSize, add to recent alone,
      if (products.length >= pageSize) {
        recentProducts.push(payload);
      }
      // Else add to products list end and recent
      else {
        products.push(payload);
        recentProducts.push(payload);
      }
    },
    edit: (state, { payload }) => {
      const { products } = state;
      const productToEdit = products.find(({ id }) => id === payload.id);
      if (productToEdit) {
        Object.assign(productToEdit, payload);
      }
    },
    remove: (state, { payload }) => {
      return {
        ...state,
        products: [...state.products.filter(({ id }) => id !== payload)],
        selectedProduct: {},
      };
    },
    getProducts: (state, { payload }) => {
      return {
        ...state,
        products: [...payload],
      };
    },
    getRecentProducts: (state, { payload }) => {
      return { ...state, recentProducts: [...payload] };
    },
    selectedProduct: (state, { payload }) => {
      return {
        ...state,
        selectedProduct: { ...payload },
      };
    },
    productPagination: (state, { payload }) => {
      const { pagination } = state;
      Object.assign(pagination, payload);
    },
    isEditProduct: (state, { payload }) => {
      return {
        ...state,
        isEditProduct: payload,
      };
    },
    productsLoading: (state, { payload }) => {
      return {
        ...state,
        loading: payload,
      };
    },
    addingProduct: (state, { payload }) => {
      return {
        ...state,
        isadding: payload,
      };
    },
    showEditProductModal: (state, { payload }) => ({
      ...state,
      showEditProductModal: payload,
    }),
  },
});

export const {
  create: createProductAction,
  edit: editProductAction,
  remove: deleteProductAction,
  getProducts: getProductsAction,
  selectedProduct: selectedProductAction,
  productPagination: productPaginationAction,
  isEditProduct: isEditProductAction,
  addingProduct: isAddProductAction,
  productsLoading: productsLoadingAction,
  showEditProductModal: showEditProductModalAction,
} = productsSlice.actions;

export default productsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

// Create product slice
const productsSlice = createSlice({
  name: "productsSlice",
  initialState: {
    products: [],
    selectedProduct: {},
    pagination: { current: 1, pageSize: 10, total: 100 },
    isEditProduct: false,
    loading: false,
    showEditProductModal: false,
  },
  reducers: {
    create: (state, { payload }) => {
      const { products } = state;
      products.push(payload);
    },
    edit: (state, { payload }) => {
      const { products } = state;
      const productToEdit = products.find(({ id }) => id === payload.id);
      if (productToEdit) {
        Object.assign(productToEdit, payload);
      }
    },
    remove: (state, { payload }) => {
      const { products } = state;
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
  productsLoading: productsLoadingAction,
  showEditProductModal: showEditProductModalAction,
} = productsSlice.actions;

export default productsSlice.reducer;

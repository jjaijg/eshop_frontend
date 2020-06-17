import React from "react";
import { Modal, Spin } from "antd";

// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  editProduct,
  deleteProduct,
} from "../../../app/dispatchers/productDispatchers";

import ProductForm from "./ProductForm.component";

const ProductEditModal = ({ editmodalVisible, closeEditModal }) => {
  // variables
  // global state
  const { isDeleting, isEditing, pagination, urlParms } = useSelector(
    (state) => state.product
  );
  // Redux variable
  const dispatch = useDispatch();

  // Helper -> STARTS
  const processProductEdit = (product) => {
    // console.log(`product : ${Object.entries(product)}`);
    dispatch(editProduct(product));
  };

  const processProductDelete = (id) => {
    dispatch(deleteProduct(id, { pagination, ...urlParms }));
  };

  const handleClose = () => {
    closeEditModal(false);
  };

  const spinTip = isEditing ? "Editing..." : "Deleting...";
  const formProps = {
    name: "edit",
    editProduct: processProductEdit,
    handleDeleteProduct: processProductDelete,
  };

  const editModalForm =
    isDeleting || isEditing ? (
      <Spin tip={spinTip}>
        <ProductForm name="edit" {...formProps} />
      </Spin>
    ) : (
      <ProductForm name="edit" {...formProps} />
    );

  // Helper -> ENDS

  return (
    <Modal
      title={`Product Detail`}
      centered
      visible={editmodalVisible}
      footer={null}
      onCancel={handleClose}
    >
      {editModalForm}
    </Modal>
  );
};

export default ProductEditModal;

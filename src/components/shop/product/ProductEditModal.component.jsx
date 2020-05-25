import React from "react";
import { Modal, Spin } from "antd";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { editProduct } from "../../../app/dispatchers/productDispatchers";

import ProductForm from "./ProductForm.component";

const ProductEditModal = ({ editmodalVisible, closeEditModal }) => {
  // variables
  // global state
  const { isDeleting, isEditing } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const processForm = (product) => {
    // console.log(`product : ${Object.entries(product)}`);
    dispatch(editProduct(product));
  };

  const handleClose = () => {
    closeEditModal(false);
  };

  const spinTip = isEditing ? "Editing..." : "Deleting...";

  const editModal = (
    <Modal
      title={`Product Detail`}
      centered
      visible={editmodalVisible}
      footer={null}
      onCancel={handleClose}
    >
      {isDeleting || isEditing ? (
        <Spin tip={spinTip}>
          <ProductForm name="edit" editProduct={processForm} />
        </Spin>
      ) : (
        <ProductForm name="edit" editProduct={processForm} />
      )}
    </Modal>
  );

  return editModal;
};

export default ProductEditModal;

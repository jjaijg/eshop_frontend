import React from "react";
import { Modal } from "antd";

// Redux
import { useDispatch } from "react-redux";
import { editProduct } from "../../../app/dispatchers/productDispatchers";

import ProductForm from "./ProductForm.component";

const ProductEditModal = ({
  editmodalVisible,
  handleEditModal,
  closeEditModal,
}) => {
  const dispatch = useDispatch();
  const processForm = (product) => {
    console.log(`product : ${Object.entries(product)}`);
    dispatch(editProduct(product));
    closeEditModal(false);
  };

  const handleClose = () => {
    closeEditModal(false);
  };

  return (
    <Modal
      title={`Product Detail`}
      centered
      visible={editmodalVisible}
      footer={null}
      onCancel={handleClose}
    >
      <ProductForm name="Edit" editProduct={processForm} />
    </Modal>
  );
};

export default ProductEditModal;

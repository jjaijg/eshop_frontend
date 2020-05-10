import React from "react";
import { Modal } from "antd";

import ProductForm from "./ProductForm.component";

const ProductEditModal = ({
  editmodalVisible,
  handleEditModal,
  closeEditModal,
}) => {
  const processForm = (fields) => {
    console.log(`Fields : ${Object.entries(fields)}`);
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
      <ProductForm />
    </Modal>
  );
};

export default ProductEditModal;

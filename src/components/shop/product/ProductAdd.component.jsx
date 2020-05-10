import React, { useState } from "react";
import { Drawer, Button, Select } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import ProductForm from "./ProductForm.component";
import { isEditProductAction } from "../../../app/reducers/productRecuder";

const ProductAdd = () => {
  const [visible, setvisible] = useState(false);

  const showDrawer = () => {
    isEditProductAction(false);
    setvisible(true);
  };

  const onClose = () => {
    setvisible(false);
  };

  return (
    <div>
      <Button type="primary" onClick={showDrawer}>
        <PlusOutlined /> Add New Product
      </Button>
      <Drawer
        title="Add New Product"
        width={620}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ paddingBottom: 80 }}
      >
        <ProductForm />
      </Drawer>
    </div>
  );
};

export default ProductAdd;

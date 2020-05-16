// Depenencies
// React
import React, { useState } from "react";
// antd
import { Drawer, Button, Spin } from "antd";
import { PlusOutlined } from "@ant-design/icons";
// custom component dependency
import ProductForm from "./ProductForm.component";
// Redux
import { useDispatch } from "react-redux";
import { isEditProductAction } from "../../../app/reducers/productRecuder";
import { addProduct } from "../../../app/dispatchers/productDispatchers";

// Add product Component
const ProductAdd = () => {
  // Variables
  // inline state
  const [visible, setvisible] = useState(false);
  const [isadding, setisadding] = useState(false);
  // Redux
  const dispatch = useDispatch();

  // Helpers -> start
  const showDrawer = () => {
    isEditProductAction(false);
    setvisible(true);
  };

  const onClose = () => {
    setvisible(false);
  };

  const addNewProduct = (newProduct) => {
    setisadding(true);
    dispatch(addProduct(newProduct));
    setisadding(false);
  };
  const addproductForm = <ProductForm addNewProduct={addNewProduct} />;
  // Helpers -> end

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
        {isadding ? (
          <Spin tip="Adding new product!!!">{addproductForm}</Spin>
        ) : (
          addproductForm
        )}
      </Drawer>
    </div>
  );
};

export default ProductAdd;

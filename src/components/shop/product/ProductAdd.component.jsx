// Depenencies
// React
import React from "react";
// antd
import { Spin, Row, Col } from "antd";
// custom component dependency
import ProductForm from "./ProductForm.component";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../../app/dispatchers/productDispatchers";

// Add product Component
const ProductAdd = () => {
  // Variables
  // global state
  const { isadding } = useSelector((state) => state.product);
  // Redux
  const dispatch = useDispatch();

  // Helpers -> start

  const addNewProduct = (newProduct) => {
    dispatch(addProduct(newProduct));
  };
  const addproductForm = (
    <ProductForm name="Add" addNewProduct={addNewProduct} />
  );
  // Helpers -> end

  return (
    <>
      <Row type="flex" align="middle">
        <Col span={16}>
          {isadding ? (
            <Spin tip="Adding new product!!!">{addproductForm}</Spin>
          ) : (
            addproductForm
          )}
        </Col>
      </Row>
    </>
  );
};

export default ProductAdd;

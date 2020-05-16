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
const ProductAdd1 = () => {
  // Variables
  // global state
  const { loading } = useSelector((state) => state.product);
  // Redux
  const dispatch = useDispatch();

  // Helpers -> start

  const addNewProduct = (newProduct) => {
    dispatch(addProduct(newProduct));
  };
  const addproductForm = <ProductForm addNewProduct={addNewProduct} />;
  // Helpers -> end

  return (
    <>
      <Row type="flex" align="middle">
        <Col span={16}>
          {loading ? (
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

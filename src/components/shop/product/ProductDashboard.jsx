import React, { useEffect } from "react";
import { Tabs } from "antd";

import { useDispatch } from "react-redux";
// import PropTypes from "prop-types";
import ProductList from "./ProductList.Component";
import ProductAdd1 from "./ProductAdd1.component";
import { getAllProducts } from "../../../app/dispatchers/productDispatchers";

const ProductDashboard = (props) => {
  const dispatch = useDispatch();

  const { TabPane } = Tabs;

  useEffect(() => {
    dispatch(getAllProducts({ pagination: { current: 1, pageSize: 10 } }));
  }, [getAllProducts]);

  return (
    <Tabs defaultActiveKey="2" type="card">
      <TabPane tab="Product List" key="1">
        <ProductList />
      </TabPane>
      <TabPane
        tab="Add Product"
        key="2"
        closable={true}
        style={{ marginTop: "32px" }}
      >
        <ProductAdd1 />
      </TabPane>
    </Tabs>
  );
};

ProductDashboard.propTypes = {};

export default ProductDashboard;

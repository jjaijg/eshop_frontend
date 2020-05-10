import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import ProductList from "./ProductList.Component";
import { getAllProducts } from "../../../app/dispatchers/productDispatchers";

const ProductDashboard = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts({ pagination: { current: 1, pageSize: 10 } }));
  }, [getAllProducts]);
  return (
    <>
      <ProductList />
    </>
  );
};

ProductDashboard.propTypes = {};

export default ProductDashboard;

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// Antd dependencies
import { List } from "antd";
import SearchProductv2 from "./SearchProductv2.component";
import BillProductForm from "./BillProductForm.component";

const Bill = (props) => {
  let snoid = 0;
  const [searchedProduct, setsearchedProduct] = useState(null);
  const [billproducts, setbillproducts] = useState([]);

  const selectProduct = (prod) => {
    setsearchedProduct(prod);
    setbillproducts((prevProds) => [...prevProds, prod]);
  };

  return (
    <>
      <SearchProductv2 selectProduct={selectProduct} />
      <List
        grid={{ gutter: 16, column: 1 }}
        dataSource={billproducts}
        renderItem={(prod) => {
          return (
            <List.Item>
              <BillProductForm
                name={`bill-${++snoid}`}
                searchedProduct={prod}
                style={{ marginBottom: "0px" }}
              />
            </List.Item>
          );
        }}
      />
    </>
  );
};

Bill.propTypes = {};

export default Bill;

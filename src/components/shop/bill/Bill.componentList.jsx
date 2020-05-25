import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// Antd dependencies
import { Table, Input, Select, InputNumber, List, Card, Row, Col } from "antd";
import SearchProductv2 from "./SearchProductv2.component";
import { getMetric } from "../../../app/dispatchers/metricDispatcher";
import BillProductForm from "./BillProductForm.component";
const { Option } = Select;

const Bill = (props) => {
  let snoid = 0;
  const [searchedProduct, setsearchedProduct] = useState(null);
  const [billproducts, setbillproducts] = useState([]);
  const [prods, setprodss] = useState([]);

  // useEffect(() => {
  //   if (billproducts.length) processProduct();
  // }, [searchedProduct]);

  const selectProduct = (prod) => {
    setsearchedProduct(prod);
    setbillproducts((prevProds) => [...prevProds, prod]);
  };

  const processProduct = () => {
    const prodss = billproducts.map((prod) => {
      const resp = getMetric(prod);
      return resp.then(({ data }) => {
        const { tanglishName, marketPrice } = prod;
        return {
          tanglishName,
          marketPrice,
          metric: data,
          price: data.value * marketPrice,
        };
      });
    });
    setprodss(prodss);
  };

  const onPriceChange = (e, snoid) => {
    console.log(`snoid : ${snoid} : ${e}`);
    setbillproducts((prevProds) => {
      console.log(prevProds);
      return [{ marketPrice: e.target.value, ...prevProds[0] }, ...prevProds];
    });
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

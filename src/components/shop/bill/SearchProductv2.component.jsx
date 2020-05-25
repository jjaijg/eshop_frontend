import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Input, Select } from "antd";

import { useDispatch } from "react-redux";

import { searchProducts } from "../../../app/dispatchers/productDispatchers";

const { Search } = Input;
const { Option } = Select;

const SearchProductv2 = ({ selectProduct }) => {
  const [query, setquery] = useState("");
  const [value, setvalue] = useState(null);
  const [products, setproducts] = useState([]);
  const dispatch = useDispatch();

  const handleSearch = (query) => {
    const resp = searchProducts(query);
    console.log(resp);
    resp
      .then((res) => {
        console.log(res.data);
        const products = res.data._embedded.products;
        setproducts(products);
      })
      .catch((err) => console.log(err));
  };

  const onSelect = (value, option) => {
    setvalue(value);
    console.log(option);
    const { value: ind } = option;
    selectProduct(products[ind]);
  };

  return (
    <Select
      showSearch
      value={value}
      placeholder={"Search product"}
      defaultActiveFirstOption={false}
      showArrow={false}
      filterOption={false}
      onSearch={handleSearch}
      onSelect={onSelect}
      notFoundContent={null}
      style={{ width: "200px" }}
    >
      {/* <Search size="large" placeholder="input here" enterButton /> */}
      {products.map((product, index) => (
        <Option key={index} value={index}>
          {`${product.tanglishName}`}
        </Option>
      ))}
    </Select>
  );
};

SearchProductv2.propTypes = {};

export default SearchProductv2;

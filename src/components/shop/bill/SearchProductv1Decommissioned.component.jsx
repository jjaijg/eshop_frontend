import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Input, AutoComplete } from "antd";

import { useDispatch } from "react-redux";

import { searchProducts } from "../../../app/dispatchers/productDispatchers";

const { Search } = Input;
const { Option } = AutoComplete;

const SearchProductv1 = ({ selectProduct }) => {
  const [query, setquery] = useState("");
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
    console.log(option);
  };

  return (
    <AutoComplete
      dropdownMatchSelectWidth={252}
      style={{
        width: 300,
      }}
      onSelect={onSelect}
      onSearch={handleSearch}
      autoFocus
    >
      {/* <Search size="large" placeholder="input here" enterButton /> */}
      {products.map((product, index) => (
        <Option key={index} value={`${index + 1}.${product.tanglishName}`}>
          {`${index + 1}.${product.tanglishName}`}
        </Option>
      ))}
    </AutoComplete>
  );
};

SearchProductv1.propTypes = {};

export default SearchProductv1;

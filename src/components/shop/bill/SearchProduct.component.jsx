import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Input, List } from "antd";

import { useDispatch } from "react-redux";

import { searchProducts } from "../../../app/dispatchers/productDispatchers";

const { Search } = Input;

const SearchProduct = ({ selectProduct }) => {
  const [query, setquery] = useState("");
  const [products, setproducts] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    if (query) {
      const resp = searchProducts(query);
      console.log(resp);
      resp
        .then((res) => {
          console.log(res.data);
          const products = res.data._embedded.products;
          setproducts(products);
        })
        .catch((err) => console.log(err));
    }
  }, [query]);
  return (
    <div className="searchContainer">
      <Search
        placeholder="input search text"
        onSearch={(value) => console.log(value)}
        onChange={(e) => setquery(e.target.value)}
        style={{ width: 100 }}
        loading={false}
        autoFocus
      />
      {products.length ? (
        <div className="searchList">
          {/* <List
            size="small"
            bordered
            dataSource={products}
            renderItem={(item) => (
              <List.Item onClick={() => selectProduct(item)}>{item}</List.Item>
            )}
            style={{ height: "200px", width: "150px", overflowY: "scroll" }}
          /> */}
          <ul>
            {products.map((prod) => (
              <li key={prod.tanglishName} onClick={() => selectProduct(prod)}>
                {prod.tanglishName}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <h2>No products</h2>
      )}
    </div>
  );
};

SearchProduct.propTypes = {};

export default SearchProduct;

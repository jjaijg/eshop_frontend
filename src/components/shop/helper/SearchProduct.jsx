import React, { useState, forwardRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Select } from "antd";

import { searchProducts } from "../../../app/dispatchers/productDispatchers";
import { updateSearchedProductAction } from "../../../app/reducers/billReducer";

const { Option } = Select;

const SearchProduct = forwardRef(
  ({ searchedValue, onProductSelect, toggleEdit }, ref) => {
    const [SearchValue, setSearchValue] = useState(null);
    const { searchedProducts } = useSelector((state) => state.bill);
    const dispatch = useDispatch();

    const handleSearch = async (query) => {
      const resp = await searchProducts(query);
      try {
        if (resp.status === 200) {
          const filteredProducts = resp.data._embedded.products;
          dispatch(updateSearchedProductAction(filteredProducts));
        }
      } catch (err) {
        console.log(`Error in searching product `);
      }
    };

    const onSelect = (value, option) => {
      setSearchValue(value);
      const { value: ind } = option;
      onProductSelect(searchedProducts[ind]);
    };

    return (
      <Select
        showSearch
        value={searchedValue || SearchValue}
        placeholder={"Search..."}
        defaultActiveFirstOption={false}
        showArrow={false}
        filterOption={false}
        onSearch={handleSearch}
        onSelect={onSelect}
        notFoundContent={null}
        onBlur={toggleEdit}
        ref={ref}
      >
        {searchedProducts.map((product, index) => (
          <Option key={index} value={index}>
            {`${product.tanglishName}`}
          </Option>
        ))}
      </Select>
    );
  }
);

SearchProduct.propTypes = {
  onProductSelect: PropTypes.func.isRequired,
  toggleEdit: PropTypes.func.isRequired,
  searchedValue: PropTypes.any,
};

export default SearchProduct;

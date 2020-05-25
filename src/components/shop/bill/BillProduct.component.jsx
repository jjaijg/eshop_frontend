import React from "react";
import PropTypes from "prop-types";

const BillProduct = (props) => {
    const data = {
      sno: <SearchProduct />,
      pid: 1,
      tamilName: "Tamil name 1",
      quantity: (
        <InputNumber
          defaultValue={1}
          min={1}
          max={100000}
          step={1}
          precision={0}
        />
      ),
      unit: (
        <Select defaultValue="lucy" >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
        </Select>
      ),
      perPrice: (
        <InputNumber defaultValue={90} min={1} max={100000} step={0.1} />
      ),
    },
  return <div></div>;
};

BillProduct.propTypes = {};

export default BillProduct;

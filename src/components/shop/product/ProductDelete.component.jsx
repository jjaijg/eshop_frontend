import React from "react";
import { useDispatch } from "react-redux";
// import PropTypes from "prop-types";
import { Button, Popconfirm } from "antd";

import { QuestionCircleOutlined } from "@ant-design/icons";

import { deleteProduct } from "../../../app/dispatchers/productDispatchers";

const DeleteProduct = ({ name, id, style = {} }) => {
  const dispatch = useDispatch();
  return (
    <Popconfirm
      title={`Do you want to delete ${name}?`}
      icon={<QuestionCircleOutlined style={{ color: "red" }} />}
      onConfirm={() => {
        dispatch(deleteProduct(id));
      }}
      okText="Yes"
      okType="danger"
      cancelText="No"
    >
      <Button type="danger" htmlType="button" style={style}>
        Delete
      </Button>
    </Popconfirm>
  );
};

export default DeleteProduct;

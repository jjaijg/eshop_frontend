import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import PropTypes from "prop-types";
import {
  Form,
  Input,
  InputNumber,
  Button,
  Row,
  Col,
  Spin,
  Popconfirm,
} from "antd";

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

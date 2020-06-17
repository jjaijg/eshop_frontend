import React from "react";
import PropTypes from "prop-types";
import { Button, Popconfirm } from "antd";

import { QuestionCircleOutlined } from "@ant-design/icons";

const DeleteProduct = ({ name, id, style, handleDelete }) => {
  return (
    <Popconfirm
      title={`Do you want to delete ${name}?`}
      icon={<QuestionCircleOutlined style={{ color: "red" }} />}
      onConfirm={() => {
        handleDelete(id);
      }}
      okText="Yes"
      okType="danger"
      cancelText="No"
    >
      <Button type="danger" htmlType="button" style={style || {}}>
        Delete
      </Button>
    </Popconfirm>
  );
};

DeleteProduct.propTypes = {
  name: PropTypes.any,
  id: PropTypes.any,
  style: PropTypes.any,
  handleDelete: PropTypes.func.isRequired,
};

export default DeleteProduct;

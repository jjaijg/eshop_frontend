import React from "react";
import PropTypes from "prop-types";
import { Popconfirm, Button } from "antd";

const Confirm = ({ title, actionName, rowKey, confirmHandler }) => {
  return (
    <Popconfirm title={title} onConfirm={() => confirmHandler(rowKey)}>
      <Button type="primary" danger>
        {actionName}
      </Button>
    </Popconfirm>
  );
};

Confirm.propTypes = {
  title: PropTypes.string.isRequired,
  actionName: PropTypes.string.isRequired,
  key: PropTypes.any,
  confirmHandler: PropTypes.func.isRequired,
};

export default Confirm;

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Table, Form, Input, Radio, Row, Col } from "antd";

import EditableCell from "../helper/EditableCell";
import EditableRow from "../helper/EditableRow";
import Confirm from "../../common/Confirm";
import tableColumns from "../helper/BillProductTableCoulmns";
import { useBillProduct } from "./common/useBillPoduct";

const BillProductTable = ({ name }) => {
  const {
    billProducts: dataSource,
    setBillProducts: setDataSource,
    addBillProduct,
    deleteBillProduct,
  } = useBillProduct([
    {
      key: "0",
      search: "Search...",
    },
  ]);
  const [count, setCount] = useState(1);
  const [customerForm] = Form.useForm();

  const handleAdd = (key) => {
    const newData = {
      key: count,
      search: "Search...",
    };
    if (parseInt(key, 10) === count - 1) {
      addBillProduct(newData);
      setCount(count + 1);
    }
  };

  const handleSave = (row) => {
    const newData = [...dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    setDataSource(newData);
    handleAdd(row.key);
  };

  const confirmDeleteColumn = {
    title: "Action",
    dataIndex: "action",
    render: (text, record, rowIndex) =>
      dataSource.length >= 1 && rowIndex < dataSource.length - 1 ? (
        <Confirm
          title="Sure to delete?"
          rowKey={record.key}
          confirmHandler={deleteBillProduct}
          actionName="Delete"
        />
      ) : null,
  };
  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };
  const columns = tableColumns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        customerType: customerForm.getFieldValue("customerType") || "r",
        handleSave: handleSave,
      }),
    };
  });
  columns.push(confirmDeleteColumn);

  return (
    <>
      <Row gutter={[16, 16]}>
        <Col className="gutter-row" span={24}>
          <Form
            form={customerForm}
            name={`${name}_customer`}
            size="small"
            layout="inline"
            initialValues={{ ["customerType"]: "r" }}
          >
            <Form.Item name="customerName" label="Custome Name">
              <Input placeholder="Customer Name" autoFocus />
            </Form.Item>
            <Form.Item name="customerMobile" label="Customer Mobile">
              <Input placeholder="Customer Mobile" />
            </Form.Item>
            <Form.Item name="customerDetails" label="Customer Details">
              <Input.TextArea />
            </Form.Item>
            <Form.Item name="customerType" label="Customer Type">
              <Radio.Group buttonStyle="solid">
                <Radio.Button value="r">Retail</Radio.Button>
                <Radio.Button value="w">WholeSale</Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Form>
        </Col>
        <Col className="gutter-row" span={24}>
          <Table
            name={name}
            components={components}
            rowClassName={() => "editable-row"}
            bordered
            dataSource={dataSource}
            columns={columns}
            pagination={false}
            size="small"
            scroll={{ y: 300 }}
          />
        </Col>
      </Row>
    </>
  );
};

BillProductTable.propTypes = {
  name: PropTypes.string.isRequired,
};

export default BillProductTable;

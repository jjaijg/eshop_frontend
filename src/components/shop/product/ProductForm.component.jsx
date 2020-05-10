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
  Select,
} from "antd";
import Icon from "@ant-design/icons";

import { QuestionCircleOutlined } from "@ant-design/icons";

import { inputNumberValidator } from "../validator/productValidator";

import { addProduct } from "../../../app/dispatchers/productDispatchers";
import { getAllMetrics } from "../../../app/dispatchers/metricDispatcher";
const { Option } = Select;

const ProductForm = ({ product }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { selectedProduct, loading, isEditProduct } = useSelector(
    (state) => state.product
  );
  const { metrics } = useSelector((state) => state.metric);

  useEffect(() => {
    dispatch(getAllMetrics());
  }, []);

  useEffect(() => {
    form.setFieldsValue({
      ...selectedProduct,
    });
    if (!isEditProduct) form.resetFields();
  }, [selectedProduct, isEditProduct]);

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const processForm = (fields) => {
    form
      .validateFields()
      .then((values) => {
        console.log(values);
        dispatch(addProduct(product));
      })
      .catch((reason) => {
        console.log(reason);
      });
  };

  const formComponent = (
    <Form
      {...layout}
      form={form}
      onFinish={processForm}
      onFinishFailed={({ errorFields }) => {
        console.log(errorFields);
      }}
    >
      <Form.Item
        label="English Name"
        name="englishName"
        rules={[
          {
            min: 3,
            max: 50,
            message: "length should be between 2 to 50",
          },
          { whitespace: true, message: "Name should not be spaces" },
          { required: true, message: "Please input English Name!" },
        ]}
      >
        <Input placeholder="Product English Name" />
      </Form.Item>
      <Form.Item
        label="Tamil Name"
        name="tamilName"
        rules={[
          {
            min: 5,
            message: "length should be between 5 to 50",
          },
          { whitespace: true, message: "Name should not be spaces" },
          { required: true, message: "Please input Tamil Name!" },
        ]}
      >
        <Input placeholder="Product Tamil Name" />
      </Form.Item>
      <Form.Item
        name="unit"
        label="Select Unit"
        rules={[{ required: true, message: "Please select unit type" }]}
      >
        <Select placeholder="Select an Unit" allowClear>
          {metrics
            ? metrics.map((metric) => (
                <Option value={metric.unitName}>{metric.unitName}</Option>
              ))
            : null}
          <Option value="kgs">Kgs</Option>
          <Option value="nos">Nos</Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Price"
        name="price"
        rules={[
          {
            min: 1.0,
            max: 1000000.0,
            message: "Price should be greater than ₹ 1",
            validator: inputNumberValidator,
          },
          { required: true, message: "Please input price!" },
        ]}
      >
        <Input placeholder="Procudt Price" prefix="₹" suffix="INR" />
      </Form.Item>
      <Form.Item
        label="Retail Price"
        name="retailPrice"
        rules={[
          {
            min: 1.0,
            max: 1000000.0,
            message: "Price should be greater than ₹ 1",
            validator: inputNumberValidator,
          },
          { required: true, message: "Please input Retial price!" },
        ]}
      >
        <Input placeholder="Procudt Retail Price" prefix="₹" suffix="INR" />
      </Form.Item>
      <Form.Item
        label="Wholesale Price"
        name="wholeSalePrice"
        rules={[
          {
            min: 1.0,
            max: 1000000.0,
            message: "Price should be greater than ₹ 1",
            validator: inputNumberValidator,
          },
          { required: true, message: "Please input Wholsesale price!" },
        ]}
      >
        <Input placeholder="Procudt Wholesale Price" prefix="₹" suffix="INR" />
      </Form.Item>
      <Form.Item>
        <Button
          htmlType="reset"
          type="danger"
          onClick={() => form.resetFields()}
        >
          Reset Form
        </Button>
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" type="primary">
          Add Product
        </Button>
      </Form.Item>
    </Form>
  );

  return !isEditProduct ? (
    formComponent
  ) : (
    <>
      <h2> {isEditProduct ? `${selectedProduct.tamilName} Details` : null}</h2>
      {loading ? (
        <Spin tip=" Deleting...">{formComponent}</Spin>
      ) : (
        formComponent
      )}
    </>
  );
};

ProductForm.propTypes = {};

export default ProductForm;

// Dependencies
// React
import React, { useEffect } from "react";
// import PropTypes from "prop-types";
// Antd
import { Form, Input, Button, Select } from "antd";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { inputNumberValidator } from "../validator/productValidator";

import { getAllMetrics } from "../../../app/dispatchers/metricDispatcher";
// helper
import tamilUnicodeUtf8Replace from "../helper.js/font";

const ProductForm = ({ addNewProduct }) => {
  // Variables
  // Form Ref
  const [form] = Form.useForm();
  // global states
  const { selectedProduct, isEditProduct } = useSelector(
    (state) => state.product
  );
  const { metrics } = useSelector((state) => state.metric);
  // Redux
  const dispatch = useDispatch();
  // helper
  const { Option } = Select;

  // Initializer to get metric
  useEffect(() => {
    dispatch(getAllMetrics());
  }, []);
  // intializer to set or reset form fields
  useEffect(() => {
    form.setFieldsValue({
      ...selectedProduct,
    });
    if (!isEditProduct) form.resetFields();
  }, [selectedProduct, isEditProduct]);

  // Helpers -> Start
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
    size: "large",
  };

  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

  const processTamilInput = (e) => {
    const englishValue = e.target.value;
    const tamilWord = tamilUnicodeUtf8Replace(englishValue);
    form.setFieldsValue({
      tamilName: tamilWord,
    });
  };

  const processForm = (values) => {
    form
      .validateFields()
      .then((values) => {
        const { tamilInput, ...newProduct } = values;
        addNewProduct(newProduct);
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
      onFinishFailed={(errInfo) => {
        console.log(errInfo);
      }}
    >
      <Form.Item
        label="English Name"
        name="tanglishName"
        rules={[
          {
            min: 3,
            max: 50,
            message: "length should be between 2 to 50",
          },
          {
            whitespace: true,
            message: "Name should not be spaces",
          },
          {
            required: true,
            message: "Please input English Name!",
          },
        ]}
      >
        <Input autoFocus placeholder="Product English Name" />
      </Form.Item>
      <Form.Item
        label="Tamil Name"
        name="tamilInput"
        rules={[
          {
            min: 5,
            message: "length should be between 5 to 50",
          },
          {
            whitespace: true,
            message: "Name should not be spaces",
          },
          {
            required: true,
            message: "Please input Tamil Name!",
          },
        ]}
        onChange={processTamilInput}
      >
        <Input placeholder="Product Tamil Name" />
      </Form.Item>
      <Form.Item
        label="Converted Name"
        name="tamilName"
        rules={[
          {
            min: 5,
            message: "length should be between 5 to 50",
          },
          {
            whitespace: true,
            message: "Name should not be spaces",
          },
          {
            required: true,
            message: "Please input Tamil Name!",
          },
        ]}
      >
        <Input placeholder="Product Tamil Name" disabled />
      </Form.Item>
      <Form.Item
        name="metric"
        label="Select Unit"
        rules={[
          {
            required: true,
            message: "Please select unit type",
          },
        ]}
      >
        <Select placeholder="Select an Unit" allowClear>
          {metrics
            ? metrics.map((metric) => (
                <Option
                  key={metric._links.self.href}
                  value={metric._links.self.href}
                >
                  {metric.unitName}
                </Option>
              ))
            : null}
        </Select>
      </Form.Item>
      <Form.Item
        label="Price"
        name="marketPrice"
        rules={[
          {
            min: 1.0,
            max: 1000000.0,
            validator: inputNumberValidator,
          },
          {
            required: true,
            message: "Please input price!",
          },
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
            validator: inputNumberValidator,
          },
          {
            required: true,
            message: "Please input Retial price!",
          },
        ]}
      >
        <Input placeholder="Procudt Retail Price" prefix="₹" suffix="INR" />
      </Form.Item>
      <Form.Item
        label="Wholesale Price"
        name="wholesalePrice"
        rules={[
          {
            min: 1.0,
            max: 1000000.0,
            validator: inputNumberValidator,
          },
          {
            required: true,
            message: "Please input Wholsesale price!",
          },
        ]}
      >
        <Input placeholder="Procudt Wholesale Price" prefix="₹" suffix="INR" />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button
          htmlType="reset"
          type="danger"
          onClick={() => form.resetFields()}
          style={{
            marginRight: "15px",
          }}
        >
          Reset Form
        </Button>
        <Button htmlType="submit" type="primary">
          Add Product
        </Button>
      </Form.Item>
    </Form>
  );
  // Helper -> Ends

  return formComponent;
};

ProductForm.propTypes = {};

export default ProductForm;

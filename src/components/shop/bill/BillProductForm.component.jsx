// Dependencies
// React
import React, { useEffect } from "react";
// import PropTypes from "prop-types";
// Antd
import { Form, Input, Button, Select } from "antd";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { inputNumberValidator } from "../validator/productValidator";
import {
  getAllMetrics,
  getMetric,
} from "../../../app/dispatchers/metricDispatcher";

const BillProductForm = ({ searchedProduct, name }) => {
  // Variables
  // Form Ref
  const [form] = Form.useForm();
  // global states
  //   const { selectedProduct } = useSelector((state) => state.product);
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
    if (Object.entries(searchedProduct).length) {
      const resp = getMetric(searchedProduct);
      resp.then(({ data }) => {
        console.log(`Resp : ${data}`);
        // set initial value in form
        const { tanglishName, marketPrice } = searchedProduct;
        form.setFieldsValue({
          tanglishName,
          marketPrice,
          quantity: data.value,
          metric: data._links.self.href,
          price: marketPrice * data.value,
        });
      });
    } else {
      form.resetFields();
    }
    // if (!isEditProduct) form.resetFields();
  }, [searchedProduct]);

  // Helpers -> Start

  const processForm = (values) => {
    form
      .validateFields()
      .then((values) => {})
      .catch((reason) => {
        console.log(reason);
      });
  };

  const onQuantityChange = (e) => {
    const q = e.target.value;
    form.setFieldsValue({
      quantity: q,
      price: q * form.getFieldValue("marketPrice"),
    });
  };
  const onPriceChange = (e) => {
    const p = e.target.value;
    form.setFieldsValue({
      marketPrice: p,
      price: p * form.getFieldValue("quantity"),
    });
  };

  const formComponent = (
    <Form
      form={form}
      onFinish={processForm}
      onFinishFailed={(errInfo) => {
        console.log(errInfo);
      }}
      name={name}
    >
      <div className="flexForm">
        <Form.Item name="tanglishName">
          <Input placeholder="Tanglish Name" disabled />
        </Form.Item>
        <Form.Item name="quantity" onChange={onQuantityChange}>
          <Input placeholder="Quantity" />
        </Form.Item>
        <Form.Item
          name="metric"
          rules={[
            {
              required: true,
              message: "Please select unit type",
            },
          ]}
        >
          <Select placeholder="Select an Unit">
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
        <Form.Item name="marketPrice" onChange={onPriceChange}>
          <Input placeholder="Procudt Price" prefix="₹" suffix="INR" />
        </Form.Item>
        <Form.Item name="price" dependencies={["quantity", "marketPrice"]}>
          <Input placeholder="Procudt Price" prefix="₹" suffix="INR" disabled />
        </Form.Item>
      </div>
    </Form>
  );
  // Helper -> Ends

  return formComponent;
};

BillProductForm.propTypes = {};

export default BillProductForm;

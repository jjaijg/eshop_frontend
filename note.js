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
import Icon from "@ant-design/icons";

import { QuestionCircleOutlined } from "@ant-design/icons";
import {
  selectedProductAction,
  isEditProductAction,
} from "../../app/reducers/productRecuder";
import { deleteProduct } from "../../app/dispatchers/productDispatchers";

const ProductForm = ({ product }) => {
  const [form] = Form.useForm();
  const [isConfirmModal, setisConfirmModal] = useState(false);
  const dispatch = useDispatch();
  const { selectedProduct, loading, isEditProduct } = useSelector(
    (state) => state.product
  );

  const Rupee = () => (
    <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
      <path
        d="M326.62,91.076c-1.711-1.713-3.901-2.568-6.563-2.568h-48.82c-3.238-15.793-9.329-29.502-18.274-41.112h66.52
		c2.669,0,4.853-0.856,6.57-2.565c1.704-1.712,2.56-3.903,2.56-6.567V9.136c0-2.666-0.855-4.853-2.56-6.567
		C324.334,0.859,322.15,0,319.481,0H81.941c-2.666,0-4.853,0.859-6.567,2.568c-1.709,1.714-2.568,3.901-2.568,6.567v37.972
		c0,2.474,0.904,4.615,2.712,6.423s3.949,2.712,6.423,2.712h41.399c40.159,0,65.665,10.751,76.513,32.261H81.941
		c-2.666,0-4.856,0.855-6.567,2.568c-1.709,1.715-2.568,3.901-2.568,6.567v29.124c0,2.664,0.855,4.854,2.568,6.563
		c1.714,1.715,3.905,2.568,6.567,2.568h121.915c-4.188,15.612-13.944,27.506-29.268,35.691
		c-15.325,8.186-35.544,12.279-60.67,12.279H81.941c-2.474,0-4.615,0.905-6.423,2.712c-1.809,1.809-2.712,3.951-2.712,6.423v36.263
		c0,2.478,0.855,4.571,2.568,6.282c36.543,38.828,83.939,93.165,142.182,163.025c1.715,2.286,4.093,3.426,7.139,3.426h55.672
		c4.001,0,6.763-1.708,8.281-5.141c1.903-3.426,1.53-6.662-1.143-9.708c-55.572-68.143-99.258-119.153-131.045-153.032
		c32.358-3.806,58.625-14.277,78.802-31.404c20.174-17.129,32.449-39.403,36.83-66.811h47.965c2.662,0,4.853-0.854,6.563-2.568
		c1.715-1.709,2.573-3.899,2.573-6.563V97.646C329.193,94.977,328.335,92.79,326.62,91.076z"
      />
    </svg>
  );

  const HeartSvg = () => (
    <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
      <path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z" />
    </svg>
  );
  const HeartIcon = (props) => <Icon component={HeartSvg} {...props} />;

  const RupeeIcon = (props) => <Icon component={Rupee} {...props} />;

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
    console.log(`Fields : ${Object.entries(fields)}`);
  };

  const formComponent = (
    <Form {...layout} form={form} onFinish={processForm}>
      {isEditProduct ? (
        <Form.Item label="Product ID" name="id">
          <Input placeholder="input placeholder" disabled />
        </Form.Item>
      ) : null}
      <Form.Item label="English Name" name="englishName">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item label="Tamil Name" name="tamilName">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item label="Price " name="price">
        <InputNumber
          formatter={(value) =>
            `₹ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          }
          parser={(value) => value.replace(/\₹\s?|(,*)/g, "")}
          placeholder="input placeholder"
          min={1}
          style={{ width: "100%" }}
          rules={[{ required: true, message: "Please input Price!" }]}
        />
      </Form.Item>
      <Form.Item label="Retail Price" name="retailPrice">
        <Input
          prefix={<HeartIcon style={{ color: "hotpink" }} />}
          placeholder="input placeholder"
          style={{ width: "100%" }}
        />
      </Form.Item>
      <Form.Item label="WholeSale Price" name="wholeSalePrice">
        <InputNumber
          formatter={(value) =>
            `₹ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          }
          parser={(value) => value.replace(/\₹\s?|(,*)/g, "")}
          placeholder="input placeholder"
          min={1}
          style={{ width: "100%" }}
        />
      </Form.Item>
      {isEditProduct ? (
        <Form.Item label="Last updated Date" name="lastUpdated">
          <Input placeholder="input placeholder" disabled />
        </Form.Item>
      ) : null}
      {isEditProduct ? (
        <>
          <Row gutter={[16, 16]}>
            <Col offset="8">
              <Form.Item style={{ textAlign: "right" }}>
                <Button
                  type="primary"
                  htmlType="button"
                  onClick={() => dispatch(isEditProductAction(true))}
                >
                  Update
                </Button>
              </Form.Item>
            </Col>
            <Col>
              <Form.Item>
                <Popconfirm
                  title="Are you sure delete this product?"
                  icon={<QuestionCircleOutlined style={{ color: "red" }} />}
                  onConfirm={() => {
                    dispatch(deleteProduct(selectedProduct.id));
                  }}
                  okText="Yes"
                  okType="danger"
                  cancelText="No"
                >
                  <Button type="danger" htmlType="button">
                    Delete
                  </Button>
                </Popconfirm>
              </Form.Item>
            </Col>
          </Row>
        </>
      ) : (
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button
            type="primary"
            htmlType="button"
            onClick={() => dispatch(isEditProductAction(true))}
          >
            Add Product
          </Button>
        </Form.Item>
      )}
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

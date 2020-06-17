import React, { useContext, useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Form, InputNumber } from "antd";

import SearchProduct from "./SearchProduct";
import { EditableContext } from "./EditableRow";

const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  customerType,
  ...restProps
}) => {
  const [editing, setEditing] = useState(true);
  const form = useContext(EditableContext);

  const searchRef = useRef(null);
  const quantityRef = useRef(null);
  const perPriceRef = useRef(null);

  const isQuantity = dataIndex === "quantity";
  const isPerPrice = dataIndex === "perPrice";
  const isSearch = dataIndex === "search";

  const setFormFields = () => {
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };

  useEffect(() => {
    if (editing) {
      // if (searchRef.current) searchRef.current.focus();
      if (quantityRef.current) quantityRef.current.focus();
      // if (perPriceRef.current) perPriceRef.current.focus();

      if (record && editing) setFormFields();
    }
  }, [editing, record]);

  const toggleEdit = () => {
    setEditing(!editing);
    setFormFields();
  };

  const OnQuantityChange = (value) => {
    const updateQuantity = !value ? 1 : value;

    const updateRecord = {
      ...record,
      quantity: updateQuantity,
      price: (record.perPrice * updateQuantity).toFixed(2),
    };
    handleSave(updateRecord);
  };

  const onPerPriceChange = (value) => {
    const updatedPrice = !value ? 1 : value;
    const updateRecord = {
      ...record,
      perPrice: updatedPrice,
      price: (record.quantity * updatedPrice).toFixed(2),
    };
    handleSave(updateRecord);
  };

  const saveProduct = async (product) => {
    try {
      const values = await form.validateFields();
      const {
        tamilName,
        metricUnitName,
        metricValue,
        retailPrice,
        wholesalePrice,
        allowDecimal,
      } = product;
      const productPrice = customerType === "r" ? retailPrice : wholesalePrice;
      const productQuantity = record["quantity"] || metricValue;
      const newBillProductRow = {
        ...record,
        ...values,
        search: tamilName,
        quantity: productQuantity,
        unit: metricUnitName,
        perPrice: productPrice,
        price: productPrice * productQuantity,
        allowDecimal,
        retailPrice,
        wholesalePrice,
      };
      handleSave(newBillProductRow);
      toggleEdit();
    } catch (errInfo) {
      console.log("Error occured while adding product to bill :", errInfo);
    }
  };

  const inputField =
    isQuantity || isPerPrice ? (
      <InputNumber
        min={isPerPrice ? 1 : record.allowDecimal ? 0.001 : 1}
        precision={isPerPrice ? 2 : record.allowDecimal ? 3 : 0}
        step={isPerPrice ? 1 : record.allowDecimal ? 0.001 : 1}
        onBlur={toggleEdit}
        ref={isPerPrice ? perPriceRef : quantityRef}
        onChange={isPerPrice ? onPerPriceChange : OnQuantityChange}
      />
    ) : isSearch ? (
      <SearchProduct
        searchedValue={record.search}
        onProductSelect={saveProduct}
        toggleEdit={toggleEdit}
        ref={searchRef}
      />
    ) : null;

  let childNode = children;
  if (editable && record.hasOwnProperty(dataIndex)) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
      >
        {inputField}
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
        onFocus={toggleEdit}
        tabIndex={"0"}
      >
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

EditableCell.propTypes = {
  title: PropTypes.string,
  editable: PropTypes.bool,
  children: PropTypes.any,
  dataIndex: PropTypes.string,
  record: PropTypes.object,
  customerType: PropTypes.string,
  handleSave: PropTypes.func,
};

export default EditableCell;

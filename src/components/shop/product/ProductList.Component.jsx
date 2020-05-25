// React dependencies
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import PropTypes from "prop-types";

// Antd dependencies
import { Table } from "antd";

// configs
import { getColumns } from "./productConfig";

// Custom components dependencies
import ProductEditModal from "./ProductEditModal.component";

// Redux dependencies
import { getAllProducts } from "../../../app/dispatchers/productDispatchers";
import {
  selectedProductAction,
  showEditProductModalAction,
  isEditProductAction,
} from "../../../app/reducers/productRecuder";

const ProductList = (props) => {
  // inline state variables
  const [searchText, setsearchText] = useState("");
  const [searchedColumn, setsearchedColumn] = useState("");

  // Redux variables & global state variables
  const dispatch = useDispatch();
  const { products, loading, pagination, showEditProductModal } = useSelector(
    (state) => state.product
  );

  // intial function to load products
  useEffect(() => {
    if (pagination.current) getAllProducts({ pagination });
  }, []);

  // helpers start
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setsearchText(selectedKeys[0]);
    setsearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setsearchText("");
  };

  const handleChange = (pagination, filters, sorter) => {
    dispatch(
      getAllProducts({
        sortField: sorter.field,
        sortOrder: sorter.order,
        pagination,
        filters,
      })
    );
  };

  // const rowSelection = {
  //   type: "radio",
  //   selectedRowKeys: [selectedProductId],
  //   onChange: (selectedRowKeys, selectedRows) => {
  //     console.log(
  //       `selectedRowKeys: ${selectedRowKeys}`,
  //       "selectedRows: ",
  //       selectedRows
  //     );
  //     setselectedProductId(selectedRowKeys);
  //     seteditmodalVisible(true);
  //   },
  // };

  const onRow = (record, rowIndex) => {
    return {
      onClick: (e) => {
        dispatch(
          selectedProductAction(products.find(({ id }) => id === record.id))
        );
        dispatch(showEditProductModalAction(true));
        dispatch(isEditProductAction(true));
      },
    };
  };

  const handleEditModal = (bool) => {
    dispatch(showEditProductModalAction(bool));
    dispatch(isEditProductAction(false));
  };
  const closeEditModal = (bool) => {
    dispatch(showEditProductModalAction(bool));
    dispatch(selectedProductAction({}));
    dispatch(isEditProductAction(false));
  };

  const columns = getColumns(
    handleSearch,
    handleReset,
    searchedColumn,
    searchText
  );
  // helpers end

  return (
    <>
      <ProductEditModal
        editmodalVisible={showEditProductModal}
        handleEditModal={handleEditModal}
        closeEditModal={closeEditModal}
      />
      <Table
        columns={columns}
        onRow={onRow}
        pagination={pagination}
        dataSource={products}
        rowKey={"id"}
        loading={loading}
        onChange={handleChange}
        scroll={{ y: 500 }}
        size="middle"
      />
    </>
  );
};

ProductList.propTypes = {};

export default ProductList;

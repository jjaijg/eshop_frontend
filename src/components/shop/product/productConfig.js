// Product Table config
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchOutlined } from "@ant-design/icons";

import Highlighter from "react-highlight-words";
// import PropTypes from "prop-types";

import { Table, Input, Button, Row, Col } from "antd";
const getColumnSearchProps = (
  dataIndex,
  handleSearch,
  handleReset,
  searchedColumn,
  searchText
) => {
  let searchInput = "";
  return {
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Button
          type="primary"
          onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
          icon={<SearchOutlined />}
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button
          onClick={() => handleReset(clearFilters)}
          size="small"
          style={{ width: 90 }}
        >
          Reset
        </Button>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) => {
      return record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase());
    },
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.select());
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text.toString()}
        />
      ) : (
        text
      ),
  };
};

export const getColumns = (
  handleSearch,
  handleReset,
  searchedColumn,
  searchText
) => [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
    width: "80px",
    sorter: (a, b) => a.id - b.id,
  },

  {
    title: "Unit",
    dataIndex: "unitName",
    key: "unitName",
    width: "80px",
    render: (evt, record) => {
      return record.metric ? record.metric.unitName : null;
    },
  },

  {
    title: "English Name",
    dataIndex: "tanglishName",
    key: "tanglishName",

    sorter: (a, b) => a > b,
    ...getColumnSearchProps(
      "englishName",
      handleSearch,
      handleReset,
      searchedColumn,
      searchText
    ),
  },
  {
    title: "Tamil Name",
    dataIndex: "tamilName",
    key: "tamilName",
  },
];

// Product Table config
import React from "react";
import { SearchOutlined } from "@ant-design/icons";

import Highlighter from "react-highlight-words";
// import PropTypes from "prop-types";

import { Input, Button } from "antd";
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
  searchText,
  currentPage
) => [
  {
    title: "Sno",
    key: "index",
    render: (value, item, index) => (currentPage - 1) * 10 + index + 1,
    width: "80px",
  },
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
    width: "80px",
    sorter: (a, b) => parseInt(a.id) - parseInt(b.id),
  },

  {
    title: "Unit",
    dataIndex: "metricUnitName",
    key: "metricUnitName",
    width: "80px",
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

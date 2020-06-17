const tableColumns = [
  {
    title: "Sno",
    dataIndex: "sno",
    width: "10%",
    render: (text, rec, rowIndex) => rowIndex + 1,
  },
  {
    title: "Search",
    dataIndex: "search",
    width: "25%",
    editable: true,
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    width: "10%",
    editable: true,
  },
  {
    title: "unit",
    dataIndex: "unit",
  },
  {
    title: "Price / Unit",
    dataIndex: "perPrice",
    width: "10%",
    editable: true,
  },
  {
    title: "Price",
    dataIndex: "price",
  },
];

export default tableColumns;

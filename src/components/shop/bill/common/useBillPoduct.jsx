import { useCallback, useState } from "react";

export const useBillProduct = (initial) => {
  const [billProducts, setBillProducts] = useState(initial);

  return {
    billProducts,
    setBillProducts,
    addBillProduct: useCallback(
      (newRow) => setBillProducts((prevRows) => [...prevRows, newRow]),
      []
    ),
    deleteBillProduct: useCallback(
      (rowKey) =>
        setBillProducts((prevrows) =>
          prevrows.filter((row) => row.key !== rowKey)
        ),
      []
    ),
  };
};

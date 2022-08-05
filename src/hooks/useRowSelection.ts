// @ts-nocheck
import { useState } from "react";

export const useRowSelection = (defaultSelectedRowKeys = []) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState(defaultSelectedRowKeys);

  const onChange = (rowKeys, rows) => {
    setSelectedRowKeys(rowKeys);
  };

  return {
    onChange,
    selectedRowKeys,
    setSelectedRowKeys,
    total: selectedRowKeys.length,
  };
};

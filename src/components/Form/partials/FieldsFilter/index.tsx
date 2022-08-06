// @ts-nocheck
/**
 * 筛选列表组件
 * options -- Table的options
 * onChange -- 更新options
 */
import React from "react";
import { Checkbox, Popover, Tooltip } from "@/plugins/ui";
import { FilterIcon } from "./icons";

export default ({ title = '字段筛选', checked, onChange, options, trigger = 'click', style = { marginLeft: 4 } }) => {
  const menu = (
    <Checkbox.Group onChange={onChange} value={checked}>
      {options?.map((item) => (
        <div key={item.value}>
          <Checkbox
            style={{ color: "var(--xdrsec-primary-color)" }}
            value={item.value}
          >
            {item.label}
          </Checkbox>
        </div>
      ))}
    </Checkbox.Group>
  );

  return (
    <Tooltip title={<span style={{ fontSize: 12 }} placement="top">{title}</span>}>
      <Popover
        title={false}
        content={menu}
        trigger={trigger}
        placement="bottomRight"
      >
        <FilterIcon style={style} />
      </Popover>
    </Tooltip>
  );
};

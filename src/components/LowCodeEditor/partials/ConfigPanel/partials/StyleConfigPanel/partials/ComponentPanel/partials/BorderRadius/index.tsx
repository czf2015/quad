// @ts-nocheck
import React from "react";
import { CustomInput as Round } from "../../../common";
import { helper } from "../helpers";

export const BorderRadius = ({ store }) => {
  const config = [{ label: "圆角", store_name: "borderRadius", isDisconnect: true, labelMarginLeft: 10 }];
  const rounds = helper(store, config);
  return (
    <div>
      <h4 style={{ fontWeight: 700 }}>盒子圆角</h4>
      {rounds?.map((item, index) => (
        <Round key={index} {...item} />
      ))}
    </div>
  );
};

// @ts-nocheck
import React from "react";
import { Select, InputNumber, Tooltip } from "antd";
import { openEyes, closeEyes, opacityIcon, zIcon } from "../../icons";
import { OVERFLOW_OPTION } from "./config";
import { handleOption } from "./helpers";
import styles from "./index.module.less";

export default ({ store }) => {
  const renderEyes = store("hidden") ? openEyes : closeEyes;
  const handleEyes = () => {
    store("hidden", !store("hidden"));
  };

  const handleOverflow = (value) => {
    store("overflow", value);
  };

  const handleZIndexBlur = (e) => {
    store("z", e.target.value);
  };

  const handleOpacityBlur = (e) => {
    store("opacity", e.target.value);
  };

  return (
    <div className={styles.layer}>
      <h4>图层</h4>
      <div className={styles.content}>
        <Tooltip title="溢出">
          <Select
            value={store("overflow")}
            className={styles.item}
            options={handleOption(OVERFLOW_OPTION)}
            onChange={handleOverflow}
          />
        </Tooltip>
        <Tooltip title="透明度">
          <InputNumber
            className={styles.item}
            max={100}
            min={0}
            controls={false}
            formatter={(value) => `${value}%`}
            defaultValue={store("opacity")}
            prefix={opacityIcon()}
            onBlur={handleOpacityBlur}
          />
        </Tooltip>
        <Tooltip title="z-index">
          <InputNumber
            className={styles.item}
            min={0}
            controls={false}
            defaultValue={store("z")}
            prefix={zIcon()}
            onBlur={handleZIndexBlur}
          />
        </Tooltip>
        <div className={styles.eyes} onClick={handleEyes}>
          {renderEyes()}
        </div>
      </div>
    </div>
  );
};

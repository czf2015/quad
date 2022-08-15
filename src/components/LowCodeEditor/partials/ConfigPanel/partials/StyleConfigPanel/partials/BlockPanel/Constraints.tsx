// @ts-nocheck
import React from "react";
import { Select, Tooltip } from "@/plugins/ui";
import { constraintsConfig } from "./config";
import { handleOption, handleDiagramsConfig } from "./helpers";
import styles from "./index.module.less";

const AlignSelect = ({ store }) => {
  const { horizontal, vertical } = constraintsConfig;

  const handleHorChange = (value) => {
    store("hor", value);
  };

  const handleVerChange = (value) => {
    store("ver", value);
  };

  return (
    <div>
      <div className={styles.selectWrap}>
        {horizontal.icon()}
        <Tooltip placement="top" title={horizontal.tooltip}>
          <Select
            options={handleOption(horizontal.options)}
            value={store("hor")}
            onChange={handleHorChange}
          />
        </Tooltip>
      </div>
      <div className={styles.selectWrap}>
        {vertical.icon()}
        <Tooltip placement="top" title={vertical.tooltip}>
          <Select
            options={handleOption(vertical.options)}
            value={store("ver")}
            onChange={handleVerChange}
          />
        </Tooltip>
      </div>
    </div>
  );
};

const AlignDiagrams = ({ store }) => {
  return (
    <div className={styles.diagrams}>
      <div className={styles.rect}>
        {handleDiagramsConfig(styles, store("hor"), store("ver"), store).map(
          ({ className, style, method }, index) => (
            <div
              key={index}
              className={className}
              style={style}
              onClick={method}
            />
          )
        )}
      </div>
    </div>
  );
};

export default ({ store }) => {
  return (
    <div className={styles.constraints}>
      <div>对齐方式</div>
      <div className={styles.content}>
        <AlignDiagrams store={store} />
        <AlignSelect store={store} />
      </div>
    </div>
  );
};

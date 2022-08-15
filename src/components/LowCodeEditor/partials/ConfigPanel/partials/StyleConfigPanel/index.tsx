// @ts-nocheck
import React from "react";
import { Code } from "@/plugins/ui";
import styles from "./index.module.less";
import BlockPanel from "./partials/BlockPanel";

const style = `.wrapper {
  position: relative;
  >.card_title {
    position: absolute;
    top: 0;
    left: 0;
    line-height: 24px;
    text-indent: 2em;
    font-weight: bold;
  }
  > .holder_btn {
    position: absolute;
    top: 0;
    left: 0;
    &:hover {
      cursor: move;
    }
  }
  > .delete_btn {
    position: absolute;
    bottom: 0;
    left: 0;
    &:hover {
      // color: #e33e38;
    }
  }
  > .more_btn {
    position: absolute;
    top: 0;
    right: 0;
    &:hover {
      color: var(--quad-primary-color);
      cursor: pointer;
    }
  }
  > .expand_btn {
    position: absolute;
    bottom: 0;
    right: 0;
    &:hover {
      cursor: nw-resize;
    }
  }
  &:not(:hover):not(.dropdown_overlay) {
    > .holder_btn,
    > .delete_btn,
    > .more_btn,
    > .expand_btn {
      display: none;
    }
  }
  }`


// export const StyleConfigPanel = ({ /* style */ }) => {
//   return (
//     <div className={styles.container}>
//       <Code
//         value={style}
//         options={{
//           mode: 'css',
//         }}
//         onChange={(editor: any, data: any, value: string) => { }}
//         onBeforeChange={(editor: any, data: any, value: string) => { }}
//       />
//     </div>
//   )
// }


// 样式配置面板
export const StyleConfigPanel = () => {
  const blockConfig = {
    constraintsSource: { hor: 0, ver: 2 },
    layerSource: { overflow: 0, opacity: 1, z: 1, hidden: false },
    fill: [
      { fill_type: "color", background: "#FFFFFF", z: 1 },
      { fill_type: "color", background: "#19E1D3", z: 1 },
      { fill_type: "color", background: "#181C25", z: 1 },
    ],
    stroke: {
      style: 'solid',
      color: '#E01F1F',
      width: 1
    }
  };

  return <BlockPanel blockConfig={blockConfig} />;
};

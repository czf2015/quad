export const configTabsPanel = [
  {
    tab: "样式",
    key: "style",
    content: `.wrapper {
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
      color: #40a9ff;
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
  }`,
  },
  {
    tab: "数据",
    key: "data",
  },
  {
    tab: "交互",
    key: "interact",
  },
];

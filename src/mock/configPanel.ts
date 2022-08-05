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
    content: {
      type: 0,
      method: 0,
      url: "",
      params: {
        offset: 0,
        limit: 10,
      },
      data: {
        title: "标题",
        description: "描述",
        params: {
          id: 1,
        },
      },
      preprocess: "sss",
    },
  },
  {
    tab: "交互",
    key: "interact",
    content: {
      handlers: [
        {
          title: "",
          id: "", // 非必填
          type: "SELECT_TIME",
          enable: false,
          handle: `(params) => {
            // setInterval(() => {
            //   console.log("=======");
            //   console.log(params.payload);
            // }, 1000)
          }`,
        },
      ],
      binds: [
        {
          title: "xxx",
          target: "add", //
          event: "onClick", // 下拉
          id: "11", // 组件id, 自动填写
          type: "SELECT_TIME", // 下拉选择
          payload: 0, // 自动获取
          description: "最近30天", // ...
        },
      ],
    },
  },
];

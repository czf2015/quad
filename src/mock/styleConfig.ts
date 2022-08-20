// export const blockStyle = {
//   constraints: {
//     horizontal: 0,
//     vertical: 2,
//   },
//   fill: {
//     image: [
//       {
//         url: '',
//         position: {
//           left: 0, // 0-100百分比
//           top: 0, // ...
//         },
//         repeat: 'no-repeat',
//         size: {
//           width: {
//             type: 0, // 0 百分比 1 像素 2 auto,
//             value: 100, // 0-100%, px, auto
//           },
//           height: {
//             type: 0, // 0 百分比 1 像素 2 auto,
//             value: 100, // 0-100%, px, auto
//           }
//         },
//         hidden: false
//       },
//       {
//         url: '',
//         position: {
//           left: 0, // 0-100百分比
//           top: 0, // ...
//         },
//         repeat: 'no-repeat',
//         size: {
//           width: {
//             type: 0, // 0 百分比 1 像素 2 auto,
//             value: 100, // 0-100%, px, auto
//           },
//           height: {
//             type: 0, // 0 百分比 1 像素 2 auto,
//             value: 100, // 0-100%, px, auto
//           }
//         },
//         hidden: false
//       },
//     ],
//     color: {
//       hex: "#FFFFFF",
//       alpha: 0, // 0-100之间，可以有小数
//       hidden: false
//     },
//   },
//   overflow: 'auto', // 
//   opacity: 1,
//   z: 1,
//   hidden: false,
// };

export const blockStyle = {
  constraints: {
    horizontal: 0,
    vertical: 2,
  },
  fill: [
    {
      type: 'color',
      value: '#FFFFFF',
      hidden: false
    },
    {
      type: 'color',
      value: '#FFFFFF',
      hidden: false
    },
    {
      type: 'image',
      url: '',
      position: {
        left: 0, // 0-100百分比
        top: 0, // ...
      },
      repeat: 'no-repeat',
      size: {
        width: {
          type: 0, // 0 百分比 1 像素 2 原比例,
          value: 100, // 0-100%, px, auto
        },
        height: {
          type: 0, // 0 百分比 1 像素 2 auto,
          value: 100, // 0-100%, px, auto
        }
      },
      hidden: false
    },
  ],
  overflow: 'auto', // 
  opacity: 1,
  z: 1,
  hidden: false,
};

export const widgetStyle = {
  // 位置
  position: 'absolute',
  top: {
    type: 0, // 0 百分比 1 像素值
    value: 0
  }, // 0-100 百分比 
  left: {
    type: 0, // 0 百分比 1 像素值
    value: 0
  }, // 0-100 百分比
  // 盒子
  margin: 12,
  padding: 12,
  width: {
    type: 0, // 0 百分比 1 像素值
    value: 0
  }, // 0-100 百分比200,
  height: {
    type: 0, // 0 百分比 1 像素值
    value: 0
  }, // 0-100 百分比
  // --------------圆角------------
  borderRadius: {
    type: 0, // 0 像素值 1 百分比
    value: 4, // px %
  }, // 或数组为top right bottom left
  // -----------------阴影-----------
  boxShadow: {
    type: 'none',
    offsetX: 2,
    offsetY: 2,
    blur: 2,
    spread: 4,
    color: '#ccc'
  },
  // constraints: {
  //   horizontal: 0,
  //   vertical: 2,
  // },
  // ========文字属性========
  textIndent: 0,
  textAlign: 0,
  baseline: 0,
  spacing: 0,
  wrap: 0,
  color: "#ccc",
  fontSize: 14,
  fontWeight: "normal",
  fontFamily: "",
  // --------变形------------
  transform: {
    scaleX: 1,
    scaleY: 1,
    rotate: 0,
  },
  transformOrigin: {
    top: {
      type: 0, // 0 百分比 1 像素值
      value: 0
    }, // 0-100 百分比
    left: {
      type: 0, // 0 百分比 1 像素值
      value: 0
    }, // 0-100 百分比
  },
  // 填充
  fill: {
    image: [
      {
        url: '',
        position: {
          left: 0, // 0-100百分比
          top: 0, // ...
        },
        repeat: 'no-repeat',
        size: {
          width: {
            type: 0, // 0 百分比 1 像素 2 auto,
            value: 100, // 0-100%, px, auto
          },
          height: {
            type: 0, // 0 百分比 1 像素 2 auto,
            value: 100, // 0-100%, px, auto
          }
        }
      },
    ],
    color: {
      hex: "",
      alpha: 0, // 0-100之间，可以有小数
    },
  },
  // 描边
  stroke: {
    type: "solid",
    thickness: 1,
    color: "#ccc",
  },// 或数组top right bottom left
  // 图层
  overflow: 0,
  opacity: 1,
  z: 1,
  hidden: false,
};

export const blockStyle = {
  constraints: {
    horizontal: 0,
    vertical: 2,
  },
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
  overflow: 'auto', // 
  opacity: 1,
  z: 1,
  hidden: false,
};

export const widgetStyle = {
  position: 2,
  top: 0,
  left: 0,
  margin: 12,
  padding: 12,
  width: 200,
  height: 200,
  border: {
    type: "solid",
    color: "#ccc",
    thickness: 1,
  },
  borderRadius: {
    type: 0, // 0 像素值 1 百分比
    value: 4, // px %
  }, // 或数组为top right bottom left
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
  textIndent: 0,
  textAlign: 0,
  baseline: 0,
  spacing: 0,
  wrap: 0,
  color: "#ccc",
  fontSize: 14,
  fontWeight: "normal",
  fontFamily: "",
  transform: {
    scaleX: 1,
    scaleY: 1,
    rotate: 0,
  },
  transformOrigin: {
    top: 50,
    left: 50,
  },
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
  stroke: {
    type: "solid",
    thickness: 1,
    color: "#ccc",
  },
  // overflow: 0,
  opacity: 1,
  z: 1,
  hidden: false,
};

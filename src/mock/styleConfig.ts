export const blockStyle = {
  constraints: {
    horizontal: 0,
    vertical: 2,
  },
  fill: [
    {
      id: '1',
      type: 'color',
      value: '#FFFFFF',
      hidden: false
    },
    {
      id: '2',
      type: 'color',
      value: '#FFFFFF',
      hidden: false
    },
    {
      id: '3',
      type: 'image',
      url: 'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp',
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
    {
      id: '4',
      type: 'linear',
      x1: 0,
      y1: 0,
      x2: 1,
      y2: 1,
      colorStops: [
        { type: 0, offset: 0, color: 'red', id: '1' },
        { type: 0, offset: 50, color: 'green', id: '2' },
        { type: 0, offset: 100, color: 'blue', id: '3' },
      ],
      repeat: 'no-repeat',
      hidden: false
    },
    {
      id: '5',
      type: 'radial',
      cx: 0,
      cy: 0,
      rx: 1,
      ry: 1,
      colorStops: [
        { type: 0, offset: 0, color: 'red', id: '1' },
        { type: 0, offset: 50, color: 'green', id: '2' },
        { type: 0, offset: 100, color: 'blue', id: '3' },
      ],
      repeat: 'no-repeat',
      rotate: 0,
      hidden: false
    }
  ],
  overflow: 'auto', // 
  opacity: 100,
  z: 1,
  hidden: false,
};

export const widgetStyle = {
  // 位置
  // position: 'absolute',
  // top: {
  //   type: 0, // 0 百分比 1 像素值
  //   value: 0
  // }, // 0-100 百分比 
  // left: {
  //   type: 0, // 0 百分比 1 像素值
  //   value: 0
  // }, // 0-100 百分比
  // 盒子
  margin: {
    type: 0,
    value: 0
  },
  padding: {
    type: 1,
    value: [1, 2, 3, 4]
  },
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
  textIndent: {    
    type: 'px', // px | em | %
    value: 0,
  },
  textAlign: 'start', // start | end | center | justify
  verticalAlign: 'baseline', // baseline | top | middle | bottom | super | sub 
  baseline: 0,
  spacing: 0,
  wrap: 0,
  color: "#ccc",
  fontSize: 14,
  fontWeight: "normal",
  fontFamily: "",
  lineHeight: /* {
    type: 0, // 0 px 1 em
    value: 0,
  } */'0',
  wordSpacing: /* {
    type: 0, // 0 px 1 em
    value: 0,
  } */'0',
  letterSpacing: /* {
    type: 0, // 0 px 1 em
    value: 0,
  } */'0',
  textDecoration: 'none', // none | underline | overline | line-through | blink
  textShadow: 'none', // none | length
  whiteSpace: 'normal', // normal | nowrap | pre | pre-wrap | pre-line
  wordBreak: 'normal', // normal | break-all | keep-all
  // --------变形------------
  transform: {
    scaleX: 1,
    scaleY: 1,
    rotate: 0,
  },
  transformOrigin: {
    top: /* {
      type: 0, // 0 百分比 1 像素值
      value: 0
    } */'0', // 0-100 百分比
    left: /* {
      type: 0, // 0 百分比 1 像素值
      value: 0
    }, */'0' // 0-100 百分比
  },
  // 填充
  fill: [
    {
      id: '1',
      type: 'color',
      value: '#FFFFFF',
      hidden: false
    },
    {
      id: '2',
      type: 'color',
      value: '#FFFFFF',
      hidden: false
    },
    {
      id: '3',
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
    {
      id: '4',
      type: 'linear',
      x1: 0,
      y1: 0,
      x2: 1,
      y2: 1,
      colorStops: [
        { type: 0, offset: 0, color: 'red' },
        { type: 0, offset: 50, color: 'green' },
        { type: 0, offset: 100, color: 'blue' },
      ],
      repeat: 'no-repeat'
    },
    {
      id: '5',
      type: 'radial',
      cx: 0,
      cy: 0,
      rx: 1,
      ry: 1,
      colorStops: [
        { type: 0, offset: 0, color: 'red' },
        { type: 0, offset: 50, color: 'green' },
        { type: 0, offset: 100, color: 'blue' },
      ],
      repeat: 'no-repeat'
    }
  ],
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

// @ts-nocheck
export const getInputDigitalProps = (store, field) => {
  return {
    value: store(field),
    onChange(value) {
      store(field, value);
    },
    min: 0,
    max: 1,
    controls: false,
    prefix: `${field}:`,
    size: "small",
    bordered: false,
  };
};

export const getLinearGradient = ({
  x1 = 0,
  y1 = 0,
  x2 = 1,
  y2 = 1,
  colorStops = [],
  repeat = "no-repeat",
}) => {
  const angle = 180 - (Math.atan((x2 - x1) / (y2 - y1)) * 180) / Math.PI;
  const top = `${y1 * 100}%`;
  const left = `${x1 * 100}%`;
  const width = `${Math.abs(x2 - x1) * 100}%`;
  const height = `${Math.abs(y2 - y1) * 100}%`;
  const color = `${repeat ? "repeating-" : ""
    }linear-gradient(${angle}deg, ${colorStops
      ?.map(
        ({ type, offset, color }) => `${color} ${offset}${type == 1 ? "px" : "%"}`
      )
      .join(", ")})`;
  return `${color} ${top} ${left}/${width} ${height}`;
};

export const getRadialGradient = ({
  cx = 0.5,
  cy = 0.5,
  rx = 0.5,
  ry = 0.5,
  colorStops = [],
  repeat = "no-repeat",
}) => {
  const color = `${repeat ? "repeating-" : ""}radial-gradient(${rx * 100}% ${ry * 100
    }% at ${cx * 100}% ${cy * 100}%, ${colorStops
      ?.map(
        ({ type, offset, color }) => `${color} ${offset}${type == 1 ? "px" : "%"}`
      )
      .join(", ")})`;
  return color;
};

export const handleTypeChange = (store) => (type) => {
  const oldStore = store();
  switch (type) {
    case "color":
      store(undefined, { value: "#ccc", hidden: false, ...oldStore, type });
      break;
    case "linear":
      store(undefined, {
        x1: 0,
        y1: 0,
        x2: 1,
        y2: 1,
        colorStops: [],
        repeat: "no-repeat",
        hidden: false,
        ...oldStore,
        type,
      });
      break;
    case "radial":
      store(undefined, {
        cx: 0,
        cy: 0,
        rx: 0.5,
        ry: 0.5,
        colorStops: [],
        repeat: "no-repeat",
        hidden: false,
        ...oldStore,
        type,
      });
      break;
    case "image":
      store(undefined, {
        url: "",
        position: {
          left: 0, // 0-100百分比
          top: 0, // ...
        },
        size: {
          width: {
            type: 0, // 0 百分比 1 像素 2 原比例,
            value: 100, // 0-100%, px, auto
          },
          height: {
            type: 0, // 0 百分比 1 像素 2 auto,
            value: 100, // 0-100%, px, auto
          },
        },
        repeat: "no-repeat",
        hidden: false,
        ...oldStore,
        type,
      });
      break;
    default:
      break;
  }
};

const JUSTIFY_CONTENT_VALUES = [
  "start",
  "center",
  "end",
  "space-between",
  "space-evenly",
];
const ALIGN_ITEMS_VALUES = [
  "start",
  "center",
  "end",
  "stretch",
  "space-evenly",
];

const getBackgroundSize = ({ type = 2, value = "auto" } = {}) => {
  switch (type) {
    case 0:
      return `${value}%`;
    case 1:
      return `${value}px`;
    case 2:
    default:
      return "auto";
  }
};

export const getBackgroundImage = ({
  url = "",
  position: { left = 0, top = 0 } = {},
  repeat = "no-repeat",
  size: { width, height } = {},
} = {}) => {
  return `url(${url}) ${left}% ${top}% / ${getBackgroundSize(
    width
  )} ${getBackgroundSize(height)} ${repeat}`;
};

export const getClipPath = (clipPath = { type: "none" }) => {
  switch (clipPath?.type) {
    case "inset":
      return `inset(${clipPath?.top}px ${clipPath?.right}px ${clipPath?.bottom}px ${clipPath?.left}px round ${clipPath?.round}px)`;
    case "circle":
      return `circle(${clipPath?.r}px at ${clipPath?.offsetX}px ${clipPath?.offsetY}px)`;
    case "ellipse":
      return `ellipse(${clipPath?.rx}px ${clipPath?.ry}px at ${clipPath?.offsetX}px ${clipPath?.offsetY}px)`;
    case "polygon":
      return `polygon(${clipPath?.points
        ?.map((point) => `${point.x}px ${point.y}px`)
        .join(",")})`;
    case "none":
    default:
      return undefined;
  }
};

export const convertToStyle = (
  {
    constraints: { horizontal = 0, vertical = 3 } = {},
    fill = [],
    overflow = "hidden",
    opacity = 100,
    z,
    hidden = false,
    clipPath,
    rotate,
  } = {},
  clipPathFlag = false
) => {
  const bg = [];
  fill.forEach((item) => {
    if (!item.hidden) {
      switch (item.type) {
        case "color":
          bg.push(`linear-gradient(0deg, ${item.value}, ${item.value})`);
          break;
        case "linear":
          bg.push(getLinearGradient(item));
          break;
        case "radial":
          bg.push(getRadialGradient(item));
        case "image":
          bg.push(getBackgroundImage(item));
          break;
        default:
          break;
      }
    }
  });
  const background = bg.join(",");

  if (clipPathFlag) {
    return {
      justifyContent: JUSTIFY_CONTENT_VALUES[horizontal],
      alignItems: ALIGN_ITEMS_VALUES[vertical],
      background,
      opacity: hidden ? 0 : opacity / 100,
      overflow,
      clipPath: getClipPath(clipPath),
    };
  }

  return {
    transform: `rotate(${-rotate}deg)`,
    // zIndex: z,
    // visibility: hidden ? "hidden" : "visible",
  };
};

const handleUnit = (props) => {
  if (isNaN(props)) {
    return props;
  } else {
    return `${props}px`;
  }
};

const handleArr = (props) => {
  const value = props.map((item) => handleUnit(item)).join(" ");
  return value;
};

export const convertToComponentStyle = ({
  margin = [],
  padding = [],
  width = 400,
  height = 400,
  borderRadius = [],
  boxShadow = [],
  textAlign,
  verticalAlign,
  color,
  fontSize,
  fontWeight,
  fontFamily,
  lineHeight,
  wordSpacing,
  textDecoration,
  transform,
  transformOrigin,
  fill = [],
  overflow,
  opacity = 100,
  z,
  hidden = false,
  clipPath
} = {}, clipPathFlag = false) => {
  const boxShadows = [];
  boxShadow?.forEach(
    ({ type, offsetX, offsetY, blur, spread, color, hidden }) => {
      if (!hidden) {
        boxShadows.push(
          `${color} ${offsetX}px ${offsetY}px ${blur}px ${spread}px ${type}`
        );
      }
    }
  );
  const bg = [];
  fill?.forEach((item) => {
    if (!item.hidden) {
      switch (item.type) {
        case "color":
          bg.push(`linear-gradient(0deg, ${item.value}, ${item.value})`);
          break;
        case "linear":
          bg.push(getLinearGradient(item));
          break;
        case "radial":
          bg.push(getRadialGradient(item));
        case "image":
          bg.push(getBackgroundImage(item));
          break;
        default:
          break;
      }
    }
  });

  if (clipPathFlag) {
    return {
      padding: handleArr(padding),
      borderRadius: handleArr(borderRadius),
      fontFamily,
      fontWeight,
      fontSize: handleUnit(fontSize),
      lineHeight: handleUnit(lineHeight),
      textAlign,
      verticalAlign,
      wordSpacing: handleUnit(wordSpacing),
      textDecoration,
      color,
      background: bg.join(","),
      boxShadow: boxShadows.join(","),
      overflow,
      zIndex: z,
      clipPath: getClipPath(clipPath),
    };
  }

  return {
    margin: handleArr(margin),
    width,
    height,
    transform: `scaleX(${transform?.scaleX}) scaleY(${transform?.scaleY}) rotate(${transform?.rotate}deg)`,
    transformOrigin: `${handleUnit(transformOrigin?.left)} ${handleUnit(
      transformOrigin?.top
    )}`,
    opacity: hidden ? 0 : opacity / 100,
    // visibility: hidden ? "hidden" : "visible",
  };
};

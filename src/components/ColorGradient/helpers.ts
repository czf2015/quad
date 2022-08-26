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

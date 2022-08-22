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
  x = 0,
  y = 0,
  x2 = 1,
  y2 = 1,
  colorStops = [],
  repeat = "no-repeat",
}) => {
  const angle = 180 - (Math.atan((x2 - x) / (y2 - y)) * 180) / Math.PI;
  const top = `${y * 100}%`;
  const left = `${x * 100}%`;
  const width = `${Math.abs(x2 - x) * 100}%`;
  const height = `${Math.abs(y2 - y) * 100}%`;
  const color = `${repeat ? 'repeating-' : ''}linear-gradient(${angle}deg, ${colorStops
    .map(
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
  const color = `${repeat ? 'repeating-' : ''}radial-gradient(${rx * 100}% ${ry * 100}% at ${cx * 100}% ${
    cy * 100
  }%, ${colorStops
    .map(
      ({ type, offset, color }) => `${color} ${offset}${type == 1 ? "px" : "%"}`
    )
    .join(", ")})`;
  return color;
};

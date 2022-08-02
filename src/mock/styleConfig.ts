export const blockStyle = {
  position: 2,
  top: 0,
  left: 0,
  constraints: {
    horizontal: 0,
    vertical: 2,
  },
  transform: {
    scale: 1,
    rotate: 0,
  },
  fill: [
    {
      background: "transparent",
      z: 1,
    },
  ],
  stroke: {
    type: "solid",
    thickness: 1,
    color: "#ccc",
  },
  opacity: 1,
  z: 1,
  hidden: false,
};

export const widgetStyle = {
  ...blockStyle,
  opacity: 1,
  z: 1,
  hidden: false,
  overflow: 0,
  textIndent: 0,
  textAlign: 0,
  baseline: 0,
  spacing: 0,
  wrap: 0,
  color: "#ccc",
  fontSize: 14,
  fontWeight: "normal",
  fontFamily: "",
  margin: 12,
  padding: 12,
  width: 200,
  height: 200,
  boxShadow: "",
  border: {
    type: "solid",
    color: "#ccc",
    thickness: 1,
  },
  borderRadius: "",
};

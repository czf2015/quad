// @ts-nocheck
export const handleOption = (option) => {
  const options = option.map((item, index) => ({ label: item, value: index }));
  return options;
};

export const handleDiagramsConfig = (styles, horValue, verValue, store) => {
  const handleValueChange = (litVal, value, isBetween) => {
    // litVal: 图形组件标识对应数值 value: 切换的状态值 isBetween: 当两端对齐时,图形组件提供的标识
    if (value === 3 && isBetween) {
      return {
        backgroundColor: "#409EFF",
      };
    } else if (litVal === value) {
      return {
        backgroundColor: "#409EFF",
      };
    }
  };
  return [
    {
      className: styles.top,
      style: handleValueChange(0, verValue, true),
      method: () => { store("constraints", { vertical: 0 }); }
    },
    {
      className: styles.bottom,
      style: handleValueChange(2, verValue, true),
      method: () => { store("constraints", { vertical: 2 }); }
    },
    {
      className: styles.left,
      style: handleValueChange(0, horValue, true),
      method: () => { store("constraints", { horizontal: 0 }); }
    },
    {
      className: styles.right,
      style: handleValueChange(2, horValue, true),
      method: () => { store("constraints", { horizontal: 2 }); }
    },
    {
      className: styles.hor,
      style: handleValueChange(1, horValue),
      method: () => { store("constraints", { horizontal: 1 }); }
    },
    {
      className: styles.ver,
      style: handleValueChange(1, verValue),
      method: () => { store("constraints", { vertical: 1 }); }
    }
  ]
}
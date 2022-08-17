// @ts-nocheck
import React from "react";
import { Input } from "antd";
import { useInputValue } from "@/hooks";
import { addIcon, minusIcon } from "../../icons";
import styles from "./index.module.less";

export const FillColorGroup = ({ bgColor, index, handleColorChange }) => {
  const { inputValue, handleInputChange, setResetInput } = useInputValue(bgColor);
  const isFitColorRule = /^#[0-9A-F]{6}$/i;
  const handleChange = (e) => {
    if (isFitColorRule.test(e.target.value)) {
      handleColorChange(e.target.value.toUpperCase(), index)
    } else {
      alert("输入不符合16进制颜色值规则");
      setResetInput((prev) => prev + 1);
    }
  };

  return (
    <div className={styles.input_group}>
      <Input
        className={styles.color_input}
        type="color"
        value={bgColor}
        onChange={handleChange}
      />
      <Input
        className={styles.value_input}
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleChange}
      />
    </div>
  );
};

export default ({ store }) => {
  const fillList = store("fill");
  const handleMinus = (index) => {
    fillList.splice(index, 1);
    store("fill", fillList);
  };

  const handleAdd = () => {
    fillList.unshift({ fill_type: "color", background: "#FFFFFF", z: 1 });
    store("fill", fillList);
  };

  // 子组件颜色值符合输入条件处理
  const handleColorChange = (value,index) => {
    const changeItem = { fill_type: "color", background: value, z: 1 };
    store("fill").splice(index, 1, changeItem);
    store("fill", store("fill"));
  }

  return (
    <div className={styles.fill}>
      <div className={styles.title}>
        <h4>填充</h4>
        <div className={styles.icon} onClick={handleAdd}>
          {addIcon()}
        </div>
      </div>
      {store("fill").map(({ background }, index) => {
        return (
          <div className={styles.content} key={index}>
            <FillColorGroup bgColor={background} index={index} handleColorChange={handleColorChange} />
            <div
              className={styles.icon}
              onClick={() => {
                handleMinus(index);
              }}
            >
              {minusIcon()}
            </div>
          </div>
        );
      })}
    </div>
  );
};

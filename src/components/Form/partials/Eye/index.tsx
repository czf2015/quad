/**
 * @Author 
 * @Description 
 * @Create who[when]
 * @Revise what --who[when]
 */

// @ts-nocheck
import React from "react";
import { Tooltip } from "antd";
import { useToggle } from "@/hooks";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import styles from './index.module.less'

export default ({ value, onChange, checkedChildren = <EyeOutlined />, uncheckedChildren = <EyeInvisibleOutlined /> }) => {
  const [checked, toggleChecked] = useToggle(value)
  const handleChange = () => {
    onChange?.(!checked)
    toggleChecked()
  }

  const tip = checked ? '显示' : '隐藏'

  return (
    <Tooltip tip={intl(tip)}>
      <span className={`${styles.custom_switch} ${checked ? styles.checked : styles.unchecked}`} onClick={handleChange}>
        {checked ? checkedChildren : uncheckedChildren}
      </span>
    </Tooltip>
  )
}

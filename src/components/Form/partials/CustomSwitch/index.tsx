/**
 * @Author 
 * @Description 
 * @Create who[when]
 * @Revise what --who[when]
 */

// @ts-nocheck
import React from "react";
import { useToggle } from "@/hooks";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import styles from './index.module.less'

export default ({ value, onChange, checkedChildren = <EyeOutlined />, uncheckedChildren = <EyeInvisibleOutlined /> }) => {
  const [checked, toggleChecked] = useToggle(value)
  const handleChange = () => {
    onChange?.(!checked)
    toggleChecked()
  }

  return (
    <span className={`${styles.custom_switch} ${checked ? styles.checked : styles.unchecked}`} onClick={handleChange}>
      {checked ? checkedChildren : uncheckedChildren}
    </span>
  )
}

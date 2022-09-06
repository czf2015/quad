import React from 'react';
import { Input, Popover } from '@/plugins/ui';
import { ChromePicker as ColorPicker } from 'react-color';
import { usePropsState } from '@/hooks';
import styles from './index.module.less';

export default ({ value = 'blue', onChange, hidden = false }) => {
  const [color, setColor] = usePropsState(value);
  const handleChange = (e) => {
    setColor(e.target.value);
  };
  const handleBlur = (e) => {
    onChange?.(e.target.value);
  };
  const handleColorChange = ({ hex }) => {
    onChange?.(hex);
    setColor(hex);
  };

  return (
    <label className={styles.color_picker}>
      <Popover content={<ColorPicker color={color} onChange={handleColorChange} />}>
        <div className={styles.effect} style={{ background: color }}></div>
      </Popover>
      <Input
        className={styles.input}
        style={{ display: hidden ? 'none' : undefined }}
        value={color}
        onChange={handleChange}
        onBlur={handleBlur}
        bordered={false}
        size="small"
      />
    </label>
  );
};

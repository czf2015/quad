import React from 'react';
import { Input, Popover } from '@/plugins/ui';
import { ChromePicker as ColorPicker } from 'react-color';
import { usePropsState } from '@/hooks';
import styles from './index.module.less';

export default ({ value = 'blue', onChange, mode = 'primary', }) => {
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
    <div className={`${styles.color_picker} ${mode == 'color' ? styles.color_mode : ''}`}>
      <Popover content={<ColorPicker color={color} onChange={handleColorChange} />}>
        <div className={styles.effect} style={{ background: color }}></div>
      </Popover>
      <Input
        className={styles.input}
        style={{ display: mode == 'color' ? 'none' : undefined }}
        value={color}
        onChange={handleChange}
        onBlur={handleBlur}
        bordered={false}
        size="small"
      />
    </div>
  );
};

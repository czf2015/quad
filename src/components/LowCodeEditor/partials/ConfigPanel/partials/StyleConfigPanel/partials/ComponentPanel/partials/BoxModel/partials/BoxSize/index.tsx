// @ts-nocheck
import React from 'react';
import { Tooltip, InputNumber } from 'antd';
import Lock from '@/components/Form/partials/Lock';
import { useToggle } from '@/hooks';
import { BorderOuterOutlined } from '@ant-design/icons';
import styles from './index.module.less';


export default ({ store, prefix = (
  <Tooltip title="宽高">
    <BorderOuterOutlined className={styles.icon} />
  </Tooltip>
) }) => {
  const [fixed, toggleFixed] = useToggle()

  const { width, height } = store()
  const handleSizeChange = (attr) => (value) => {
    if (fixed) {
      switch (attr) {
        case 'width':
          store(undefined, { width: value, height: height * value / width })
          break
        case 'height':
          store(undefined, { height: value, width: width * value / height })
          break
      }
    } else {
      store(attr, value)
    }
  }

  return (
    <div className={styles.container}>
      {prefix}
      <InputNumber
        className={styles.input}
        size="small"
        min={20}
        prefix="W:"
        bordered={false}
        value={width}
        onChange={handleSizeChange("width")}
      />
      <InputNumber
        className={styles.input}
        size="small"
        min={20}
        prefix="H:"
        bordered={false}
        value={height}
        onChange={handleSizeChange("height")}
      />
      <Lock value={fixed} onChange={toggleFixed} />
    </div>
  );
};

// @ts-nocheck
import React from 'react';
import { DisconnectOutlined, LinkOutlined } from '@ant-design/icons';
import styles from './index.module.less';

export default ({ value, onChange }) => {
  const Icon = value ? LinkOutlined : DisconnectOutlined
  return <Icon className={`${styles.lock}`} onClick={onChange} />
}
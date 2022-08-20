// ts-nocheck
import React from 'react';
import { FolderViewOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { Eyes } from '../Eyes';
import styles from './index.module.less';

export const BgImage = () => {
  return (
    <div className={styles.bg_image}>
      <Input className={styles.input} prefix={<FolderViewOutlined />} />
      <Eyes hidden={false} handleEyes={() => {}} />
    </div>
  );
};

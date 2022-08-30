// @ts-nocheck
import React from 'react';
import { Divider } from 'antd';
import Configure from '../Configure';
import styles from './index.module.less';

const Popup = ({ store, index }) => {
  const { type, offsetX, offsetY, blur, spread, color } = store('boxShadow')[index];
  const value = `${type} ${offsetX}px ${offsetY}px ${blur}px ${spread}px ${color}`;
  return (
    <div className={styles.popup}>
      <div className={styles.rect}>
        <div className={styles.element} style={{ boxShadow: value }} />
      </div>
      <Divider />
      <Configure store={store} index={index} />
    </div>
  );
};

export default Popup;

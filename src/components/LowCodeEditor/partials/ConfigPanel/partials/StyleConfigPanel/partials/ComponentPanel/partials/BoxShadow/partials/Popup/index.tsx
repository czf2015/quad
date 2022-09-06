// @ts-nocheck
import React from 'react';
import { Divider } from 'antd';
import Configure from '../Configure';
import styles from './index.module.less';

const Popup = ({ store,state, index }) => {
  const { type, offsetX, offsetY, blur, spread, color } = state[index];
  const value = `${color} ${offsetX}px ${offsetY}px ${blur}px ${spread}px ${type}`;
  return (
    <div className={styles.popup}>
      <div className={styles.rect}>
        <div className={styles.element} style={{ boxShadow: value }} />
      </div>
      <Divider />
      <Configure store={store} state={state} index={index} />
    </div>
  );
};

export default Popup;

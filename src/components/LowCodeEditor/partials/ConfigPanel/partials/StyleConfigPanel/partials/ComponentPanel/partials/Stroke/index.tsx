import React from 'react';
import StrokeShowPanel from './partials/StrokeShowPanel';
import styles from './index.module.less';

export const Stroke = ({ store, stroke }) => {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>边框</h4>
      <StrokeShowPanel store={store} stroke={stroke} />
    </div>
  );
};

// @ts-nocheck
import React, { useState } from 'react';
import { Divider, Switch } from 'antd';
import { config } from './helpers';
import { BorderIcon } from '../../../../../../icons';
import StrokeItem from '../StrokeItem';
import styles from './index.module.less';

export default ({ store, stroke, propsValue, checked, setChecked }) => {
  return (
    <div className={styles.container}>
      <div className={styles.rect}>
        <div
          className={styles.element}
          style={{
            borderTop: propsValue?.[0],
            borderRight: propsValue?.[1],
            borderBottom: propsValue?.[2],
            borderLeft: propsValue?.[3],
          }}
        />
      </div>
      <Divider />
      <Switch
        checkedChildren="合成"
        unCheckedChildren="分解"
        checked={checked}
        onChange={() => {
          setChecked((pre) => {
            return !pre;
          });
        }}
      />
      {checked ? (
        config(stroke)?.map(({ type, thickness, color, split, icon }, index) => (
          <StrokeItem
            key={index}
            index={index}
            stroke={stroke}
            icon={icon}
            store={store}
            type={type}
            thickness={thickness}
            color={color}
            isMore={split}
          />
        ))
      ) : (
        <StrokeItem
          icon={BorderIcon}
          stroke={stroke}
          store={store}
          type={stroke?.[0]?.type}
          thickness={stroke?.[0]?.thickness}
          color={stroke?.[0]?.color}
          isMore={false}
        />
      )}
    </div>
  );
};

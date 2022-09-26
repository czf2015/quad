// @ts-nocheck
import React from 'react';
import CustomInput from './partials/CustomInput';
import BoxSize from './partials/BoxSize';
import {
  RadiusUpleftOutlined,
  RadiusUprightOutlined,
  RadiusBottomrightOutlined,
  RadiusBottomleftOutlined,
  BorderTopOutlined,
  BorderRightOutlined,
  BorderBottomOutlined,
  BorderLeftOutlined
} from '@ant-design/icons'
import { MarginIcon, PaddingIcon, BorderRadiusIcon } from './icons';
import styles from './index.module.less';

export const BoxModel = ({
  title = "盒子",
  store,
  margin = ['0px', '0px', '0px', '0px'],
  padding = ['0px', '0px', '0px', '0px'],
  borderRadius = ['0px', '0px', '0px', '0px'],
}) => {
  return (
    <div className={styles.box}>
      <h4 className={styles.title}>{title}</h4>
      <BoxSize store={store} />
      <CustomInput store={store} name="margin" value={margin} icons={[MarginIcon, BorderTopOutlined, BorderRightOutlined, BorderBottomOutlined, BorderLeftOutlined]} />
      <CustomInput store={store} name="padding" value={padding} icons={[PaddingIcon, BorderTopOutlined, BorderRightOutlined, BorderBottomOutlined, BorderLeftOutlined]} />
      <CustomInput store={store} name="borderRadius" value={borderRadius} icons={[BorderRadiusIcon, RadiusUpleftOutlined, RadiusUprightOutlined, RadiusBottomrightOutlined, RadiusBottomleftOutlined]} />
    </div>
  );
};

// @ts-nocheck
import React, { useState } from 'react';
import { Segmented } from 'antd';
import { BgColorsOutlined, FileImageOutlined } from '@ant-design/icons';
import { ColorPicker, Eyes, BgImage } from '../common';
import { addIcon, minusIcon } from '../../icons';
import styles from './index.module.less';

const ColorModel = ({ store }) => {
  // 子组件颜色值符合输入条件处理
  const handleColorChange = (value) => {
    store('fill', { color: { hex: value } });
  };

  const handleEyes = () => {
    store('fill', { color: { hidden: !store('fill')?.color?.hidden } });
  };

  const handleBlur = (value) => {
    store('fill', { color: { alpha: value } });
  };

  return (
    <div className={styles.color_content}>
      <ColorPicker
        bgColor={store('fill')?.color?.hex}
        disabled={!store('fill')?.color?.hidden}
        number={store('fill')?.color?.alpha}
        handleColorChange={handleColorChange}
        handleBlur={handleBlur}
      />
      <Eyes hidden={store('fill')?.color?.hidden} handleEyes={handleEyes} />
    </div>
  );
};

const ImageModel = ({ store }) => {
  return store('fill')?.image?.map((item, index) => {
    return (
      <div className={styles.image_content} key={index}>
        <BgImage />
      </div>
    );
  });
};

export default ({ store }) => {
  const [model, setModel] = useState('color');

  const handleAdd = () => {
    fillList.unshift({ fill_type: 'color', background: '#FFFFFF', z: 1 });
    store('fill', fillList);
  };

  const handleModelChange = (e) => {
    setModel(e);
  };

  return (
    <div className={styles.fill}>
      <h4>填充</h4>
      <div className={styles.title}>
        <Segmented
          options={[
            { label: <BgColorsOutlined />, value: 'color' },
            { label: <FileImageOutlined />, value: 'image' },
          ]}
          onChange={handleModelChange}
        />
        {model == 'image' && (
          <div className={styles.icon} onClick={handleAdd}>
            {addIcon()}
          </div>
        )}
      </div>
      {model == 'color' && <ColorModel store={store} />}
      {model == 'image' && <ImageModel store={store} />}
    </div>
  );
};

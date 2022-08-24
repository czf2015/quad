// @ts-nocheck
import React, { useState } from 'react';
import { Upload, Input, InputNumber, Select } from 'antd';
import { useInputValue } from '@/hooks';
import { sizeOptions, repeatOptions } from './config';
import styles from './index.module.less';

const Url = ({ store }) => {
  const { inputValue, handleInputChange } = useInputValue(store('url'));
  const handleBlur = (e) => {
    store('url', e.target.value);
  };

  return (
    <div className={styles.row_wrap}>
      <span>路径:</span>
      <Input
        size="small"
        className={styles.input}
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleBlur}
      />
    </div>
  );
};

const Position = ({ store }) => {
  const handleLeftBlur = (e) => {
    if (e.target.value <= 100 && e.target.value >= 0) {
      store('position', { left: e.target.value });
    }
  };
  const handleTopBlur = (e) => {
    if (e.target.value <= 100 && e.target.value >= 0) {
      store('position', { top: e.target.value });
    }
  };

  return (
    <div className={styles.row_wrap}>
      <span>位置:</span>
      <div className={styles.select_warp}>
        <InputNumber
          prefix="左:"
          min={0}
          max={1001}
          size="small"
          className={styles.num_input1}
          defaultValue={store('position')?.left}
          onBlur={handleLeftBlur}
        />
        <InputNumber
          prefix="上:"
          min={0}
          max={1001}
          size="small"
          className={styles.num_input1}
          defaultValue={store('position')?.top}
          onBlur={handleTopBlur}
        />
      </div>
    </div>
  );
};

const Size = ({ store }) => {
  const handleWidthChange = (value) => {
    if (value == 2) {
      store('size', { width: { type: value, value: 'auto' } });
    } else {
      store('size', { width: { type: value, value: 100 } });
    }
  };

  const handleHeightChange = (value) => {
    if (value == 2) {
      store('size', { height: { type: value, value: 'auto' } });
    } else {
      store('size', { height: { type: value, value: 100 } });
    }
  };

  const handleWidthBlur = (e) => {
    store('size', { width: { value: e.target.value } });
  };

  const handleHeightBlur = (e) => {
    store('size', { height: { value: e.target.value } });
  };

  const wType = store('size')?.width?.type == 2 ? 'none' : '';
  const hType = store('size')?.height?.type == 2 ? 'none' : '';

  return (
    <div className={styles.row_wrap}>
      <span>尺寸:</span>
      <div className={styles.select_warp}>
        <Input.Group compact>
          <InputNumber
            size="small"
            controls={false}
            className={styles.num_input2}
            style={{ display: wType }}
            value={store('size')?.width?.value}
            onBlur={handleWidthBlur}
          />
          <Select
            size="small"
            className={styles.select}
            options={sizeOptions}
            value={store('size')?.width?.type}
            onChange={handleWidthChange}
          />
        </Input.Group>
        <Input.Group compact style={{ marginLeft: 7 }}>
          <InputNumber
            size="small"
            controls={false}
            className={styles.num_input2}
            style={{ display: hType }}
            value={store('size')?.height?.value}
            onBlur={handleHeightBlur}
          />
          <Select
            size="small"
            className={styles.select}
            options={sizeOptions}
            value={store('size')?.height?.type}
            onChange={handleHeightChange}
          />
        </Input.Group>
      </div>
    </div>
  );
};

const Repeat = ({ store }) => {
  const handleChange = (value) => {
    store('repeat', value);
  };

  return (
    <div className={styles.repeat_wrap}>
      <span>重复:</span>
      <Select
        size="small"
        className={styles.repeat_select}
        options={repeatOptions}
        value={store('repeat')}
        onChange={handleChange}
      />
    </div>
  );
};

export const BgImage = ({ store }) => {
  const [hoverState, setHoverState] = useState(false);
  const bgConfig = {
    height: 200,
    backgroundImage: `
    url(${store('url')}), 
    url(https://tse4-mm.cn.bing.net/th/id/OIP-C.hFl4Ypw6003lIYmFfi39ywHaE-?pid=ImgDet&rs=1)
    `,
    backgroundPosition: 'center, center',
    backgroundRepeat: 'no-repeat, no-repeat',
    backgroundSize: 'contain, cover',
  };

  const handleMouseEnter = () => {
    setHoverState(true);
  };

  const handleMouseLeave = () => {
    setHoverState(false);
  };

  return (
    <div className={styles.bg_image} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div style={bgConfig} />
      {hoverState && (
        <div className={styles.mask}>
          <div className={styles.btn}>choose image</div>
        </div>
      )}
      <div className={styles.config_panel}>
        <Url store={store} />
        <Position store={store} />
        <Size store={store} />
        <Repeat store={store} />
      </div>
    </div>
  );
};

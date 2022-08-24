// @ts-nocheck
import React, { useState } from 'react';
import { Upload, Input, InputNumber, Select } from 'antd';
import styles from './index.module.less';

const options = [
  {
    label: '%',
    value: 0,
  },
  {
    label: 'px',
    value: 1,
  },
  {
    label: 'auto',
    value: 2,
  },
];

export const BgImage = ({ store }) => {
  const [hoverState, setHoverState] = useState(false);

  const bgConfig = {
    height: 200,
    backgroundImage: `url(https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp), url(https://tse4-mm.cn.bing.net/th/id/OIP-C.hFl4Ypw6003lIYmFfi39ywHaE-?pid=ImgDet&rs=1)`,
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
      {/* {hoverState && ( */}
      <div className={styles.mask}>
        <div className={styles.btn}>choose image</div>
      </div>
      {/* )} */}
      <div className={styles.config_panel}>
        <div className={styles.row_wrap}>
          <span>路径:</span>
          <Input size="small" className={styles.input} />
        </div>
        <div className={styles.row_wrap}>
          <span>位置:</span>
          <div className={styles.select_warp}>
            <InputNumber
              prefix="左:"
              min={0}
              max={100}
              size="small"
              className={styles.num_input1}
              value={store('position')?.left}
            />
            <InputNumber
              prefix="上:"
              min={0}
              max={100}
              size="small"
              className={styles.num_input1}
              value={store('position')?.right}
            />
          </div>
        </div>
        <div className={styles.row_wrap}>
          <span>尺寸:</span>
          <div className={styles.select_warp}>
            <Input.Group compact>
              <InputNumber
                size="small"
                controls={false}
                className={styles.num_input2}
                value={store('size')?.width?.value}
              />
              <Select
                size="small"
                className={styles.select}
                options={options}
                value={store('size')?.width?.type}
              />
            </Input.Group>
            <Input.Group compact style={{ marginLeft: 7 }}>
              <InputNumber
                size="small"
                controls={false}
                className={styles.num_input2}
                value={store('size')?.height?.value}
              />
              <Select
                size="small"
                className={styles.select}
                options={options}
                value={store('size')?.height?.type}
              />
            </Input.Group>
          </div>
        </div>
      </div>
    </div>
  );
};

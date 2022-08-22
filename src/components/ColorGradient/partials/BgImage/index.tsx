import React, { useState } from 'react';
import { Upload, Input } from 'antd';
import styles from './index.module.less';
import FormModal from '@/components/FormModal';

export const BgImage = () => {
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
      {hoverState && (
        <div className={styles.mask}>
          <div className={styles.btn}>choose image</div>
        </div>
      )}
      <div className={styles.config_panel}>
        <div className={styles.row_wrap}>
          <span>路径: </span>
          <Input size="small" />
        </div>
      </div>
    </div>
  );
};

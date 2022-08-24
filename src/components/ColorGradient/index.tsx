import React from 'react';
import { Select } from '@/plugins/ui';
import { LinearGradient, RadialGradient, ColorPicker, BgImage } from './partials';
import { handleTypeChange } from './helpers';
import { BACKGROUND_OPTIONS } from '@/constants/OPTIONS';
import styles from './index.module.less';

export default ({ store }) => {
  const type = store('type');
  const Gradient =
    type == 'radial' ? RadialGradient : type == 'linear' ? LinearGradient : type == 'image' ? BgImage : ColorPicker;

  return (
    <div className={styles.color_gradient}>
      <Select
        className={styles.select}
        value={type}
        onChange={handleTypeChange(store)}
        options={BACKGROUND_OPTIONS} /* bordered={false} */
      />
      <Gradient store={store} />
    </div>
  );
};

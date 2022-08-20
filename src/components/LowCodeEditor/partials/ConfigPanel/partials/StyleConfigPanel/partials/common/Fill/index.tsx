import React from 'react'
import { Dropdown, Input } from 'antd';
import ColorGradient from '@/components/ColorGradient'
import { ColorPicker, Eyes } from '../';
import { addIcon, minusIcon } from '../../../icons';
import styles from './index.module.less';

const ColorModel = ({ store, config, index, state }) => {
  // 子组件颜色值符合输入条件处理
  const handleColorChange = (value) => {
    const updateConfig = { type: config?.type, value: value, hidden: config?.hidden };
    state.splice(index, 1, updateConfig);
    store('fill', state);
  };

  const handleEyes = () => {
    const updateConfig = { type: config?.type, value: config?.value, hidden: !config?.hidden };
    state.splice(index, 1, updateConfig);
    store('fill', state);
  };

  const handleMinus = () => {
    state.splice(index, 1);
    store('fill', state);
  };

  return (
    <div className={styles.color_content}>
      {/* <ColorPicker bgColor={config?.value} disabled={config?.hidden} handleColorChange={handleColorChange} /> */}
      <div className={styles.flex}>
        <Dropdown overlay={<ColorGradient />} trigger={['click']} >
          <span className={styles.effect} style={{ background: /* store('fill')?.color?.value */'red' }}></span>
        </Dropdown>
        <Input className={styles.input}  /* value={color} onChange={handleChange}  */ size="small" />
      </div>
      <div className={styles.icon_group}>
        <Eyes hidden={store('fill')?.color?.hidden} handleEyes={handleEyes} />
        <span className={styles.icon} onClick={handleMinus}>
          {minusIcon()}
        </span>
      </div>
    </div>
  );
};

export default ({ store }) => {
  const fillState = store('fill');

  const handleAdd = () => {
    fillState.unshift({ type: 'color', value: '#FFFFFF', hidden: false });
    store('fill', fillState);
  };

  return (
    <div className={styles.fill}>
      <div className={styles.title}>
        <h4>填充</h4>
        <div className={styles.icon} onClick={handleAdd}>
          {addIcon()}
        </div>
      </div>
      <div>
        {store('fill')?.map((item, index) => {
          switch (item.type) {
            case 'color':
              return <ColorModel key={index} store={store} config={item} index={index} state={fillState} />;
            // case 'image':
            //   return <ImageModel store={store} key={index} index={index} />;
          }
        })}
      </div>
    </div>
  )
}
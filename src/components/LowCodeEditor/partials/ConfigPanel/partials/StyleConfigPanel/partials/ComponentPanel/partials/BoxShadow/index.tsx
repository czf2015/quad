// @ts-nocheck
import React from 'react';
import { Popover, Input } from 'antd';
import Popup from './partials/Popup';
import Eye from '@/components/Form/partials/CustomSwitch';
import Copy from '@/components/Copy';
import { dragSort } from './helper';
import { HolderOutlined, PlusOutlined, MinusOutlined, CopyOutlined } from '@ant-design/icons';
import styles from './index.module.less';

export const BoxShadow = ({ store }) => {
  const boxShadow = store('boxShadow');
  const add = () => {
    store('boxShadow', [{ type: 'none', offsetX: 2, offsetY: 2, blur: 2, spread: 4, color: '#ccc' }, ...boxShadow]);
  };

  const remove = (index) => {
    boxShadow.splice(index, 1);
    store('boxShadow', boxShadow);
  };

  const handleEyes = (index) => {
    const item = { ...boxShadow[index], hidden: !boxShadow[index]?.hidden };
    boxShadow.splice(index, 1, item);
    store('boxShadow', boxShadow);
  };

  const handleDragStart = (dragId) => (e) => {
    e.dataTransfer.setData('dragId', dragId);
  };
  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const handleDrop = (dropId) => (e) => {
    const dragId = e.dataTransfer.getData('dragId');
    store('boxShadow', dragSort(store('boxShadow'), dragId, dropId));
  };

  return (
    <div className={styles.shadow}>
      <div className={styles.title}>
        <h4>阴影</h4>
        <PlusOutlined onClick={add} />
      </div>
      <div className={styles.content}>
        {boxShadow?.map(({ type, offsetX, offsetY, blur, spread, color, hidden }, index) => {
          const value = `${type} ${offsetX}px ${offsetY}px ${blur}px ${spread}px ${color}`;
          return (
            <div
              className={styles.item_wrapper}
              key={index}
              onDragOver={(e) => {
                handleDragOver(e);
              }}
              onDrop={handleDrop(index)}
            >
              <HolderOutlined className={styles.holder_btn} draggable onDragStart={handleDragStart(index)} />
              <div className={styles.input_group}>
                <div className={styles.color_mode}>
                  <Popover content={<Popup store={store} index={index} />} placement="leftBottom" trigger="click">
                    <span className={styles.effect} style={{ background: color }}></span>
                  </Popover>
                  <Input className={styles.input} size="small" value={value} disabled={true} bordered={false} />
                </div>
                <Copy value={value} />
              </div>
              <Eye value={!hidden} onChange={() => handleEyes(index)} />
              <MinusOutlined
                onClick={() => {
                  remove(index);
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

import React, { useEffect } from 'react';
import { Button, Tooltip, Popover, Input, message } from 'antd';
import Eye from '@/components/Form/partials/CustomSwitch';
import ColorGradient from '@/components/ColorGradient';
import { usePropsState, useSubStore } from '@/hooks';
import { getRadialGradient, getLinearGradient } from '@/components/ColorGradient/helpers';
import uuid from '@/plugins/uuid';
import { copyText } from '@/utils/dom';
import { dragSort } from '@/utils/array';
import { HolderOutlined, PlusOutlined, MinusOutlined, CopyOutlined } from '@ant-design/icons';
import styles from './index.module.less';

const CustomInput = ({ type, value, onBlur }) => {
  const [inputValue, setInputValue] = usePropsState(value);
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleBlur = (e) => {
    if (type == 'color') {
      const reg = /^#([A-Fa-f0-9]{6,8}|[A-Fa-f0-9]{3,4})$/;
      if (reg.test(e.target.value)) {
        onBlur?.(e);
      } else {
        setInputValue(value);
        message.error('非法颜色值！');
      }
    } else {
      onBlur?.(e);
    }
  };

  return (
    <Input
      className={styles.input}
      value={inputValue}
      disabled={type == 'linear' || type == 'radial'}
      size="small"
      onChange={handleChange}
      onBlur={handleBlur}
      bordered={false}
    />
  );
};

export default ({ title = '填充', store }) => {
  const fill = store('fill');

  const add = () => {
    store('fill', [{ type: 'color', value: '#FFFFFF', hidden: false, id: uuid() }, ...fill]);
  };

  return (
    <div className={styles.fill}>
      <div className={styles.title}>
        <h4>{title}</h4>
        <PlusOutlined onClick={add} />
      </div>
      <div className={styles.content}>
        {fill.map((item) => {
          const { type, value: defaultValue, id, hidden, url } = item;

          const remove = () => {
            store(
              'fill',
              fill.filter((item) => item.id != id)
            );
          };

          const subStore = useSubStore(store, 'fill', id)

          let value; /*  = defaultValue */
          switch (type) {
            case 'linear':
              value = getLinearGradient(item);
              break;
            case 'radial':
              value = getRadialGradient(item);
              break;
            case 'image':
              value = url;
              break;
            default:
              value = defaultValue;
              break;
          }

          const copy = () => copyText(value);

          const handleBlur = (e) => {
            if (type == 'image') {
              subStore('url', e.target.value);
            } else {
              subStore('value', e.target.value);
            }
          };

          const handleDragStart = (dragId) => (e) => {
            e.dataTransfer.setData('dragId', dragId);
          };
          const handleDragOver = (e) => {
            e.preventDefault();
          };
          const handleDrop = (dropId) => (e) => {
            const dragId = e.dataTransfer.getData('dragId');
            store('fill', dragSort(store('fill'), dragId, dropId));
          };

          return (
            <div className={styles.item_wrapper} key={id} onDragOver={handleDragOver} onDrop={handleDrop(id)}>
              <HolderOutlined className={styles.holder_btn} draggable onDragStart={handleDragStart(id)} />
              <div className={styles.input_group}>
                <div className={styles.color_mode}>
                  <Popover content={<ColorGradient store={subStore} />} placement="leftBottom">
                    <span
                      className={styles.effect}
                      style={{ background: type == 'image' ? `url(${value}) no-repeat center/cover` : value }}
                    ></span>
                  </Popover>
                  <CustomInput type={type} value={value} onBlur={handleBlur} />
                </div>
                <Tooltip title="复制">
                  <Button icon={<CopyOutlined />} className={styles.copy} size="small" onClick={copy} />
                </Tooltip>
              </div>
              <div className={styles.icon_group}>
                <Eye value={!hidden} onChange={() => subStore('hidden', !hidden)} />
                <MinusOutlined onClick={remove} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { Input, Popover } from 'antd';
import { BorderIcon } from '../../../../../../icons';
import { Eyes } from '../../../../../common';
import Copy from '@/components/Copy';
import StrokeConfigPanel from '../StrokeConfigPanel';
import styles from './index.module.less';

export default ({
  store,
  stroke = [
    {
      type: 'solid',
      thickness: '1px',
      color: 'red',
      none: false,
    },
    {
      type: 'solid',
      thickness: '2px',
      color: 'blue',
      none: false,
    },
    {
      type: 'solid',
      thickness: '1px',
      color: 'green',
      none: false,
    },
    {
      type: 'solid',
      thickness: '1px',
      color: 'yellow',
      none: false,
    },
  ],
}) => {
  const [renderObj, setRenderObj] = useState({});
  const [checked, setChecked] = useState();
  const [closeEyes, setCloseEyes] = useState(stroke?.[0]?.none);
  const arr = stroke?.map(({ type, thickness, color }) => `${thickness} ${type} ${color}`);
  const handleOutConfig = () => {
    let obj = {};
    const arr = stroke?.map(({ type, thickness, color }) => `${thickness} ${type} ${color}`);
    const b = arr?.every((el) => el === arr[0]);
    debugger;
    setChecked(!b);
    if (b) {
      obj.value = `border: ${arr[0] || 'none'}`;
      obj.color = `border: ${stroke?.[0]?.color}`;
      debugger;
      setRenderObj(obj);
    } else {
      obj.value = `borderTop: ${arr[0] || 'none'}, borderRight: ${arr[1] || 'none'}, borderBottom: ${
        arr[2] || 'none'
      }, borderLeft: ${arr[3] || 'none'}`;
      obj.color =
        'repeating-linear-gradient(135deg, #c74518 0%, #d0d219 30%, #1ed055 60%, #4708cb 100%) 0% 0%/100% 100%';
      setRenderObj(obj);
    }
  };

  const handleEyes = () => {
    const arr = stroke?.map((item) => ({ ...item, none: !openEyes }));
    store('stroke', arr);
    setCloseEyes((pre) => !pre);
  };

  useEffect(() => {
    handleOutConfig();
  }, [arr.toString()]);

  return (
    <div className={styles.container}>
      <BorderIcon />
      <div className={styles.color_mode}>
        <Popover
          placement="leftBottom"
          trigger="click"
          content={
            <StrokeConfigPanel
              store={store}
              stroke={stroke}
              propsValue={arr}
              checked={checked}
              setChecked={setChecked}
            />
          }
        >
          <span className={styles.effect} style={{ background: renderObj.color }} />
        </Popover>
        <Input className={styles.input} size="small" value={renderObj.value} disabled={true} bordered={false} />
        <Copy value={renderObj.value} />
      </div>
      <div className={styles.eye}>
        <Eyes hidden={closeEyes} handleEyes={handleEyes} />
      </div>
    </div>
  );
};

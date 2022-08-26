// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { InputNumber } from 'antd';
import { SplitIcon, UnitIcon } from '../../../common';
import styles from './index.module.less';

const Margins = ({ label, type, value, isDisconnect, handleBlur, handleNumItemBlur, handleUnit, handleDisconnect }) => {
  const [disconnect, setDisconnect] = useState(false);

  useEffect(() => {
    if (typeof value == 'object') {
      setDisconnect(true);
    } else {
      setDisconnect(false);
    }
  }, [value]);

  const renderNumberInputs = () => {
    return value?.map((item, index) => (
      <InputNumber
        key={index}
        style={{ width: 40, marginLeft: 8 }}
        size="small"
        defaultValue={item}
        onBlur={(e) => {
          handleNumItemBlur(e, index);
        }}
      />
    ));
  };

  return (
    <div className={styles.item}>
      <div>
        <span>{label}:</span>
        {disconnect ? (
          renderNumberInputs()
        ) : (
          <InputNumber style={{ width: 160, marginLeft: 10 }} size="small" defaultValue={value} onBlur={handleBlur} />
        )}
      </div>
      <div>
        <UnitIcon unit={type} handleUnit={handleUnit} />
        {isDisconnect && (
          <SplitIcon
            disconnect={disconnect}
            handleDisconnect={() => {
              handleDisconnect(disconnect, setDisconnect);
            }}
          />
        )}
      </div>
    </div>
  );
};

export const Box = ({ store }) => {
  const margins = [
    {
      label: '内边距',
      type: store('padding')?.type,
      value: store('padding')?.value,
      isDisconnect: true,
      handleBlur: (e) => {
        store('padding', { value: Number(e.target.value) });
      },
      handleNumItemBlur: (e, index) => {
        const padList = store('padding')?.value;
        padList[index] = Number(e.target.value);
        store('padding', { value: padList });
      },
      handleUnit: () => {
        if (store('padding')?.type == 0) {
          store('padding', { type: 1 });
        } else {
          store('padding', { type: 0 });
        }
      },
      handleDisconnect: (disconnect, setDisconnect) => {
        if (disconnect) {
          store('padding', { value: 0 });
          setDisconnect((pre) => !pre);
        } else {
          store('padding', {
            value: [store('padding')?.value, store('padding')?.value, store('padding')?.value, store('padding')?.value],
          });
          setDisconnect((pre) => !pre);
        }
      },
    },
    {
      label: '外边距',
      type: store('margin')?.type,
      value: store('margin')?.value,
      isDisconnect: true,
      handleBlur: (e) => {
        store('margin', { value: Number(e.target.value) });
      },
      handleNumItemBlur: (e, index) => {
        const marList = store('margin')?.value;
        marList[index] = Number(e.target.value);
        store('margin', { value: marList });
      },
      handleUnit: () => {
        if (store('margin')?.type == 0) {
          store('margin', { type: 1 });
        } else {
          store('margin', { type: 0 });
        }
      },
      handleDisconnect: (disconnect, setDisconnect) => {
        if (disconnect) {
          store('margin', { value: 0 });
          setDisconnect((pre) => !pre);
        } else {
          store('margin', {
            value: [store('margin')?.value, store('margin')?.value, store('margin')?.value, store('margin')?.value],
          });
          setDisconnect((pre) => !pre);
        }
      },
    },
  ];

  return (
    <div className={styles.box}>
      <h4 className={styles.title}>盒子模型</h4>
      {margins?.map((item, index) => (
        <Margins key={index} {...item} />
      ))}
    </div>
  );
};

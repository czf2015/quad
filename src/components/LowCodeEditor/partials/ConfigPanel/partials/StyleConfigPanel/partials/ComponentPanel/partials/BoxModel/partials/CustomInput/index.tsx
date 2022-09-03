// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { Input, Tooltip } from 'antd';
import { SplitIcon } from '../../../../../common';
import { marginIcon } from '../../../../../../icons';
import { renderMarginsIcon } from '../../helper';
import { useInputValue } from '@/hooks';
import styles from './index.module.less';

const InputItem = ({ index, defaultValue, onBlur, onFocus }) => {
  const { inputValue, handleInputChange } = useInputValue(defaultValue);
  return (
    <Input
      className={styles.input2}
      bordered={false}
      value={inputValue}
      onChange={handleInputChange}
      onBlur={(e) => {
        onBlur(e, index);
      }}
      onFocus={onFocus}
    />
  );
};

export default ({ store, title, store_name, renderIcon }) => {
  const [disconnect, setDisconnect] = useState(true);
  const [index, setIndex] = useState(0);
  const [inputValue, setInputValue] = useState();
  const value = store(store_name);
  const Icon = renderIcon(disconnect, index);

  const isArrItemEqual = () => {
    if (value.every((el) => el === value[0])) {
      setInputValue(value[0]);
    } else {
      setInputValue('Mixed');
      setDisconnect(false);
    }
  };

  useEffect(() => {
    isArrItemEqual();
  }, [value.toString()]);

  const handleDisconnect = () => {
    setDisconnect((pre) => !pre);
  };

  const handleItemBlur = (e, index) => {
    const padList = value;
    padList[index] = e.target.value;
    store(store_name, [...padList]);
  };

  const handleSingleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSingleBlur = (e) => {
    const rule = /^([0-9]+)(px|%|)$/;
    if (rule.test(e.target.value)) {
      // 是否满足数字/px/%结尾,满足修改多个内容
      const createArr = Array(4).fill(e.target.value);
      store(store_name, createArr);
    } else if (value.every((el) => el === value[0])) {
      // 如果多个内容相同,不满足条件时,单个输入框复原值一致
      setInputValue(value[0]);
    } else {
      setInputValue('Mixed'); // 都不满足,认为是混合
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.input_wrap}>
        <Tooltip title={title}>
          <Icon className={styles.icon} />
        </Tooltip>
        {disconnect ? (
          <Input
            className={styles.input}
            bordered={false}
            value={inputValue}
            onChange={handleSingleChange}
            onBlur={handleSingleBlur}
          />
        ) : (
          <>
            {value?.map((item, index) => (
              <InputItem
                key={index}
                index={index}
                defaultValue={item}
                onBlur={handleItemBlur}
                onFocus={() => {
                  setIndex(index);
                }}
              />
            ))}
          </>
        )}
        <SplitIcon
          style={{ position: 'absolute', right: 0, top: 6 }}
          disconnect={disconnect}
          handleDisconnect={handleDisconnect}
        />
      </div>
    </div>
  );
};

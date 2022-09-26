// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { Input, Tooltip } from 'antd';
import Lock from '@/components/Form/partials/Lock';
import { useToggle } from '@/hooks';
import styles from './index.module.less';

export default ({ store, title, name, value, icons }) => {
  const [locked, toggleLocked] = useToggle(true);
  const lock = <Lock value={locked} onChange={toggleLocked} />

  const [curIdx, setCurIdx] = useState(0);
  const Icon = locked ? icons[0] : icons[curIdx]
  const prefix = (
    <Tooltip title={title}>
      <Icon className={styles.icon} />
    </Tooltip>
  )

  const [inputValue, setInputValue] = useState();
  const resetInputValue = () => {
    if (value?.every((item) => item === value?.[0])) {
      setInputValue(value?.[0]);
    } else {
      setInputValue('Mixed');
      if (locked) {
        toggleLocked()
      }
    }
  }
  useEffect(resetInputValue, value);
  const Combination = ({ value: inputValue }) => {
    const handleChange = (e) => {
      setInputValue(e.target.value);
    };
    const handleBlur = (e) => {
      const newVal = e.target.value
      const reg = /^([0-9]+)(px|%|)$/;
      debugger
      if (reg.test(newVal)) {
        const newVals = Array(4).fill(newVal);
        store(name, newVals);
      } else {
        resetInputValue();
      }
    };
    return (
      <Input
        className={styles.combination_input}
        value={inputValue}
        onChange={handleChange}
        onBlur={handleBlur}
        bordered={false}
      />
    )
  }
  const Separation = ({ value: inputValues }) => inputValues?.map((inputValue, idx) => {
    const handleBlur = (e) => {
      const newInputValue = e.target.value
      const newInputValues = inputValues.map((inputValue, idx2) => idx2 == idx ? newInputValue : inputValue);
      store(name, newInputValues);
    };
    const handleFocus = (e) => {
      setCurIdx(idx + 1)
    }
    return (
      <Input
        className={styles.separation_input}
        defaultValue={inputValue}
        onBlur={handleBlur}
        onFocus={handleFocus}
        bordered={false}
        key={idx}
      />
    )
  })
  const inputs = locked ? <Combination value={inputValue} /> : <Separation value={value} />

  return (
    <div className={styles.wrapper}>
      {prefix}
      {inputs}
      {lock}
    </div>
  )
};

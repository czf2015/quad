// @ts-nocheck
import React, {useState, useEffect} from 'react';
import { InputNumber } from 'antd';
import { SplitIcon, UnitIcon } from '../ActionIcon';
import styles from './index.module.less';

export const CustomInput = ({ label, type, value, isDisconnect, handleBlur, handleNumItemBlur, handleUnit, handleDisconnect,labelMarginLeft = 0 }) => {
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
        controls={false}
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
        <span style={{marginLeft: labelMarginLeft}}>{label}:</span>
        {disconnect ? (
          renderNumberInputs()
        ) : (
          <InputNumber style={{ width: 180, marginLeft: 10 }} size="small" defaultValue={value} onBlur={handleBlur} />
        )}
      </div>
      <div>
        <UnitIcon unit={type} handleUnit={handleUnit} />
        <SplitIcon
            disconnect={disconnect}
            handleDisconnect={() => {
              handleDisconnect(disconnect, setDisconnect);
            }}
            style={{ visibility: isDisconnect ? 'visible' : 'hidden' }}
          />
      </div>
    </div>
  );
}
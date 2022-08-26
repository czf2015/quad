// @ts-nocheck
import React from 'react';
import { DisconnectOutlined, LinkOutlined, PercentageOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';

export const SplitIcon = ({ disconnect, handleDisconnect }) => {
  const Icon = disconnect ? DisconnectOutlined : LinkOutlined;

  return (
    <Tooltip title={disconnect ? '合成' : '分解'}>
      <Icon onClick={handleDisconnect} style={{ marginLeft: 12 }} />
    </Tooltip>
  );
};

const Px = ({ onClick }) => (
  <span onClick={onClick} style={{ cursor: 'pointer' }}>
    PX
  </span>
);

export const UnitIcon = ({ unit, handleUnit }) => {
  const Icon = unit == 0 ? Px : PercentageOutlined;

  return (
    <Tooltip title={unit == 0 ? '像素' : '百分比'}>
      <Icon onClick={handleUnit} />
    </Tooltip>
  );
};

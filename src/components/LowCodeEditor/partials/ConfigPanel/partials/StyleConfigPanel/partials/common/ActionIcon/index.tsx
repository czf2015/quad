// @ts-nocheck
import React from 'react';
import { DisconnectOutlined, LinkOutlined, PercentageOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';

export const SplitIcon = ({ disconnect, handleDisconnect, style }) => {
  const Icon = disconnect ? LinkOutlined : DisconnectOutlined;

  return (
    <Tooltip title={disconnect ? '分解' : '合成'}>
      <Icon onClick={handleDisconnect} style={{ marginLeft: 12, ...style }} />
    </Tooltip>
  );
};

const Px = ({ onClick }) => (
  <span onClick={onClick} style={{ cursor: 'pointer' }}>
    px
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

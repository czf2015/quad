// @ts-nocheck
import React from 'react';
import { DisconnectOutlined, LinkOutlined } from '@ant-design/icons';

export const SplitIcon = ({ disconnect, handleDisconnect }) => {
  const Icon = disconnect ? DisconnectOutlined : LinkOutlined;

  return <Icon onClick={handleDisconnect} />;
};

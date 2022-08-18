// @ts-nocheck
import React from 'react';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

export const Eyes = ({ hidden, handleEyes }) => {
  const renderEyes = hidden ? () => <EyeOutlined /> : () => <EyeInvisibleOutlined />;

  return (
    <div style={{ cursor: 'pointer' }} onClick={handleEyes}>
      {renderEyes()}
    </div>
  );
};

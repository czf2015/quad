import React from 'react';
import { message, Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

export default ({
  name = 'file',
  action = 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  multiple = true,
}) => {
  const onChange = (info) => {
    const { status } = info.file;

    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }

    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  }

  const onDrop = (e) => {
    console.log('Dropped files', e.dataTransfer.files);
  }

  return (
    <Upload.Dragger name={name} multiple={multiple} action={action} onChange={onChange} onDrop={onDrop}>
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">Click or drag file to this area to upload</p>
      <p className="ant-upload-hint">
        Support for a single or bulk upload. Strictly prohibit from uploading company data or other
        band files
      </p>
    </Upload.Dragger>
  );
} 

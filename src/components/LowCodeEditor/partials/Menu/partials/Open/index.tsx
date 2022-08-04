import React, { useState } from 'react';
import { Modal, Table } from '@/plugins/ui'
import Button from '@/components/Button'
import { FolderOpenOutlined } from '@ant-design/icons'
import { useColumns, data } from './config';


export const Open = ({ disabled, /* open,  */value = { lang: 'zh', timezone: 'China Standard Time', width: 1440, height: 1080, keywords: ['低代码'], template: 0 } }) => {
  const [visible, setVisible] = useState(false)
  const open = () => {
    setVisible(true)
  }
  const handleOk = () => {
    setVisible(false)
  }
  const handleCancel = () => {
    setVisible(false)
  }

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  const columns = useColumns()

  return (
    <>
      <Button title="打开" disabled={disabled} onClick={open} icon={<FolderOpenOutlined />} />
      <Modal title={<div style={{ color: '#40a9ff' }}><FolderOpenOutlined /><span style={{ marginLeft: 4 }}>打开页面</span></div>} visible={visible} onOk={handleOk} onCancel={handleCancel} width={'75%'} bodyStyle={{ maxHeight: 720, overflow: 'auto', padding: '0px 16px 32px 16px' }} footer={null}>
        <Table columns={columns} dataSource={data} onChange={onChange} pagination={false} size="small" sticky />
      </Modal>
    </>
  )
}
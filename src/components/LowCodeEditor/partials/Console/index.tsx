import React from 'react'
import { Button } from 'antd'
import { SaveOutlined, FormOutlined, EyeOutlined, FileTextOutlined, SendOutlined } from '@ant-design/icons'
import styles from './index.module.less'

const Save = ({ }) => <Button title="保存" type="primary" icon={<SaveOutlined />} />

const View = ({ }) => (
  <>
    <Button title="编辑" type="primary" icon={<FormOutlined />} />
    <Button title="预览" icon={<EyeOutlined />} />
    <Button title="发布" icon={<FileTextOutlined />} />
    <Button title="分享" icon={<SendOutlined />} />
  </>
)

export const Console = ({ mode = 0 }) => {
  const isEditMode = mode == 2
  return (
    <div className={styles.console}>
      {isEditMode ? <Save /> : <View />}
    </div>
  )
}
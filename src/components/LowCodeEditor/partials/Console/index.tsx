import React from 'react'
import Button from '@/components/Button'
import { SaveOutlined, FormOutlined, EyeOutlined, FileTextOutlined, SendOutlined } from '@ant-design/icons'
import styles from './index.module.less'


export const Console = ({ mode = 0, save, edit, preview, publish, share }) => {
  const isEditMode = mode == 2
  
  return (
    <div className={styles.console}>
      {isEditMode
        ? <Button title="保存" onClick={save} type="text" icon={<SaveOutlined />} />
        : (
          <>
            <Button title="编辑" onClick={edit} type="text" icon={<FormOutlined />} />
            <Button title="预览" onClick={preview} type="text" icon={<EyeOutlined />} />
            <Button title="发布" onClick={publish} type="text" icon={<FileTextOutlined />} />
            <Button title="分享" onClick={share} type="text" icon={<SendOutlined />} />
          </>
        )}
    </div>
  )
}
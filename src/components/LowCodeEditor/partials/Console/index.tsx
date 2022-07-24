import React from 'react'
import Button from '@/components/Button'
import { SaveOutlined, FormOutlined, EyeOutlined, FileTextOutlined, SendOutlined } from '@ant-design/icons'
import styles from './index.module.less'


export const Console = ({ mode = 0, save = () => console.log('save'), edit = () => console.log('edit'), preview = () => console.log('preview'), publish = () => console.log('publish'), share = () => console.log('share') }) => {
  const isEditMode = mode == 2
  return (
    <div className={styles.console}>
      {isEditMode
        ? <Button title="保存" onClick={save} icon={<SaveOutlined />} />
        : (
          <>
            <Button title="编辑" onClick={edit} icon={<FormOutlined />} />
            <Button title="预览" onClick={preview} icon={<EyeOutlined />} />
            <Button title="发布" onClick={publish} icon={<FileTextOutlined />} />
            <Button title="分享" onClick={share} icon={<SendOutlined />} />
          </>
        )}
    </div>
  )
}
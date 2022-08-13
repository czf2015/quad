import React from 'react'
import Button from '@/components/Button'
import { FormOutlined, EyeOutlined, SendOutlined } from '@ant-design/icons'
import { Save, Publish } from './partials'
import styles from './index.module.less'


export const Console = ({ mode = 0, page, save, edit, preview, publish, share }) => {
  const isEditMode = mode == 2

  return (
    <div className={styles.console}>
      {isEditMode
        ? <Save initialValues={page} onFinish={save} />
        : (
          <>
            <Button title="编辑" onClick={edit} type="text" icon={<FormOutlined />} />
            <Button title="预览" onClick={preview} type="text" icon={<EyeOutlined />} />
            <Publish onFinish={publish} />
            <Button title="分享" onClick={share} type="text" icon={<SendOutlined />} />
          </>
        )}
    </div>
  )
}
import React from 'react'
import Button from '@/components/Button'
import { FormOutlined, EyeOutlined } from '@ant-design/icons'
import { Save, Publish } from './partials'
import styles from './index.module.less'


export const Console = ({ editable, page, save, edit, preview, publish, share }) => {
  return (
    <div className={styles.console}>
      {editable
        ? (
          <>
            <Button title="预览" onClick={preview} type="text" icon={<EyeOutlined />} />
            <Save initialValues={page} onFinish={save} />
          </>
        ) : (
          <>
            <Button title="编辑" onClick={edit} type="text" icon={<FormOutlined />} />
            <Button title="预览" onClick={preview} type="text" icon={<EyeOutlined />} />
            <Publish initialValues={page} publish={publish} />
            {/* <Button title="分享" onClick={share} type="text" icon={<SendOutlined />} /> */}
          </>
        )}
    </div>
  )
}
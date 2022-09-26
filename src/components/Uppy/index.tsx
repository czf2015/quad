import React, { useEffect } from 'react'
import Uppy from '@uppy/core'
import Dashboard from '@uppy/dashboard'
import Tus from '@uppy/tus'
import '@uppy/core/dist/style.css'
import '@uppy/dashboard/dist/style.css'

interface IUppyMeta {
  auth_token: string
  callback_url: string
  filename?: string
  path?: string
  scene?: string
}

interface IProps {
  type: 'Dashboard'
  endpoint: string
  meta: IUppyMeta
}

export default ({ type = 'Dashboard', endpoint = '/big/upload/', meta = { auth_token: '9ee60e59-cb0f-4578-aaba-29b9fc2919ca', callback_url: 'http://127.0.0.1/callback', filename: 'xxx.tar', path: 'tmp/xxx/xx', scene: 'default' } }: IProps) => {
  useEffect(() => {
    const uppy = new Uppy().use(Dashboard, {
      trigger: '#drag-drop-area'
    }).use(Tus, {
      endpoint
    })
    uppy.on('complete', (result) => {
      console.log(result)
      console.log('Upload complete! We’ve uploaded these files:', result.successful)
    })
    //uppy.setMeta({ auth_token: '9ee60e59-cb0f-4578-aaba-29b9fc2919ca',callback_url:'http://127.0.0.1/callback' ,filename:'自定义文件名','path':'自定义path',scene:'自定义场景' })//这里是传递上传的认证参数,callback_url参数中 id为文件的ID,info 文转的基本信息json
    // uppy.setMeta(meta)
  }, [])

  return (
    <div id="drag-drop-area">上传</div>
  )
}
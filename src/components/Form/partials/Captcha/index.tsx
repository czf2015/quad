/**
 * 验证码 组件
 */
import React from 'react'
import { Input } from 'antd'
import './index.less'

export default ({ src, refresh }) => {
  return (
    <div className="captcha-wrapper">
      <Input placeholder='请输入验证码' />
      <img className="captcha" alt="验证码" src={src} onClick={refresh} />
    </div>
  )
}
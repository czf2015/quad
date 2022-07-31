// @ts-nocheck
// 短信验证码
import React, { useState, useEffect } from 'react'
import { Input } from 'antd'
import { useCountDown } from '~/hooks'
import './index.less'

const GainVerifyCode = ({ refresh, agained = false }) => {
  const [count, again, setAgain] = useCountDown(60)

  const gainVerifyCode = () => {
    refresh()
    setAgain(again => again + 1)
  }

  useEffect(() => {
    if (agained) {
      gainVerifyCode()
    }
  }, [])

  if (count > 0) {
    return <a className="disabled">重新获取 {count}s</a>
  }
  return <a onClick={gainVerifyCode}>{again > 0 ? '重新获取' : '获取验证码'}</a>
}


export default ({ refresh, agained }) => {
  return (
    <div className="verify-wrapper">
      <Input placeholder='请输入验证码' allowClear/>
      <GainVerifyCode refresh={refresh} agained={agained} />
    </div>
  )
}
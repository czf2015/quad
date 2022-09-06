import React, { useEffect, useState } from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';
import { Switch, ConfigProvider } from 'antd';
import enUS from 'antd/es/locale/en_US';
import zhCN from 'antd/es/locale/zh_CN';
import intl from '@/locales'
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');

if (window) {
  window.intl = (id) => <FormattedMessage id={id} />
}

export default ({ children, style }) => {
  const defaultChecked = localStorage.getItem('locale') == 'en'
  const language = defaultChecked ? 'en' : 'zh'

  const locale = defaultChecked ? enUS : zhCN

  const handleChange = (checked) => {
    localStorage.setItem('locale', checked ? 'en' : 'zh')
    location.reload()
  }

  return (
    <>
      <Switch defaultChecked={defaultChecked} onChange={handleChange} checkedChildren="English" unCheckedChildren="中文" style={style} />
      <IntlProvider locale={language} messages={intl[language]}>
        <ConfigProvider locale={locale}>
          {children}
        </ConfigProvider>
      </IntlProvider>
    </>
  )
}


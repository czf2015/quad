import React, { useState } from 'react';
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
  const [checked, setChecked] = useState(false)
  const language = checked ? 'en' : 'zh'

  const locale = checked ? enUS : zhCN

  return (
    <>
      <Switch checked={checked} onChange={setChecked} checkedChildren="English" unCheckedChildren="中文" style={style} />
      <IntlProvider locale={language} messages={intl[language]}>
        <ConfigProvider locale={locale}>
          {children}
        </ConfigProvider>
      </IntlProvider>
    </>
  )
}


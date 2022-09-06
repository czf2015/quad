import React from 'react'
import ReactDOM from 'react-dom/client'
import Locale from '@/components/Locale'
import Router from './Router'
import '@/styles/index.less'
import { EventBus } from '@/utils/EventBus'

window.$eventBus = new EventBus()


ReactDOM.createRoot(document.getElementById('quad')!).render(
  // <React.StrictMode>
  <Locale style={{ position: 'fixed', top: 5, right: 250, zIndex: 999, /* display: 'none' */ }}>
    <Router />
  </Locale>
  // </React.StrictMode>
)

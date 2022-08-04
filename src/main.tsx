import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/pages/low-code-editor'
import '@/styles/index.less'
import { EventBus } from '@/utils/EventBus'

window.$eventBus = new EventBus()


ReactDOM.createRoot(document.getElementById('quad')!).render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
)

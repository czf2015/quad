import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
// import './index.css'
import App from '@/pages/low-code-editor'
import '@/styles/index.less'
import { EventBus } from '@/utils/EventBus'

window.$eventBus = new EventBus()


ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
)

import React from 'react'
import { sayHello } from '@/pages/demo'

export default ({children}) => {
  return <button style={{color: 'blue'}} onClick={sayHello}>{children}</button>
}
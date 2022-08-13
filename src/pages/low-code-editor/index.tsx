import React from 'react'
import LowCodeEditor from '@/components/LowCodeEditor'
import { PageService } from '@/services'


export default () => {
  return (
    <LowCodeEditor service={PageService} />
  )
}
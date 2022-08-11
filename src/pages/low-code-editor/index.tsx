import React from 'react'
import LowCodeEditor from '@/components/LowCodeEditor'
import page from '@/mock/page'
import { PageService } from '@/services'


export default () => {
  return (
    <LowCodeEditor page={page} service={PageService} />
  )
}
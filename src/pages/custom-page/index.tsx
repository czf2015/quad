import React, { useState, useEffect } from 'react'
import { DisplayViewer } from '@/components/LowCodeEditor/partials'
import { useEntities } from '@/hooks'
import { PageService } from '@/services'


export default () => {
  const { entities, ...attrs } = useEntities()
  const [page, setPage] = useState({ width: 1440, height: 1080, content: [] })
  useEffect(() => {
    PageService.getPublishPage({ path: window.location.pathname })
      .then((res) => {
        debugger
        setPage(res.data)
      })
  }, [])
  return (
    <DisplayViewer entities={page.content} width={page.width} height={page.height}  {...attrs} />
  )
}
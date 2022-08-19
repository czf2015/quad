import React, { useState, useEffect } from 'react'
import { DisplayViewer } from '@/components/LowCodeEditor/partials'
import { useEntities, useResponsive } from '@/hooks'
import { PageService } from '@/services'

export default () => {
  const ref = useResponsive({ width: 1920, height: 1080 }, false)

  const { entities, ...attrs } = useEntities()

  const [page, setPage] = useState({ width: 1440, height: 1080, content: [] })
  useEffect(() => {
    PageService.getPublishPage({ path: window.location.pathname })
      .then((res) => {
        // debugger
        setPage(res.data)
      })
  }, [])

  return (
    <div ref={ref}>
      <DisplayViewer entities={page.content} width={page.width} height={page.height}  {...attrs} />
    </div>
  )
}
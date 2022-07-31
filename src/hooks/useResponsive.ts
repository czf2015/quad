import { useEffect, useRef } from 'react'

export const useResponsive = (basic = { width: 1920, height: 1080 }, isFullScreen = false) => {
  const rootRef = useRef() as IRef
  
  useEffect(() => {
    const handleResponsive = () => {
      const docEle = document.documentElement
      rootRef.current.style.transformOrigin = `top left`
      if (isFullScreen) {
        rootRef.current.style.transform = `scale(${docEle.clientWidth / basic.width}, ${docEle.clientHeight / basic.height})`
      } else {
        const radio = docEle.clientWidth / basic.width
        rootRef.current.style.transform = `scale(${radio})`
        // rootRef.current.style.height = `calc(100vh / ${radio})`
      }
    }
    handleResponsive()
    window.addEventListener('resize', handleResponsive)
    return () => {
      window.removeEventListener('resize', handleResponsive)
    }
  }, [])

  return rootRef
}
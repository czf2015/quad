import { useEffect, useRef } from 'react'

export const useResponsive = (basic = { width: 1920, height: 1080 }) => {
  const rootRef = useRef() as IRef
  useEffect(() => {
    const handleResponsive = () => {
      const docEle = document.documentElement
      const radio = docEle.clientWidth / basic.width
      rootRef.current.style.transform = `scale(${radio})`
      rootRef.current.style.transformOrigin = `top left`
    }
    handleResponsive()
    window.addEventListener('resize', handleResponsive)
    return () => {
      window.removeEventListener('resize', handleResponsive)
    }
  }, [])
  return rootRef
}
// @ts-nocheck
import { useRef } from "react"

export const useDragMove = (handle) => {
  const dragRef = useRef()
  const onDragStart = (e) => {
    dragRef.current = { pageX: e.pageX, pageY: e.pageY }
  }
  const onDragOver = (e) => {
    e.preventDefault()
  }
  const onDragEnd = (e) => {
    handle({
      x: e.pageX - dragRef.current.pageX,
      y: e.pageY - dragRef.current.pageY
    })
  }

  return { draggable: true, onDragStart, onDragOver, onDragEnd }
}
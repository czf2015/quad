import React from 'react'
import Scale from '@/components/Scale'

export const EditorScale = ({ list = [{ len: 1920, direction: 'left' }, { len: 1080, direction: 'right' },], gap = 5, visible = true }) => {
  if (visible) {
    return list.map(({ len, direction }) => <Scale len={len} gap={gap} direction={direction} />)
  }
  return null
}
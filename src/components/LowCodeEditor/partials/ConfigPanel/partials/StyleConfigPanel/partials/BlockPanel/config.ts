
// @ts-nocheck
import { horizontalIcon, verticalIcon } from '../../icons'

const HORIZONTAL_ALIGN = ['左对齐', '居中对齐', '右对齐', '两端对齐', '均匀对齐'];
const VERTICAL_ALIGN = ['顶对齐', '居中对齐', '底对齐', '两端对齐', '均匀对齐',]
export const OVERFLOW_OPTIONS = [
  {
    label: '自动',
    value: 'auto'
  },
  {
    label: '显示',
    value: 'visible'
  },
  {
    label: '隐藏',
    value: 'hidden'
  },
]

export const constraintsConfig = {
  horizontal: {
    tooltip: '水平方向',
    icon: horizontalIcon,
    options: HORIZONTAL_ALIGN
  },
  vertical: {
    tooltip: '垂直方向',
    icon: verticalIcon,
    options: VERTICAL_ALIGN
  }
}


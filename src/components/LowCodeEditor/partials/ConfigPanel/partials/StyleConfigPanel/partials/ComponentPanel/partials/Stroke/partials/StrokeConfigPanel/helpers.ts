// @ts-nocheck
import { BorderTopOutlined, BorderRightOutlined, BorderBottomOutlined, BorderLeftOutlined } from '@ant-design/icons'

const icons = [BorderTopOutlined, BorderRightOutlined, BorderBottomOutlined, BorderLeftOutlined]
export const config = (stroke) => {
  const list = stroke?.map(({ type, thickness, color }, index) => {
    return {
      icon: icons[index],
      type,
      thickness,
      color,
      split: true
    }
  })
  return list
}
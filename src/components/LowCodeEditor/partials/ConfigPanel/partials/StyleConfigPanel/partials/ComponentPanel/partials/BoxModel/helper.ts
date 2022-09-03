// @ts-nocheck
import { MarginIcon, PaddingIcon, BorderRadiusIcon, h, w } from '../../../../icons';
import {
  RadiusUpleftOutlined,
  RadiusUprightOutlined,
  RadiusBottomrightOutlined,
  RadiusBottomleftOutlined,
  BorderTopOutlined,
  BorderRightOutlined,
  BorderBottomOutlined,
  BorderLeftOutlined
} from '@ant-design/icons'

export const renderBorderRadiusIcon = (disconnect, index: number) => {
  if (disconnect) {
    return BorderRadiusIcon
  } else {
    switch (index) {
      case 0:
        return RadiusUpleftOutlined;
      case 1:
        return RadiusUprightOutlined;
      case 2:
        return RadiusBottomrightOutlined;
      case 3:
        return RadiusBottomleftOutlined;
    }
  }
};

export const renderMarginIcon = (disconnect, index: number) => {
  if (disconnect) {
    return MarginIcon
  } else {
    switch (index) {
      case 0:
        return BorderTopOutlined;
      case 1:
        return BorderRightOutlined;
      case 2:
        return BorderBottomOutlined;
      case 3:
        return BorderLeftOutlined;
    }
  }
}

export const renderPaddingIcon = (disconnect, index: number) => {
  if (disconnect) {
    return PaddingIcon
  } else {
    switch (index) {
      case 0:
        return BorderTopOutlined;
      case 1:
        return BorderRightOutlined;
      case 2:
        return BorderBottomOutlined;
      case 3:
        return BorderLeftOutlined;
    }
  }
}



export const splitsConfig = [
  {
    title: '外边距',
    store_name: 'margin',
    renderIcon: renderMarginIcon
  },
  {
    title: '内边距',
    store_name: 'padding',
    renderIcon: renderPaddingIcon
  },
  {
    title: '圆角',
    store_name: 'borderRadius',
    renderIcon: renderBorderRadiusIcon
  }
]

export const sizeConfig = [
  {
    title: '宽度',
    store_name: 'width',
    icon: w,
  },
  {
    title: '高度',
    store_name: 'height',
    icon: h,
  }
]
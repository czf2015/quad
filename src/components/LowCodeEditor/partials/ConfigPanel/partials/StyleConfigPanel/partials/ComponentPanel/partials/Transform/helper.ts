// @ts-nocheck
import { horizontalIcon, verticalIcon, dge, x, y } from '../../../../icons';

export const transformConfig = (store, scaleX, scaleY, rotate) => [
  {
    value: scaleX,
    step: 0.1,
    formatter: false,
    icon: horizontalIcon,
    onChange: (value) => {
      store('transform', { scaleX: value })
    },
    onBlur: (e) => {
      if (!e.target.value) {
        store('transform', { scaleX: 0 })
      }
    }
  },
  {
    value: scaleY,
    step: 0.1,
    formatter: false,
    icon: verticalIcon,
    onChange: (value) => {
      store('transform', { scaleY: value })
    },
    onBlur: (e) => {
      if (!e.target.value) {
        store('transform', { scaleY: 0 })
      }
    }
  },
  {
    value: rotate,
    step: 5,
    formatter: true,
    icon: dge,
    onChange: (value) => {
      if (value > 360) {
        store('transform', { rotate: value - 360 })
      } else if (value < -360) {
        store('transform', { rotate: value + 360 })
      } else {
        store('transform', { rotate: value })
      }
    },
    onBlur: (e) => {
      if (!e.target.value) {
        store('transform', { rotate: 0 })
      }
    }
  }
]

export const originConfig = (store, left, top) => [
  {
    value: left,
    icon: x,
    onChange: (e) => {
      store('transformOrigin', { left: e.target.value })
    },
    onBlur: (e) => {
      if (!e.target.value) {
        store('transformOrigin', { left: 0 })
      }
    }
  },
  {
    value: top,
    icon: y,
    onChange: (e) => {
      store('transformOrigin', { top: e.target.value })
    },
    onBlur: (e) => {
      if (!e.target.value) {
        store('transformOrigin', { top: 0 })
      }
    }
  }
]
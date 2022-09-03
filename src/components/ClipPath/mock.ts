export default [
  {
    type: 'none'
  },
  {
    type: 'circle',
    offsetX: 50,
    offsetY: 50,
    r: 50,
  },
  {
    type: 'ellipse',
    offsetX: 50,
    offsetY: 50,
    rx: 50,
    ry: 50,
  },
  {
    type: 'inset',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  {
    type: 'polygon',
    angle: 90,
    points: [
      {
        x: 50,
        y: 50,
        id: '1'
      },
      {
        x: 60,
        y: 60,
        id: '2'
      }
    ]
  },
]
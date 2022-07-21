export const areas = [
  {
    name: 'Area',
    id: 0b1,
    pid: 0b0,
    title: '页面',
    style: {
      width: 2560,
      height: 1080,
      backgroundColor: '#f9cc9d'
    }
  },
  {
    name: 'Area',
    id: 0b10,
    pid: 0b1,
    title: '页面-顶部栏',
    quad: 'top',
    style: {
      width: '100%',
      height: 64,
      backgroundColor: '#fddd9b'
    }
  },
  {
    name: 'Area',
    id: 0b11,
    pid: 0b1,
    title: '页面-编辑区',
    quad: 'bottom',
    style: {
      // margin: 16,
      width: '100%',
      height: 'calc(100% - 64px)',
      backgroundColor: '#fff'
    }
  },
  {
    name: 'Area',
    id: 0b110,
    pid: 0b11,
    title: '页面-编辑区-左侧组件面板',
    quad: 'left',
    style: {
      // margin: 16,
      width: 280,
      height: '100%',
      backgroundColor: '#8cb6c0'
    }
  },
  {
    name: 'Area',
    id: 0b111,
    pid: 0b11,
    title: '页面-编辑区-右侧',
    quad: 'right',
    style: {
      // margin: 16,
      width: 'calc(100% - 280px)',
      height: '100%'
    }
  },
  {
    name: 'Area',
    id: 0b1110,
    pid: 0b111,
    title: '页面-编辑区-右侧-中间显示区',
    quad: 'left',
    style: {
      marginLeft: 12,
      width: 1920,
      height: '100%',
      backgroundColor: '#f9cc9d'
    }
  },
  {
    name: 'Area',
    id: 0b1111,
    pid: 0b111,
    title: '页面-编辑区-右侧 -右侧配置面板',
    quad: 'right',
    style: {
      marginLeft: 12,
      width: 'calc(100% - 1920px - 24px)',
      height: '100%',
      backgroundColor: '#c3d08b'
    }
  },
  // 
  {
    name: 'WidgetsPanel',
    id: 'component1',
    pid: 0b110,
    title: "组件栏" ,                                                                                                        
  },
  {
    name: 'ConfigPanel',
    id: 'component2',
    pid: 0b1111,
    title: "配置栏" ,                                                                                                        
  },
]

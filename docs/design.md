## 资源
支持名称和类别或标记搜索 拖拽 复制 批量操作 删除 上传
收藏 按照最近使用时间及使用频率的顺序排序，可选择时间或使用频率或综合排序
图标 同上
图片 同上
视频 同上
```ts
// 服务端提供接口 /api/v2/assets/:id 
// count: 1 | -1 favor: 1 | - 1 | 0 tag: string flag: 
// 
// count > 0 ? (now - last) / count : tags.length  | favor
interface IAsset {
  id: string; // 标识
  title: string; // 名称
  url: string; // 链接
  meta?: json; // 元数据
  data?: json; // 
  tags: string[];
  last:  number // 最近使用时间 默认为0
  count: number // 使用次数 默认为0
  favor: number // 收藏次数 默认为0 取消收藏值即为0
}
```


## 定制组件
文字
图片
图标
伸缩
裁剪
形状
变形 支持
布局 支持
滚动 支持
动画
切换
组合
快捷键
```ts
interface IBox {
  top: number;
  left: number;
  width: number;
  height: number;
  margins: any[];
  paddings: any[]; 
}
interface IAtom extends IBox {
  text: IText[];
  background: IBackground[];
  icons: IIcon[];
  transform: ITransform[];
  shape: points;
}
```
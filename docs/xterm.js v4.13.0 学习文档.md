<!-- reference: https://blog.csdn.net/weixin_42136785/article/details/120082568 -->

## 安装 Install
```sh
npm install --save xterm
```

## 使用 Using
```ts
import 'xterm/css/xterm.css'

import { Terminal } from 'xterm'

const term = new Terminal()

term.open(document.getElementById('xterm-container'))
```

## 配置项 Options
```ts
/**
 * 当 canvas 渲染器运行过慢时，会回退为 DOM 渲染器
 * DOM 渲染器下不起作用的功能: Letter spacing || Cursor blin
 */
rendererType?: 'dom' || 'canvas'; // 渲染器类型
 
cols?: number; // 列数
rows?: number; // 行数
 
disableStdin?: boolean; // 是否禁用输入
 
fontSize?: number; // 字体大小
fontFamily?: string; // 字体类型
fontWeight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | number; // 字体加粗
fontWeightBold?:  'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | number; // 字体加粗
letterSpacing?: number; // 字符间距
lineHeight?: number; // 字体行高
 
scrollback?: number; // 终端中的回滚量，即当前视口之上保留的行数
scrollSensitivity?: number; // 正常滚动的滚动速度
fastScrollModifier?: 'alt' | 'ctrl' | 'shift' | undefined; // 按住哪个键可倍增滚动速度
fastScrollSensitivity?: number; // 快速滚动的滚动速度
 
logLevel?: 'debug' | 'info' | 'warn' | 'error' | 'off'; 日志类型, 默认是 info 
allowTransparency?: boolean; // 背景是否应支持非不透明颜色,开启后支持 theme中使用 rgba
theme?: {  // 主题
    cursor?: string; // 光标颜色
    cursorAccent?: string; // 光标的强调色
    foreground?: string; // 默认的前景色,即字体颜色
    background?: string; // 默认的背景色
    selection?: string; // 选择的背景色（可以是透明的）
    // 颜色: 使用 ANSI 编码
    black?: string; // `x1b[30m`
    red?: string; // `x1b[31m`
    green?: string; // `x1b[32m`
    yellow?: string; // `x1b[33m`
    blue?: string; // `x1b[34m`
    magenta?: string; // `x1b[35m`
    cyan?: string; // `x1b[36m`
    white?: string; // `\x1b[37m`
    brightBlack?: string; // `\x1b[1;30m`
    brightRed?: string; // `\x1b[1;31m`
    brightGreen?: string; // `\x1b[1;32m`
    brightYellow?: string; // `\x1b[1;33m`
    brightBlue?: string; // `\x1b[1;34m`
    brightMagenta?: string; // `\x1b[1;35m`
    brightCyan?: string; // `\x1b[1;36m`
    brightWhite?: string; // `\x1b[1;37m`
};
 
bellStyle?: 'none' | 'sound'; // 终端将使用的铃声通知类型
bellSound?: string; // 当 bellStyle='sound' 时，用于 sound 的数据URI
 
convertEol?: boolean; // 启用时，光标将设置为每一新行下一行的开头
cursorBlink?: boolean; // 光标是否闪烁
cursorStyle?: 'block' | 'underline' | 'bar'; // 光标的样式
cursorWidth?: number; // cursorStyle='bar' 时光标的宽度（以px为单位）
altClickMovesCursor?: boolean; // 如果启用，alt+click会将提示光标移动到鼠标下方的位置。默认值为true
 
/**
 * 终端中文本的最小对比度，设置该值将根据是否满足对比度动态更改前景颜色
 * Example values:
 * - 1: The default, do nothing.
 * - 4.5: WCAG AA合规性的最低要求
 * - 7: WCAG AAA合规性的最低要求
 * - 21: 黑纸白字或白纸黑字
 */
minimumContrastRatio?: number;
drawBoldTextInBrightColors?: boolean; // 是否以明亮的颜色绘制粗体文本。默认值为true
wordSeparator?: string; // 字符被双击的时候单独被选中，多个字符可以用空格间隔
rightClickSelectsWord?: boolean; // 是否支持鼠标右键选中整行
screenReaderMode?: boolean; // 是否启用屏幕阅读器支持
 
allowProposedApi?: boolean; // 是否允许使用建议的API, 如果为false，则任何标记为实验性/建议性的API的使用都将抛出错误
/**
 * Whether holding a modifier key will force normal selection behavior,
 * regardless of whether the terminal is in mouse events mode. This will
 * also prevent mouse events from being emitted by the terminal. For
 * example, this allows you to use xterm.js' regular selection inside tmux
 * with mouse mode enabled.
 * 无论终端是否处于鼠标事件模式，按住修改器键是否将强制执行正常选择行为。这也将防止终端发出鼠标事件。例如，这允许您在启用鼠标模式的情况下在tmux中使用xterm.js的常规选择。
 */
macOptionClickForcesSelection?: boolean;
linkTooltipHoverDuration?: number; // 在链接上悬停时触发链接工具提示事件之前的持续时间（毫秒）,将被弃用
macOptionIsMeta?: boolean; // 是否将选项视为元键
tabStopWidth?: number; // 终端中制表位的大小
/**
 * 是否启用“Windows模式”。由于Windows后端winpty和conpty通过在其一侧进行换行操作，因此xterm.js无法访问换行。
 * Whether "Windows mode" is enabled. Because Windows backends winpty and
 * conpty operate by doing line wrapping on their side, xterm.js does not
 * have access to wrapped lines. When Windows mode is enabled the following
 * changes will be in effect:
 * - Reflow is disabled.
 * - Lines are assumed to be wrapped if the last character of the line is
 *   not whitespace.
 */
windowsMode?: boolean;
/**
 * 启用各种窗口操作和报告功能。
 * 出于安全原因，默认情况下禁用所有功能。
 */
windowOptions?: IWindowOptions;
```

## 内置函数 APIS
```ts
open(HTMLElement): void; // Terminal基于传入的 dom 元素进行初始化
dispose(): void; // Terminal销毁，同时也会销毁 dom 元素以及事件
reset(): void; // Terminal  reset

getOption(key: string): any; // 获取配置
setOption(key: string, value: any): void; // 动态设置配置

focus(): void; // Terminal聚焦
blur(): void; // Terminal失焦
resize(columns: number, rows: number): void; // 可以动态设置行数和列数

write(data: string | Uint8Array, callback?: () => void): void; // xterm终端写入
writeln(data: string | Uint8Array, callback?: () => void): void;
writeUtf8(data: Uint8Array, callback?: () => void): void;
clear(): void; // 清空光标所在行上面的所有输入内容，不包含删除当前光标所在行

select(column: number, row: number, length: number): void; // 选择第row + 1 行的 第 column + 1 列开始，直到后面的第 length 个字符
selectAll(): void; // 选中全部内容
selectLines(start: number, end: number): void; // 可以配合 onRender 方法的回调选中
hasSelection(): boolean; // 判断有没有选中
getSelection(): string; // 获取选中的字符
getSelectionPosition(): {startColumn: number, startRow: number, endColumn: number, endRow: number} | undefined; // 获取选中的字符的位置
clearSelection(): void; // 清除选中状态

scrollLines(amount: number): void; // 一次滚动 amount 行
scrollPages(pageCount: number): void; // 相当于鼠标滚轮滑了pageCount下
scrollToTop(): void; // 滚动到顶部
scrollToBottom(): void; // 滚动到底部
scrollToLine(line: number): void; // 滚动到第 line + 1 行是当前窗口的第一行

refresh(start: number, end: number): void; // 范围内 refresh
loadAddon(addon: ITerminalAddon): void; // 挂载插件

// 以下均无测试使用
paste(data: string): void; // 用了，没啥反应
registerMarker(cursorYOffset: number): IMarker | undefined; // 注册标记，不会用
addMarker(cursorYOffset: number): IMarker | undefined; // 添加标记，不会用

attachCustomKeyEventHandler(customKeyEventHandler: (event: KeyboardEvent) => boolean): void; // 键盘的自定义事件
registerLinkMatcher(regex: RegExp, handler: (event: MouseEvent, uri: string) => void, options?: ILinkMatcherOptions): number;
deregisterLinkMatcher(matcherId: number): void;
registerLinkProvider(linkProvider: ILinkProvider): IDisposable;

registerCharacterJoiner(handler: (text: string) => [number, number][]): number;
deregisterCharacterJoiner(joinerId: number): void;
```

## 响应事件 callback
```ts
onKey(callback({ key: string, domEvent: KeyboardEvent })) // key: 键盘按键的值，domEvent: 键盘事件
onData(callback(key: String)) // 类似于input的oninput事件，key代表的是输入的字符
onCursorMove(callback()) // 输入光标位置变动会触发，比如输入，换行等
onLineFeed(callback()) // 操作回车按钮换行时触发，自然输入换行不会触发
onScroll(callback(scrollLineNumber: number)) // 当输入的行数超过设定的行数后会触发内容的滚动，输入换行以及回车换行均会触发
onSelectionChange(callback()) // 操作鼠标左键选中/取消选中会触发
onRender(callback({start: number, end: number})) // 鼠标移出点击，移入点击以及输入模式下键盘按下都会触发，范围从“0”到“Terminal.rows-1”
onResize(callback({cols: number, rows: number})) // 在 open() 之后如果调用 resize 设置行列会触发改事件，返回新的行列数值
 
onTitleChange(callback()) // 标题更改触发，未找到对应的触发条件
onBell(callback()) // 为触发铃声时添加事件侦听器
```

## 结语
以上包含了查看源码暴漏出来的参数以及API做了 部分 的使用以及个人理解的表述，有描述错误或者是不清晰的地方，希望大家能多多包含，私信指正，后续也会慢慢更新完整，感谢
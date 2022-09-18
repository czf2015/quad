// 参考：https://www.jianshu.com/p/0c9fc9267712
interface IMonacoEditorOptions extends IEditorOptions {
    /**
   * 允许调整“差异编辑器”拆分视图的大小Defaults to true.
   */
  enableSplitViewResizing?: boolean;
  /**
   * 在两个并排编辑器中呈现差异 Defaults to true.
   */
  renderSideBySide?: boolean;
  /**
   * 取消差异计算后的延迟时间（毫秒） Defaults to 5000.
   */
  maxComputationTime?: number;
  /**
   * 计算差异是否忽略前/后空格Defaults to true.
   */
  ignoreTrimWhitespace?: boolean;
  /**
   * 为添加/删除的更改呈现+/-指示器.Defaults to true.
   */
  renderIndicators?: boolean;
  /**
   * 原来的editor是否可编辑Defaults to false.
   */
  originalEditable?: boolean;
}

// 通用属性 IEditorOptions
interface IEditorOptions {
   /**
   * 是否为diff编辑器
   */
  inDiffEditor?: boolean;
  /**
   * 编辑器聚焦时的aria标签
   */
  ariaLabel?: string;
  /**
   * 渲染指定列处的垂直线 Defaults to empty array.
   */
  rulers?: number[];
  /**
   *单词导航时使用的单词分隔符 Defaults to `~!@#$%^&*()-=+[{]}\\|;:\'",.<>/?
   */
  wordSeparators?: string;
  /**
   * 启用Linux主剪贴板 Defaults to true.
   */
  selectionClipboard?: boolean;
  /**
   * 控制行号的呈现 
   * 'on' | 'off' | 'relative' | 'interval' | ((lineNumber: number) => string);
   * Defaults to `on`.
   */
  lineNumbers?: LineNumbersType;
  /**
   * 控制围绕光标的可见前导线和尾随线的最小数目。 Defaults to 0.
  */
  cursorSurroundingLines?: number;
  /**
   * 控件何时应强制执行“cursorcurringlines”。Defaults to `default`
  */
  cursorSurroundingLinesStyle?: 'default' | 'all';
  /**
   * 当文件以换行结束时呈现最后一行号 Defaults to true.
  */
  renderFinalNewline?: boolean;
  /**
   * 单击行号时是否应选择相应的行 Defaults to true.
   */
  selectOnLineNumbers?: boolean;
  /**
   * 控制行号的宽度，至少呈现一定数量的数字Defaults to 5.
   */
  lineNumbersMinChars?: number;
  /**
   * 启用图示符边距的渲染 Defaults to true in vscode and to false in monaco-editor.
   */
  glyphMargin?: boolean;
  /**
   * 为行装饰（行号和编辑器内容之间）保留的宽度(px). Defaults to 10.
   */
  lineDecorationsWidth?: number | string;
  /**
   * 当显示光标时，会向光标添加一个虚拟填充（px），将其变成一个矩形Defaults to 30 (px).
   */
  revealHorizontalRightPadding?: number;
  /**
   * 使用圆角边框渲染编辑器选择.Defaults to true.
   */
  roundedSelection?: boolean;
  /**
   * 要添加到编辑器的类名
   */
  extraEditorClassName?: string;
  /**
   * 是否只读 Defaults to false.
   */
  readOnly?: boolean;
  /**
   * 编辑器是否应该呈现验证装饰。Defaults to editable.
   */
  renderValidationDecorations?: 'editable' | 'on' | 'off';
  /**
   * 控制滚动条的行为和呈现--见下方滚动条属性
   */
  scrollbar?: IEditorScrollbarOptions;
  /**
   * 控制小地图的行为和呈现--见下方小地图属性
   */
  minimap?: IEditorMinimapOptions;
  /**
   * 控制find小部件的行为(查找功能)
   */
  find?: IEditorFindOptions;
  /**
   * 将溢出小部件显示为“固定”。Defaults to `false`.
   */
  fixedOverflowWidgets?: boolean;
  /**
   * The number of vertical lanes the overview ruler should render. Defaults to 3.
   */
  overviewRulerLanes?: number;
  /**
   * Controls if a border should be drawn around the overview ruler.
   * Defaults to `true`.
   */
  overviewRulerBorder?: boolean;
  /**
   * 控制光标动画样式， Defaults to 'blink'.
   */
  cursorBlinking?: 'blink' | 'smooth' | 'phase' | 'expand' | 'solid';
  /**
   *使用鼠标滚轮并按住Ctrl键时，在编辑器中缩放字体。Defaults to false.
   */
  mouseWheelZoom?: boolean;
  /**
   * 控制鼠标指针样式， Defaults to 'text'
   */
  mouseStyle?: 'text' | 'default' | 'copy';
  /**
   * 启用平滑插入符号动画 Defaults to false.
   */
  cursorSmoothCaretAnimation?: boolean;
  /**
   * 光标样式,  Defaults to 'line'.
   */
  cursorStyle?: 'line' | 'block' | 'underline' | 'line-thin' | 'block-outline' | 'underline-thin';
  /**
   * 当cursorStyle设置为“line”时，控制光标的宽度
   */
  cursorWidth?: number;
  /**
   * 设置font ligatures. Defaults to false.
   */
  fontLigatures?: boolean | string;
  /**
   * 禁止对编辑器边距和行图层使用“transform:translate3d（0px，0px，0px）”。
*“transform:translate3d（0px，0px，0px）”的用法可以作为浏览器创建额外层的提示。 Defaults to false.
   */
  disableLayerHinting?: boolean;
  /**
   * 是否禁用优化 monospace fonts. Defaults to false.
   */
  disableMonospaceOptimizations?: boolean;
  /**
   * 光标是否隐藏在概览标尺中 Defaults to false.
   */
  hideCursorInOverviewRuler?: boolean;
  /**
   * 启用滚动可以在最后一行后移动一个屏幕大小  Defaults to true.
   */
  scrollBeyondLastLine?: boolean;
  /**
   * 启用滚动可以超出最后一列的许多列.Defaults to 5.
   */
  scrollBeyondLastColumn?: number;
  /**
   * 编辑器动画效果滚动到一个位置. Defaults to false.
   */
  smoothScrolling?: boolean;
  /**
   * 编辑器将设置一个间隔时间来检查其dom节点大小是否已更改。启用此功能可能会对性能产生严重影响。
   * Defaults to false.
   */
  automaticLayout?: boolean;
  /**
   * 设置编辑器的换行.Defaults to "off".
   */
  wordWrap?: 'off' | 'on' | 'wordWrapColumn' | 'bounded';
  /**
   *  wordWrap设置为wordWrapColumn生效，Defaults to 80.
   */
  wordWrapColumn?: number;
  /**
   * 当文本显示为缩小生成的文件时强制换行.
   * Defaults to true.
   */
  wordWrapMinified?: boolean;
  /**
   *控制换行的缩进.Defaults to 'same' in vscode and to 'none' in monaco-editor.
   */
  wrappingIndent?: 'none' | 'same' | 'indent' | 'deepIndent';
  /**
   * 换行策略. Defaults to 'simple'.
   */
  wrappingStrategy?: 'simple' | 'advanced';
  /**
   * 配置换行字符。在这些字符之前将引入一个中断 Defaults to '([{‘“〈《「『【〔（［｛｢£¥＄￡￥+＋'.
   */
  wordWrapBreakBeforeCharacters?: string;
  /**
   * 配置换行字符。在这些字符之后将引入中断 Defaults to ' \t})]?|/&.,;¢°′″‰℃、。｡､￠，．：；？！％・･ゝゞヽヾーァィゥェォッャュョヮヵヶぁぃぅぇぉっゃゅょゎゕゖㇰㇱㇲㇳㇴㇵㇶㇷㇸㇹㇺㇻㇼㇽㇾㇿ々〻ｧｨｩｪｫｬｭｮｯｰ”〉》」』】〕）］｝｣'.
   */
  wordWrapBreakAfterCharacters?: string;
  /**
   *停止渲染x个字符后的行 Defaults to 10000. 使用-1永不停止渲染
   */
  stopRenderingLineAfter?: number;
  /**
   * 配置hover.
   */
  hover?: {
    /**
   * 启用悬停 Defaults to true.
   */
  enabled?: boolean;
  /**
   * 悬停显示延迟时间 Defaults to 300.
   */
  delay?: number;
  /**
   * 悬停是否具有便签，以便可以单击它并选择其内容 Defaults to true.
   */
  sticky?: boolean;
};
  /**
   * 启用检测链接并使其可单击. Defaults to true.
   */
  links?: boolean;
  /**
   * 启用内联颜色装饰器和颜色选择器渲染
   */
  colorDecorators?: boolean;
  /**
   * Control the behaviour of comments in the editor.
   */
  comments?: IEditorCommentsOptions;
  /**
   *启用自定义上下文菜单 Defaults to true.
   */
  contextmenu?: boolean;
  /**
   * A multiplier to be used on the `deltaX` and `deltaY` of mouse wheel scroll events.
   * Defaults to 1.
   */
  mouseWheelScrollSensitivity?: number;
  /**
   * FastScrolling mulitplier speed when pressing `Alt`
   * Defaults to 5.
   */
  fastScrollSensitivity?: number;
  /**
   * The modifier to be used to add multiple cursors with the mouse.
   * Defaults to 'alt'
   */
  multiCursorModifier?: 'ctrlCmd' | 'alt';
  /**
   * Merge overlapping selections.
   * Defaults to true
   */
  multiCursorMergeOverlapping?: boolean;
  /**
   * Configure the behaviour when pasting a text with the line count equal to the cursor count.
   * Defaults to 'spread'.
   */
  multiCursorPaste?: 'spread' | 'full';
  /**
   * Configure the editor's accessibility support.
   * Defaults to 'auto'. It is best to leave this to 'auto'.
   */
  accessibilitySupport?: 'auto' | 'off' | 'on';
  /**
   * Controls the number of lines in the editor that can be read out by a screen reader
   */
  accessibilityPageSize?: number;
  /**
   * Suggest options.
   */
  suggest?: ISuggestOptions;
  /**
   *
   */
  gotoLocation?: IGotoLocationOptions;
  /**
   * Enable quick suggestions (shadow suggestions)
   * Defaults to true.
   */
  quickSuggestions?: boolean | IQuickSuggestionsOptions;
  /**
   * Quick suggestions show delay (in ms)
   * Defaults to 10 (ms)
   */
  quickSuggestionsDelay?: number;
  /**
   * Parameter hint options.
   */
  parameterHints?: IEditorParameterHintOptions;
  /**
   * Options for auto closing brackets.
   * Defaults to language defined behavior.
   */
  autoClosingBrackets?: EditorAutoClosingStrategy;
  /**
   * Options for auto closing quotes.
   * Defaults to language defined behavior.
   */
  autoClosingQuotes?: EditorAutoClosingStrategy;
  /**
   * Options for typing over closing quotes or brackets.
   */
  autoClosingOvertype?: EditorAutoClosingOvertypeStrategy;
  /**
   * Options for auto surrounding.
   * Defaults to always allowing auto surrounding.
   */
  autoSurround?: EditorAutoSurroundStrategy;
  /**
   * Controls whether the editor should automatically adjust the indentation when users type, paste, move or indent lines.
   * Defaults to advanced.
   */
  autoIndent?: 'none' | 'keep' | 'brackets' | 'advanced' | 'full';
  /**
   * Enable format on type.
   * Defaults to false.
   */
  formatOnType?: boolean;
  /**
   * Enable format on paste.
   * Defaults to false.
   */
  formatOnPaste?: boolean;
  /**
   * Controls if the editor should allow to move selections via drag and drop.
   * Defaults to false.
   */
  dragAndDrop?: boolean;
  /**
   * Enable the suggestion box to pop-up on trigger characters.
   * Defaults to true.
   */
  suggestOnTriggerCharacters?: boolean;
  /**
   * Accept suggestions on ENTER.
   * Defaults to 'on'.
   */
  acceptSuggestionOnEnter?: 'on' | 'smart' | 'off';
  /**
   * Accept suggestions on provider defined characters.
   * Defaults to true.
   */
  acceptSuggestionOnCommitCharacter?: boolean;
  /**
   * Enable snippet suggestions. Default to 'true'.
   */
  snippetSuggestions?: 'top' | 'bottom' | 'inline' | 'none';
  /**
   * Copying without a selection copies the current line.
   */
  emptySelectionClipboard?: boolean;
  /**
   * Syntax highlighting is copied.
   */
  copyWithSyntaxHighlighting?: boolean;
  /**
   * The history mode for suggestions.
   */
  suggestSelection?: 'first' | 'recentlyUsed' | 'recentlyUsedByPrefix';
  /**
   * The font size for the suggest widget.
   * Defaults to the editor font size.
   */
  suggestFontSize?: number;
  /**
   * The line height for the suggest widget.
   * Defaults to the editor line height.
   */
  suggestLineHeight?: number;
  /**
   * Enable tab completion.
   */
  tabCompletion?: 'on' | 'off' | 'onlySnippets';
  /**
   * Enable selection highlight.
   * Defaults to true.
   */
  selectionHighlight?: boolean;
  /**
   * Enable semantic occurrences highlight.
   * Defaults to true.
   */
  occurrencesHighlight?: boolean;
  /**
   * Show code lens
   * Defaults to true.
   */
  codeLens?: boolean;
  /**
   * Control the behavior and rendering of the code action lightbulb.
   */
  lightbulb?: IEditorLightbulbOptions;
  /**
   * Timeout for running code actions on save.
   */
  codeActionsOnSaveTimeout?: number;
  /**
   * Enable code folding.
   * Defaults to true.
   */
  folding?: boolean;
  /**
   * Selects the folding strategy. 'auto' uses the strategies contributed for the current document, 'indentation' uses the indentation based folding strategy.
   * Defaults to 'auto'.
   */
  foldingStrategy?: 'auto' | 'indentation';
  /**
   * Enable highlight for folded regions.
   * Defaults to true.
   */
  foldingHighlight?: boolean;
  /**
   * Controls whether the fold actions in the gutter stay always visible or hide unless the mouse is over the gutter.
   * Defaults to 'mouseover'.
   */
  showFoldingControls?: 'always' | 'mouseover';
  /**
   * Enable highlighting of matching brackets.
   * Defaults to 'always'.
   */
  matchBrackets?: 'never' | 'near' | 'always';
  /**
   * Enable rendering of whitespace.
   * Defaults to none.
   */
  renderWhitespace?: 'none' | 'boundary' | 'selection' | 'all';
  /**
   * Enable rendering of control characters.
   * Defaults to false.
   */
  renderControlCharacters?: boolean;
  /**
   * Enable rendering of indent guides.
   * Defaults to true.
   */
  renderIndentGuides?: boolean;
  /**
   * Enable highlighting of the active indent guide.
   * Defaults to true.
   */
  highlightActiveIndentGuide?: boolean;
  /**
   * Enable rendering of current line highlight.
   * Defaults to all.
   */
  renderLineHighlight?: 'none' | 'gutter' | 'line' | 'all';
  /**
   * Inserting and deleting whitespace follows tab stops.
   */
  useTabStops?: boolean;
  /**
   * The font family
   */
  fontFamily?: string;
  /**
   * The font weight
   */
  fontWeight?: string;
  /**
   * The font size
   */
  fontSize?: number;
  /**
   * The line height
   */
  lineHeight?: number;
  /**
   * The letter spacing
   */
  letterSpacing?: number;
  /**
   * Controls fading out of unused variables.
   */
  showUnused?: boolean;
  /**
   * Controls whether to focus the inline editor in the peek widget by default.
   * Defaults to false.
   */
  peekWidgetDefaultFocus?: 'tree' | 'editor';
}

// 滚动条属性 IEditorScrollbarOptions
interface IEditorScrollbarOptions {
    /**
     * 垂直滚动条。Defaults to 'auto'.
     */
    vertical?: 'auto' | 'visible' | 'hidden';
    /**
     * 水平滚动条.Defaults to 'auto'.
     */
    horizontal?: 'auto' | 'visible' | 'hidden';
    /**
     * 滚动内容时投射水平和垂直阴影 Defaults to true.
     */
    useShadows?: boolean;
    /**
     *渲染垂直滚动条顶部和底部的箭头。Defaults to false.
     */
    verticalHasArrows?: boolean;
    /**
     *渲染水平滚动条左右两侧的箭头 Defaults to false.
     */
    horizontalHasArrows?: boolean;
    /**
     * 箭头的大小（如果显示）。 Defaults to 11.
     */
    arrowSize?: number;
    /**
     * 监听鼠标滚轮事件并通过滚动做出反应. Defaults to true.
     */
    handleMouseWheel?: boolean;
    /**
     * 总是使用鼠标滚轮事件（总是在浏览器事件上调用preventDefault（）和stopPropagation（）） Defaults to true.
     */
    alwaysConsumeMouseWheel?: boolean;
    /**
     * 水平滚动条的高度（px）。Defaults to 10 (px).
     */
    horizontalScrollbarSize?: number;
    /**
     * 垂直滚动条的宽度（px）Defaults to 10 (px).
     */
    verticalScrollbarSize?: number;
    /**
     * 垂直滑块的宽度（px）。 Defaults to `verticalScrollbarSize`.
     */
    verticalSliderSize?: number;
    /**
     *水平滑块的高度（px）。 Defaults to `horizontalScrollbarSize`.
     */
    horizontalSliderSize?: number;
}

// 小地图属性 IEditorMinimapOptions
interface IEditorMinimapOptions {
 /**
   * Enable the rendering of the minimap.
   * Defaults to true.
   */
  enabled?: boolean;
  /**
   * Control the side of the minimap in editor.
   * Defaults to 'right'.
   */
  side?: 'right' | 'left';
  /**
   * Control the rendering of the minimap slider.
   * Defaults to 'mouseover'.
   */
  showSlider?: 'always' | 'mouseover';
  /**
   * Render the actual text on a line (as opposed to color blocks).
   * Defaults to true.
   */
  renderCharacters?: boolean;
  /**
   * Limit the width of the minimap to render at most a certain number of columns.
   * Defaults to 120.
   */
  maxColumn?: number;
  /**
   * Relative size of the font in the minimap. Defaults to 1.
   */
  scale?: number;
}

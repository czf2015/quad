// @ts-nocheck
import React from 'react'
import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror';
import 'codemirror/lib/codemirror.css';

// 主题
import 'codemirror/theme/ayu-dark.css';
// import 'codemirror/theme/solarized.css';
// import 'codemirror/theme/xq-dark.css';
// import 'codemirror/theme/eclipse.css';

// 模式
import 'codemirror/mode/css/css';
import 'codemirror/mode/clike/clike';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/python/python.js';

// 全屏模式
import 'codemirror/addon/display/fullscreen.css'
import 'codemirror/addon/display/fullscreen'

// 支持代码折叠
import 'codemirror/addon/fold/foldgutter.css';
import 'codemirror/addon/fold/foldcode';
import 'codemirror/addon/fold/foldgutter';
import 'codemirror/addon/fold/brace-fold';
import 'codemirror/addon/fold/comment-fold';
import 'codemirror/addon/edit/closebrackets';

// 代码高亮
import 'codemirror/addon/selection/active-line';

// 括号匹配
import 'codemirror/addon/edit/matchbrackets'

// 行注释
import 'codemirror/addon/comment/comment'

// 格式化
// import 'codemirror/addon/format/format'

// 自动补全
import 'codemirror/addon/hint/show-hint.css'
import 'codemirror/addon/hint/show-hint'
import 'codemirror/addon/hint/anyword-hint'

// 代码检查错误
import 'codemirror/addon/lint/lint.css'
import 'codemirror/addon/lint/lint'
import 'codemirror/addon/lint/json-lint'

// Vim
import 'codemirror/keymap/vim'
import 'codemirror/addon/search/searchcursor'
import 'codemirror/addon/dialog/dialog.css'
import 'codemirror/addon/dialog/dialog'

const defaultOptions = {
  mode: 'application/json',
  theme: 'ayu-dark',
  // lineNumbers: true, // 是否显示行号
  // readOnly: true,  // 是否只读
  // lineWiseCopyCut: true,
  // lineWrapping: true,
}

export const Code = ({ value, onChange, onBeforeChange, options = defaultOptions, }) => {
  return (
    <CodeMirror
      value={value}
      options={{
        ...defaultOptions,
        ...options,
      }}
      // 设置尺寸
      editorDidMount={(editor) => {
        editor.setSize('auto', 'auto');
      }}
      onChange={(editor: any, data: any, value: string) => { }}
      onBeforeChange={(editor: any, data: any, value: string) => { }}
    />
  )
}
// @ts-nocheck
import React from 'react'
import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
// 主题风格 可以自己定义
import 'codemirror/theme/eclipse.css';
// 代码模式，可以自己定义
import 'codemirror/mode/css/css';
import styles from './index.module.less'


export const StyleConfigPanel = ({ content }) => {
  return (
    <div className={styles.container}>
      <CodeMirror
        value={content}
        options={{
          mode: 'css',
          theme: 'eclipse',
          // lineNumbers: true, // 是否显示行号
          readOnly: false,  // 是否只读
          lineWiseCopyCut: true,
          lineWrapping: true,
        }}
        // 设置尺寸
        editorDidMount={(editor) => {
          editor.setSize('auto', 'auto');
        }}
        onChange={(editor: any, data: any, value: string) => { }}
        onBeforeChange={(editor: any, data: any, value: string) => { }}
      />
    </div>
  )
}
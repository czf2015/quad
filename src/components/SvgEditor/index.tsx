import React, { useState } from 'react'
import { Tooltip, Input, Dropdown } from 'antd'
import styles from './index.module.less'

export default ({ width = 300, height = 150, viewBox = `0 0 ${width} ${height}`, style }) => {
  const [inputText, setInputText] = useState('hellow')
  const handleChange = (e) => {
    setInputText(e?.target?.value)
  }
  return (
    <>
      <svg className={styles.svg} width={width} height={height} viewBox={viewBox} style={style}>
        <rect x="10" y="10" width="100" height="100" />

        <path d="M 200 100 A 50 50  0 0 1 186.5 134 L100 100Z" stroke="#000" fill="green" fillOpacity="1" />
        <Dropdown overlay={<Input value={inputText} onChange={handleChange} />}>
          <text className={styles.text} x="150" y="50" fill="none" stroke="red" fontSize={28}>{inputText}</text>
        </Dropdown>
      </svg>
      {/*  */}
      <svg className={styles.svg} width={width} height={height} viewBox={viewBox} style={style}>
        <image className={styles.svg_image} /* xlink: */ href="http://img.alicdn.com/tps/i4/TB1sLIsGXXXXXb6XFXX1aiKJFXX-4-7.png" x="0" y="0" height="100" width="100" style={{ outline: "2px solid red" }} />
      </svg>
      <svg className={styles.svg} width={width} height={height} viewBox={viewBox} style={style}>
        <foreignObject width="40" height="50"
          requiredExtensions="http://www.w3.org/1999/xhtml">
          <p>这是一段文字</p>
        </foreignObject>
      </svg>
      {/*  */}
      <svg className={styles.svg} width={width} height={height * 2} viewBox={viewBox} style={style}>
        <defs>
          <path id="circlePath"
            d="M10,50
               C10,50 50,0 100,50
               C100,50 150,100 190,50
               M10,150
               C10,150 50,100 100,150
               C100,150 150,200 190,150" />
        </defs>
        <g fill="dodgerblue" font-size="15" font-family="楷体">
          <Dropdown overlay={<Input.TextArea value={inputText} onChange={handleChange} />}>
            <text x="20" y="40">
              <textPath /* xlink: */ href="#circlePath">
                {inputText}
              </textPath>
            </text>
          </Dropdown>
        </g>
        <use /* xlink: */ href="#circlePath" fill="none" stroke="blue" />
      </svg>
      {/*  */}
      <svg className={styles.svg} width={width} height={height} viewBox={viewBox} style={style}>
        <defs>
          <path id="semi" d="M110 100 a50 50 0 1 1 100 0"></path>
        </defs>
        <use /* xlink: */ href="#semi" stroke="grey" fill="none"></use>
        <text text-anchor="middle">
          <textPath /* xlink: */ href="#semi" startOffset="50%">
            Middle
          </textPath>
        </text>
      </svg>
      {/*  */}
      <svg className={styles.svg} width={width} height={height} viewBox={viewBox} style={style}>
        <defs>
          <path id="circle" d="M70 20 a40 40 0 1 1 -1 0"></path>
        </defs>
        <text>
          <textPath /* xlink: */ href="#circle">
            Text following a circle.............
          </textPath>
        </text>
      </svg>
      {/*  */}
      <svg className={styles.svg} width={width} height={height} viewBox={viewBox} style={style}>
        <text x="20" y="25" style={{ fontSize: '1.5rem' }}>
          C<tspan style={{ baselineShift: 'sub', fontSize: "1rem" }}>12</tspan>
          H<tspan style={{ baselineShift: 'sub', fontSize: "1rem" }}>22</tspan>
          O<tspan style={{ baselineShift: 'sub', fontSize: "1rem" }}>11</tspan> (sugar)
        </text>
        <text x="20" y="70" style={{ fontSize: '1.5rem' }}>
          6.02 x 10<tspan baselineShift="super" style={{ fontSize: '1rem' }}>23</tspan>
          (Avogadro's number)
        </text>
      </svg>
      {/*  */}
      <svg className={styles.svg} width={width} height={height} viewBox={viewBox} style={style}>
        <text x="30" y="30">
          Love
          <tspan dx="0 4 -3 5 -4 6" dy="0 -3 7 3 -2 -8" rotate="5 10 -5 -20 0 15">life as</tspan>,
          love you
        </text>
      </svg>
    </>
  )
}
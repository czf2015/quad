import React from 'react'
import { Input, Select, InputNumber } from '@/plugins/ui'
import ColorPicker from '@/components/ColorPicker'
import { BoldOutlined, FontSizeOutlined, LineHeightOutlined, UnderlineOutlined } from '@ant-design/icons'
import { FONT_WEIGHT_OPTIONS, TEXT_ALIGN_OPTIONS, VERTICAL_ALIGN_OPTIONS, TEXT_DECORATION_OPTIONS } from '@/constants/OPTIONS'
import styles from './index.module.less'

const VerticalIcon = () => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16">
      <path
        d="M8.5 3.5h2v-1h-5v1h2v9h-2v1h5v-1h-2v-9z"
        fillRule="evenodd"
        fillOpacity="1"
        fill="#000"
        stroke="none"
      ></path>
    </svg>
  );
};

const HorizontalIcon = () => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16">
      <path
        d="M3.5 7.5v-2h-1v5h1v-2h9v2h1v-5h-1v2h-9z"
        fillRule="evenodd"
        fillOpacity="1"
        fill="#000"
        stroke="none"
      ></path>
    </svg>
  );
};

export const Text = ({ store }) => {
  return (
    <div className={styles.text_wrapper}>
      <h4 className={styles.flex}><span>文本</span></h4>
      <div className={styles.flex}>
        <label><img src="/icons/FontFamily.svg" width="16" height="16" /><Select style={{ width: 96 }} size="small" bordered={false} /></label>
        <label><BoldOutlined /><InputNumber defaultValue={400} style={{ width: 56 }} min={400} max={900} size="small" controls={false} bordered={false} /></label>
        <label><ColorPicker value="#ccc" /></label>
      </div>

      <div className={styles.flex}>
        <label><FontSizeOutlined /><Input defaultValue="12px" style={{ width: 64 }} min={0} size="small" controls={false} bordered={false} /></label>
        <label><LineHeightOutlined /><Input defaultValue="12px" style={{ width: 64 }} min={0} size="small" controls={false} bordered={false} /></label>
        <label><img src="/icons/WordSpacing.svg" width="20" height="20" /><Input defaultValue="0px" style={{ width: 88 }} min={0} size="small" controls={false} bordered={false} /></label>
      </div>

      <div className={styles.flex}>
        <label>
          <HorizontalIcon />
          <Select defaultValue='start' options={TEXT_ALIGN_OPTIONS} style={{ width: 76 }} size="small" bordered={false} />
        </label>
        <label>
          <VerticalIcon />
          <Select defaultValue='baseline' options={VERTICAL_ALIGN_OPTIONS} style={{ width: 76 }} size="small" bordered={false} />
        </label>
        <label><UnderlineOutlined /><Select defaultValue="none" options={TEXT_DECORATION_OPTIONS} style={{ width: 76 }} size="small" bordered={false} /></label>
      </div>
    </div>
  )
}
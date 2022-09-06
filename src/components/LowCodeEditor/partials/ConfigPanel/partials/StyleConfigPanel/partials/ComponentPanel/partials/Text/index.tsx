import React from 'react'
import { Input } from '@/plugins/ui'
import ColorPicker from '@/components/ColorPicker'
import CustomSelect from '@/components/Form/partials/Select'
import { BoldOutlined, FontSizeOutlined, LineHeightOutlined, UnderlineOutlined } from '@ant-design/icons'
import { FONT_WEIGHT_OPTIONS, TEXT_ALIGN_OPTIONS, VERTICAL_ALIGN_OPTIONS, TEXT_DECORATION_OPTIONS, FONT_FAMILY_OPTIONS } from '@/constants/OPTIONS'
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

export const Text = ({ store,fontFamily,fontWeight,color,fontSize,lineHeight,wordSpacing,textAlign,verticalAlign,textDecoration}) => {
  const setStore = (key) => (value) => {
    store(key, value?.target?.value)
  }

  return (
    <div className={styles.text_wrapper}>
      <h4 className={styles.flex}><span>文本</span></h4>
      <div className={styles.flex}>
        <CustomSelect value={fontFamily} onChange={setStore('fontFamily')} options={FONT_FAMILY_OPTIONS} addonBefore={<img src="/icons/FontFamily.svg" width="16" height="16" />} />
        <CustomSelect value={fontWeight} onChange={setStore('fontWeight')} options={FONT_WEIGHT_OPTIONS} addonBefore={<BoldOutlined />} />
        <label><ColorPicker value={color} onChange={setStore('color')} /></label>
      </div>

      <div className={styles.flex}>
        <label><FontSizeOutlined /><Input value={fontSize} onChange={setStore('fontSize')} defaultValue="12px" style={{ width: 71 }} min={0} size="small" controls={false} bordered={false} /></label>
        <label><LineHeightOutlined /><Input value={lineHeight} onChange={setStore('lineHeight')} defaultValue="12px" style={{ width: 71 }} min={0} size="small" controls={false} bordered={false} /></label>
        <label><img src="/icons/WordSpacing.svg" width="16" height="16" /><Input value={wordSpacing} onChange={setStore('wordSpacing')} defaultValue="0px" style={{ width: 71 }} min={0} size="small" controls={false} bordered={false} /></label>
      </div>

      <div className={styles.flex}>
        <CustomSelect value={textAlign} onChange={setStore('textAlign')} options={TEXT_ALIGN_OPTIONS} addonBefore={<HorizontalIcon />} />
        <CustomSelect value={verticalAlign} onChange={setStore('verticalAlign')} options={VERTICAL_ALIGN_OPTIONS} addonBefore={<VerticalIcon />} />
        <CustomSelect value={textDecoration} onChange={setStore('textDecoration')} options={TEXT_DECORATION_OPTIONS} addonBefore={<UnderlineOutlined />} />
      </div>
    </div>
  )
}
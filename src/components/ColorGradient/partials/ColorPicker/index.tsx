import React from 'react'
import Picker from '@/components/Form/partials/ColorPicker'


export const ColorPicker = ({ store }) => {
  const handleChange = (value) => {
    store('value', value)
  }

  return (
    <Picker value={store('value')} onChange={handleChange} />
  )
}

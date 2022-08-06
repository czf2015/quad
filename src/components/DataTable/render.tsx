import React from 'react'
import { Tag } from '@/plugins/ui'

export const renderTags = (tags = [], options = []) => (
  <>
    {tags?.map((tag) => {
      const color = tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green';

      return (
        <Tag color={color} key={tag}>
          {options?.find(item => item.value == tag)?.label}
        </Tag>
      );
    })}
  </>
)
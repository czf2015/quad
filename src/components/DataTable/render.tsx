import React from 'react'
import { Tag } from '@/plugins/ui'

export const renderTags = (tags) => (
  <>
    {tags?.map((tag) => {
      const color = tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green';

      return (
        <Tag color={color} key={tag}>
          {tag.toUpperCase()}
        </Tag>
      );
    })}
  </>
)
import React from 'react'
import { Tag } from '@/plugins/ui'

export const renderTags = (tags) => (
  <span>
    {tags?.map((tag) => {
      let color = tag.length > 5 ? 'geekblue' : 'green';

      if (tag === 'loser') {
        color = 'volcano';
      }

      return (
        <Tag color={color} key={tag}>
          {tag.toUpperCase()}
        </Tag>
      );
    })}
  </span>
)
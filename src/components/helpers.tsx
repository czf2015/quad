// @ts-nocheck
import React from 'react'

export const renderList = (list, Child, key = 'id') => list.map(item => <Child {...item} key={item[key]} />)
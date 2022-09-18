// @ts-nocheck
import React, { useEffect, useRef } from 'react';
// import { StyleConfigPanel as Demo } from '@/components/LowCodeEditor/partials/ConfigPanel/partials';
import Demo from '@/components/Terminal';
// import Demo from '@/components/Editor'


const props = {};

export default () => {
  const ref = useRef(null)

  const handleClick = () => {
    const value = ref.current.value
    console.log(value)
  }
  
  // useEffect(() => {
  //   ref.current.focus()
  // }, [])

  return (
    <div onClick={handleClick} >
      <Demo ref={ref} />
    </div>
  );
};

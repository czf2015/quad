// @ts-nocheck
import { useEffect, useState } from 'react';

export const useInputValue = (propsValue) => {
  const [inputValue, setInputValue] = useState(propsValue);
  const [resetInput, setResetInput] = useState(1);

  const handleInputChange = (e) => {
    if (typeof e == 'object') {
      setInputValue(e.target.value);
    } else {
      setInputValue(e)
    }
  }

  useEffect(() => {
    setInputValue(propsValue)
  },
    [propsValue, resetInput]
  );

  return {
    inputValue,
    handleInputChange,
    setResetInput,
  }
}
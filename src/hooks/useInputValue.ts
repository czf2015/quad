// @ts-nocheck
import { useEffect, useState } from 'react';

export const useInputValue = (propsValue) => {
  const [inputValue, setInputValue] = useState(propsValue);
  const [resetInput, setResetInput] = useState(1);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  useEffect(() => { setInputValue(propsValue) }, [propsValue, resetInput]);

  return {
    inputValue,
    handleInputChange,
    setResetInput,
  }
}
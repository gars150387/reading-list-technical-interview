import React from 'react';
import { Slider } from 'antd';

const SliderFormat = ({ substractPages, onChange }) => {
  const turnStringToNumberValue = () => {
    const ref = substractPages
    let copy = []
    for (let i = 0; i < ref.length; i++) {
      copy = [...copy, Number(ref[i])]
    }
    return copy
  }
 
  return (
    <>
      <Slider min={turnStringToNumberValue()[0]} max={turnStringToNumberValue().at(-1)} onChange={onChange} />
    </>
  )
};
export default SliderFormat;
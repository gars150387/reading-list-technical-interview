import React from 'react';
import { Slider } from 'antd';
const onChange = (value) => {
  console.log('onChange: ', value);
};
const onAfterChange = (value) => {
  console.log('onAfterChange: ', value);
};
const SliderFormat = () => (
  <>
    <Slider defaultValue={0} onChange={onChange} onAfterChange={onAfterChange} />
  </>
);
export default SliderFormat;
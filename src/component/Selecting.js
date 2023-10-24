import React from 'react';
import { Select } from 'antd';
const Selecting = ({options}) => (
  console.log('options', options),
  <Select
    showSearch
    style={{
      width: 200,
    }}
    placeholder="Search gender"

    options={options.map(option => {
      return {
        label:option,
        value:option
      }
    })}
  />
);
export default Selecting;
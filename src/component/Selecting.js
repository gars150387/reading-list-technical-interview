import React from 'react';
import { Select } from 'antd';
const Selecting = ({ options, handleChange }) => {
  return (
    <Select
      showSearch
      style={{
        width: 200,
      }}
      onChange={handleChange}
      placeholder="Search gender"
      options={options.map(option => {
        return {
          label: option,
          value: option
        }
      })}
    />

  )


};
export default Selecting;
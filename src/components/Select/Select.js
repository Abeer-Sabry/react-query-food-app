import React from "react";

const Select = ({ arr, onChange = () => {} }) => {
  return (
    <select onChange={onChange} className="select">
      {arr.map(value => (
        <option value={value} key={value}>
          {value}
        </option>
      ))}
    </select>
  );
};

export default Select;

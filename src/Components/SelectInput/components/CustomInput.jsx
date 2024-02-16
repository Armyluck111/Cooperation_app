import React from "react";
import Select from "react-select";

const CustomInput = ({ label, options, field, form }) => {
  const handleChange = (selectedOption) => {
    form.setFieldValue(field.name, selectedOption?.value);
  };

  return (
    <div>
      <label htmlFor={field.name}>{label}</label>
      <Select
        {...field}
        options={options}
        value={options.find((option) => option.value === field.value)}
        onChange={handleChange}
      />
    </div>
  );
};

export default CustomInput;

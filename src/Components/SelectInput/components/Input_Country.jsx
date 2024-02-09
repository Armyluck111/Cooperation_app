// components/CustomInput.jsx
import React from "react";
import Select from "react-select"; // Import React-Select


const Input_Country = ({ label, options }) => {
    const optionsCountry = [
        { value: "مصر", label: "مصر" },
        { value: "السعودية", label: "السعودية" },
        { value: "الإمارات", label: "الإمارات" },
        { value: "الكويت", label: "الكويت" },
      ];
 
  const handleChange = (selectedOption) => {
    // Handle the selected value
    console.log("Selected value:", selectedOption?.value);
  };

  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <Select options={options} onChange={handleChange} />
    </div>
  );
};

export default Input_Country;

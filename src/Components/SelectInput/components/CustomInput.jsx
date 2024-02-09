// // components/CustomInput.jsx
// import React from "react";
// import Select from "react-select"; // Import React-Select


// const CustomInput = ({ label, options, value, onChange }) => {
//     const optionsCharities = [
//         { value: "جمعية رسالة", label: "جمعية رسالة" },
//         { value: "مؤسسة صناع الخير", label: "مؤسسة صناع الخير" },
//         { value: "مستشفي شفا الأورمان", label: "مستشفي شفا الأورمان" },
//         { value: "مصر الخير", label: "مصر الخير" },
//         { value: "جمعية مرسال", label: "جمعية مرسال" },
//         { value: "مؤسسة مجدي يعقوب", label: "مؤسسة مجدي يعقوب" },
//         { value: "جمعية الهلال الأحمر", label: "جمعية الهلال الأحمر" },
//         { value: "بنك الإطعام المصري", label: "بنك الإطعام المصري" },
//         { value: "لصالح كراتين طعام غزة", label: "لصالح كراتين طعام غزة" },
//         { value:  "لصالح سماعة أطفال", label:  "لصالح سماعة أطفال" },
//         { value:  "لصالح سرير إقامة في مستشفي مرسال", label:  "لصالح سرير إقامة في مستشفي مرسال"},
//         { value:  "لصالح عملية استئصال ورم سرطاني", label:  "لصالح عملية استئصال ورم سرطاني" },
//       ];
 
    

//   return (
//     <div>
//       <label htmlFor={label}>{label}</label>
//       <Select
//         options={optionsCharities}
//         value={optionsCharities.find((option) => option.value === value)}
//         onChange={(selectedOption) => onChange(selectedOption?.value)}
//       />
//     </div>
//   );
// };

// export default CustomInput;


// components/CustomInput.jsx
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


import React from "react";

const InputField = ({ type,value, label, placeholder, onChange,width,height }) => {
    const handleChange = (e) => {
        const { value } = e.target;
        onChange(value);
      };
  return (
    <>
      <input
        type={type ? type : "text"}
        value={value}
        style={{width:width?width:"50vw",paddingLeft:"6px",height:height?height:"32px"}}
        className="commonWidth"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </>
  );
};

export default InputField;

import React from "react";
import { useField,ErrorMessage } from "formik";

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field}{...props} />
      {meta.touched&&meta.error? <div style={{color:"red",fontSize:"12px"}}>{meta.error}</div>:null }
    </>
  );
};

export default TextInput;

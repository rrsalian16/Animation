import React from "react";
import { useField } from "formik";

const CheckBox = ({ children, ...props }) => {
  const [field, meta] = useField(props, "checkbox");

  return (
    <>
      <label className="checkbox">
         <input  type="checkbox" {...field} {...props} />
         {children}
      </label>
      {meta.touched && meta.error ? (
        <div style={{ color: "red" }}>{meta.error}</div>
      ) : null}
      
    </>
  );
};

export default CheckBox;

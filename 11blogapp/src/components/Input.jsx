import React, { forwardRef, useId } from "react";
const Input = forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="inline-block mb-1 pl-1">
          {label}
        </label>
      )}
      <input type={type} ref={ref} {...props} id={id}></input>
    </div>
  );
});

export default Input;
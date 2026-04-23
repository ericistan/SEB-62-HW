import React from "react";

const Input = (props) => {
  return (
    <>
      <input name={props.name} onChange={props.onChange} />
    </>
  );
};

export default Input;

import React from "react";
import Label from "./Label";
import Input from "./Input";
import Button from "./Button";

const Form = (props) => {
  const handleChange = (e) => {
    const newData = [...props.data];
    newData.find((row) => row.name === e.target.name).value = e.target.value;
    props.setData(newData);
  };

  return (
    <div>
      {props.data.map((row, idx) => {
        return (
          <div>
            <Label value={row.label} />
            <Input name={row.name} value={row.value} onChange={handleChange} />
          </div>
        );
      })}
      <Button />
    </div>
  );
};

export default Form;

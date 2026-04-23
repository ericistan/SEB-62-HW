import React from "react";
import Label from "./Label";
import Button from "./Button";

const Item = (props) => {
  return (
    <div id={props.id}>
      <Label value={props.item} />
      <Label value={props.price} />
      <Label value={props.date} />
      <Button>Update</Button>
      <Button handleClick={() => props.handleDelete(props.id)}>Delete</Button>
    </div>
  );
};

export default Item;

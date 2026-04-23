import React from "react";
import Item from "./Item";

const Display = (props) => {
  return (
    <div>
      {props.data.map((row, idx) => {
        return (
          <Item
            item={row.item}
            price={row.price}
            date={row.date}
            key={idx}
            id={idx}
            handleDelete={props.handleDelete}
          />
        );
      })}
    </div>
  );
};

export default Display;

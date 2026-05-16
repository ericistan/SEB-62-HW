import React from "react";

const StarshipCard = (props) => {
  return (
    <div className="card" style={props.style}>
      <h4>{props.name}</h4>
      <p>class: {props.class}</p>
      <p>manufacturer: {props.manufacturer}</p>
      <p>model: {props.model}</p>
    </div>
  );
};

export default StarshipCard;

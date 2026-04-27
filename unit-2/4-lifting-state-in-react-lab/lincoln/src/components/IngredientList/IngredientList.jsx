import React from "react";
// src/components/IngredientList/IngredientList.jsx

const IngredientList = (props) => {
  return (
    <ul
      className="ingredients-container"
      style={{
        backgroundColor: props.color,
        padding: "5px",
      }}
    >
      <li>
        {props.name}
        <button
          className="addButton"
          style={{ marginLeft: "auto", color: "white" }}
          onClick={() => props.addToBurger(props.id)}
        >
          +
        </button>
      </li>
    </ul>
  );
};

export default IngredientList;

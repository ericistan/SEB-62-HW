import React from "react";
// src/components/BurgerStack/BurgerStack.jsx

const BurgerStack = (props) => {
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
          onClick={() => props.removeFromBurger(props.id)}
        >
          X
        </button>
      </li>
    </ul>
  );
};

export default BurgerStack;

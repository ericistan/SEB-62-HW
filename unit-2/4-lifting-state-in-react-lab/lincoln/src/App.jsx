import React, { useState } from "react";
// src/App.jsx
import "./App.css";
// import styles from "./App.module.css";
import IngredientList from "./components/IngredientList/IngredientList";
import BurgerStack from "./components/BurgerStack/BurgerStack";

const App = () => {
  const [stack, setStack] = useState([]);

  const availableIngredients = [
    { name: "Kaiser Bun", color: "saddlebrown" },
    { name: "Sesame Bun", color: "sandybrown" },
    { name: "Gluten Free Bun", color: "peru" },
    { name: "Lettuce Wrap", color: "olivedrab" },
    { name: "Beef Patty", color: "#814b15" },
    { name: "Soy Patty", color: "#814b15" },
    { name: "Black Bean Patty", color: "#814b15" },
    { name: "Chicken Patty", color: "burlywood" },
    { name: "Lettuce", color: "lawngreen" },
    { name: "Tomato", color: "tomato" },
    { name: "Bacon", color: "maroon" },
    { name: "Onion", color: "lightyellow" },
    { name: "Cheddar Cheese", color: "#FDE18B" },
    { name: "Swiss Cheese", color: "#F1E1A8" },
  ];

  // const arrayIngredients = availableIngredients.map((object, index) => {
  //   return (
  //     <IngredientList name={object.name} color={object.color} key={index} />
  //   );
  // });

  const addToBurger = (idx) => {
    setStack((prevStack) => {
      return [...prevStack, availableIngredients[idx]];
    });
  };

  const removeFromBurger = (idx) => {
    setStack((prevStack) => [...prevStack].toSpliced(idx, 1));
  };

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
        {/* <IngredientList />
        <BurgerStack /> */}
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            padding: "5px",
          }}
        >
          {availableIngredients.map((object, index) => {
            return (
              <IngredientList
                name={object.name}
                color={object.color}
                key={index}
                id={index}
                addToBurger={addToBurger}
              />
            );
          })}
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column-reverse",
            padding: "5px",
          }}
        >
          {stack.map((object, index) => {
            return (
              <BurgerStack
                name={object.name}
                color={object.color}
                key={index}
                id={index}
                removeFromBurger={removeFromBurger}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default App;

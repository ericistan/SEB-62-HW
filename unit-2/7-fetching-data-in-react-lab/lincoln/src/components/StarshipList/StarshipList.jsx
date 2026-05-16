import React from "react";
import StarshipCard from "../StarshipCard/StarshipCard";

const StarshipList = (props) => {
  return (
    <div
      className="list"
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        background: "black",
        padding: "20px 10px",
      }}
    >
      {props.appData.map((ship, idx) => {
        return (
          <StarshipCard
            name={ship.name}
            class={ship.starship_class}
            model={ship.model}
            manufacturer={ship.manufacturer}
            key={idx}
            style={{
              display: "flex",
              flexDirection: "column",
              width: "400px",
              height: "250px",
              border: "1px solid white",
              padding: "10px",
              borderRadius: "8px",
              background: "lightgrey",
            }}
          />
        );
      })}
    </div>
  );
};

export default StarshipList;

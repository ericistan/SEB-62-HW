import React from "react";

const WeatherIcon = (props) => {
  return (
    <>
      <img src={props.src} alt={props.alt} />
    </>
  );
};

export default WeatherIcon;

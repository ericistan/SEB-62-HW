import React from "react";
import "./WeatherForecast.css";

const WeatherForecast = (props) => {
  return (
    <div className="weather">
      <h2>Day of the Week: {props.day}</h2>
      <img src={props.img} alt={props.imgAlt} />
      <p>
        <span>
          conditions: {props.conditions || "current weather conditions"}
        </span>
      </p>
      <p>
        <span>time: {props.time || "time of day"}</span>
      </p>
    </div>
  );
};

export default WeatherForecast;

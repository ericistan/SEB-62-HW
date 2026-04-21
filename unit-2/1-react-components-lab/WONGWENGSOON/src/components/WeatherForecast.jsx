import React from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";
import WeatherData from "./WeatherData";

const WeatherForecast = (props) => {
  return (
    <div className="weather">
      <WeatherData
        day={props.day}
        conditions={props.conditions}
        time={props.time}
      />
      <WeatherIcon img={props.img} imgAlt={props.imgAlt} />
    </div>
  );
};

export default WeatherForecast;

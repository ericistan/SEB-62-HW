import React from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";
import WeatherData from "./WeatherData";

const WeatherForecast = (props) => {
  const iconComp = <WeatherIcon src={props.img} alt={props.imgAlt} />;
  return (
    <div className="weather">
      <WeatherData day={props.day} conditions={props.conditons} time={props.time} icon={iconComp} />
    </div>
  );
};

export default WeatherForecast;

import React from "react";
import { formatForDateTimeLocal, getDateAndTime } from "../utils/appUtils.js";
import css from "../styles/App.module.css";

const AppointmentCard = (props) => {
  const localISODateTime = formatForDateTimeLocal(props.dateTime);
  const [localDate, localTime] = getDateAndTime(localISODateTime);
  return (
    <div className={css["card"]} onClick={props.onClick}>
      <div>{props.title}</div>
      <div>Type: {props.type}</div>
      <div>{`Date & Time: ${localDate}, ${localTime}`}</div>
    </div>
  );
};

export default AppointmentCard;

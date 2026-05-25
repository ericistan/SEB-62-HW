import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import UserContext from "../context/userContext.jsx";
import sharedFetch from "../shared/sharedFetch.jsx";
import css from "../styles/App.module.css";

const AppointmentDetails = (props) => {
  const location = useLocation();
  const { id } = location.state || {};
  const userCtx = useContext(UserContext);
  const [appointment, setAppointment] = useState({});
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);
  const fetchData = sharedFetch();
  const navigate = useNavigate();

  const getAppointment = async () => {
    setIsError(false);
    setError(null);

    const body = { appointment_id: id };
    const res = await fetchData("/api/appointments", "POST", body, userCtx.accessToken);

    if (res.ok) {
      setAppointment(res.data);
    } else if (res.message.includes("jwt expired")) {
      navigate("/login");
    } else {
      console.error("res", res.message);
    }
  };

  useEffect(() => {
    getAppointment();
  }, []);

  const handleDelete = async () => {
    const res = await fetchData(
      "/api/appointments",
      "DELETE",
      { appointment_id: appointment._id },
      userCtx.accessToken,
    );

    if (res.ok) {
      console.log("appointment deleted");
      navigate("/dashboard");
    } else {
      console.error("res", res.message);
    }
  };

  return (
    <div className={`container ${css["tab"]}`}>
      <h2>{`${appointment.title || "-"}`}</h2>
      <div className={css["card"]}>
        <div className={css["input-block"]}>Type: {appointment.type || "-"}</div>
        <div className={css["input-block"]}>Purpose: {appointment.purpose || "-"}</div>
        <div className={css["input-block"]}>Venue: {appointment.venue || "-"}</div>
        <div className={css["input-block"]}>Attendees: {appointment.attendees || "-"}</div>
        <div className={css["input-block"]}>Address: {appointment.address || "-"}</div>
        <div className={css["input-block"]}>Date & Time: {appointment.dateTime || "-"}</div>
        <div className={css["input-block"]}>Notes: {appointment.notes || "-"}</div>
        <div>
          <button onClick={() => navigate("/appointment/update", { state: { details: appointment } })}>edit</button>
          <button onClick={handleDelete}>delete</button>
        </div>
      </div>
      <button onClick={() => navigate("/dashboard")}>back</button>
    </div>
  );
};

export default AppointmentDetails;

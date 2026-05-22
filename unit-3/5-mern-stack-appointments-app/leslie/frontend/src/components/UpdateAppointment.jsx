import React, { useContext, useState } from "react";
import sharedFetch from "../shared/sharedFetch.jsx";
import { useLocation, useNavigate } from "react-router";
import UserContext from "../context/userContext.jsx";
import { formatForDateTimeLocal } from "../utils/appUtils.js";
import css from "../styles/App.module.css";

const UpdateAppointment = () => {
  const location = useLocation();
  const { details } = location.state || {};

  const [title, setTitle] = useState(details.title || "");
  const [type, setType] = useState(details.type || "");
  const [purpose, setPurpose] = useState(details.purpose || "");
  const [venue, setVenue] = useState(details.venue || "");
  const [attendees, setAttendees] = useState(details.attendees || "");
  const [address, setAddress] = useState(details.address || "");
  const [dateTime, setDateTime] = useState(formatForDateTimeLocal(details.dateTime) || "");
  const [notes, setNotes] = useState(details.notes || "");
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);
  const fetchData = sharedFetch();
  const navigate = useNavigate();
  const userCtx = useContext(UserContext);

  const handleUpdate = async () => {
    setIsError(false);
    setError(null);

    const res = await fetchData(
      "/api/appointments",
      "PATCH",
      {
        appointment_id: details._id,
        title,
        type,
        purpose,
        venue,
        attendees,
        address,
        dateTime,
        notes,
      },
      userCtx.accessToken,
    );

    if (res.ok) {
      console.log("appointment updated");
      navigate("/appointment", { state: { id: details._id } });
    } else {
      setError(res.message);
      setIsError(true);
    }
  };

  return (
    <div>
      <h2>Update appointment</h2>
      <div className={css["card"]}>
        <div className={css["input-block"]}>
          <div className={css["input-label"]}>Title:</div>
          <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
        </div>
        <div className={css["input-block"]}>
          <div className={css["input-label"]}>Type:</div>
          <input type="text" onChange={(e) => setType(e.target.value)} value={type} />
        </div>
        <div className={css["input-block"]}>
          <div className={css["input-label"]}>Purpose:</div>
          <input type="text" onChange={(e) => setPurpose(e.target.value)} value={purpose} />
        </div>
        <div className={css["input-block"]}>
          <div className={css["input-label"]}>Venue:</div>
          <input type="text" onChange={(e) => setVenue(e.target.value)} value={venue} />
        </div>
        <div className={css["input-block"]}>
          <div className={css["input-label"]}>Attendees:</div>
          <input type="text" onChange={(e) => setAttendees(e.target.value)} value={attendees} />
        </div>
        <div className={css["input-block"]}>
          <div className={css["input-label"]}>Address:</div>
          <input type="text" onChange={(e) => setAddress(e.target.value)} value={address} />
        </div>
        <div className={css["input-block"]}>
          <div className={css["input-label"]}>Date and time:</div>
          <input type="datetime-local" onChange={(e) => setDateTime(e.target.value)} value={dateTime} />
        </div>
        <div className={css["input-block"]}>
          <div className={css["input-label"]}>Notes:</div>
          <textarea onChange={(e) => setNotes(e.target.value)} value={notes} />
        </div>
        <div>
          {isError && error}
          {!isError && "\u00A0"}
        </div>
        <button onClick={handleUpdate}>update</button>
        <button onClick={() => navigate("/appointment", { state: { id: details._id } })}>cancel</button>
      </div>
    </div>
  );
};

export default UpdateAppointment;

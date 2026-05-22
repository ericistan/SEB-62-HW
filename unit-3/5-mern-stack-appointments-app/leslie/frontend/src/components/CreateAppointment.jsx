import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import sharedFetch from "../shared/sharedFetch.jsx";
import UserContext from "../context/userContext.jsx";
import css from "../styles/App.module.css";

const CreateAppointment = () => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [purpose, setPurpose] = useState("");
  const [venue, setVenue] = useState("");
  const [attendees, setAttendees] = useState("");
  const [address, setAddress] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [notes, setNotes] = useState("");
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);
  const fetchData = sharedFetch();
  const navigate = useNavigate();
  const userCtx = useContext(UserContext);

  const handleCreate = async () => {
    setIsError(false);
    setError(null);

    const res = await fetchData(
      "/api/appointments",
      "PUT",
      {
        user_id: userCtx.userId,
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
      console.log("appointment created");
      navigate("/dashboard");
    } else {
      setError(res.message);
      setIsError(true);
    }
  };

  return (
    <div>
      <h2>Create a new appointment</h2>
      <div className={css["card"]}>
        <div>
          {isError && error}
          {!isError && "\u00A0"}
        </div>
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
        <button onClick={handleCreate}>create</button>
        <button onClick={() => navigate("/dashboard")}>cancel</button>
      </div>
    </div>
  );
};

export default CreateAppointment;

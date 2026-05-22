import React, { useContext, useEffect, useState } from "react";
import UserContext from "../context/userContext.jsx";
import sharedFetch from "../shared/sharedFetch.jsx";
import AppointmentCard from "./AppointmentCard.jsx";
import { useNavigate } from "react-router";
import css from "../styles/App.module.css";

const Dashboard = () => {
  const userCtx = useContext(UserContext);
  const [appointments, setAppointments] = useState([]);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);
  const fetchData = sharedFetch();
  const navigate = useNavigate();

  const getAppointments = async () => {
    setIsError(false);
    setError(null);

    const res = await fetchData("/api/appointments", "GET", undefined, userCtx.accessToken);

    if (res.ok) {
      setAppointments(res.data);
    } else if (res.message.includes("jwt expired")) {
      navigate("/login");
    } else {
      console.error("res", res.message);
    }
  };

  useEffect(() => {
    getAppointments();
  }, []);

  return (
    <div className="container">
      <h2 className={css["h2"]}>{`Hey ${userCtx.username}`}</h2>
      <div>
        <div>Your Appointments:</div>
        {(!appointments || appointments.length === 0) && <div>You have no appointments currently</div>}
        {appointments &&
          appointments.length > 0 &&
          appointments.map((item) => (
            <AppointmentCard
              key={item._id}
              title={item.title}
              type={item.type}
              dateTime={item.dateTime}
              onClick={() => navigate("/appointment", { state: { id: item._id } })}
            />
          ))}
        <div>
          <button onClick={() => navigate("/appointment/create")}>+ create appointment</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

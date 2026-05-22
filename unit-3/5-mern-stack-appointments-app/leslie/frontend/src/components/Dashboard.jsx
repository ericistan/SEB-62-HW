import React, { useContext, useEffect, useState } from "react";
import UserContext from "../context/userContext.jsx";
import sharedFetch from "../shared/sharedFetch.jsx";

const Dashboard = () => {
  const userCtx = useContext(UserContext);
  const [appointments, setAppointments] = useState([]);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);
  const fetchData = sharedFetch();

  const getAppointments = async () => {
    setIsError(false);
    setError(null);

    const res = await fetchData("/api/appointments", "GET", undefined, userCtx.accessToken);

    if (res.ok) {
      setAppointments(res.data);
    } else {
      console.error(res.message);
    }
  };

  useEffect(() => {
    getAppointments();
  }, []);

  return (
    <div className="container">
      <h2>{`Hey ${userCtx.username}`}</h2>
      <div>
        {(!appointments || appointments.length === 0) && <div>You have no appointments currently</div>}
        {/* {appointments && appointments.length > 0 && <div>You have {appointments.length} appointments</div>} */}
        {appointments &&
          appointments.length > 0 &&
          appointments.map((item) => (
            <>
              <div>
                <div>{item.title}</div>
                <div>{item.type}</div>
                <div>{item.dateTime}</div>
              </div>
            </>
          ))}
        <div>
          <button>+ create appointment</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

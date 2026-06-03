import { React, use, useState } from "react";
import sharedFetch from "../services/sharedFetch.jsx";
import { useQuery } from "@tanstack/react-query";
import ApptCard from "./ApptCard.jsx";
import CreateModal from "./createModal.jsx";
import UserContext from "../context/user";
import UserModal from "./UserModal.jsx";

const Dashboard = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showUserModal, setShowUserModal] = useState(false);
  const [message, setMessage] = useState("");
  const userCtx = use(UserContext);
  const readAppts = async () => {
    const fetchData = sharedFetch();
    try {
      const res = await fetchData(
        `/users/${userCtx.userId}/appts`,
        "GET",
        undefined,
        userCtx.accessToken,
      );
      return res;
    } catch (error) {
      throw error;
    }
  };

  // to recognise and render data according to userId in params
  const apptQuery = useQuery({
    queryKey: ["appts", userCtx.userId],
    queryFn: readAppts,
    enabled: Boolean(userCtx.userId),
    staleTime: 2 * 60 * 1000,
  });

  const appointments = apptQuery.data?.appointments ?? apptQuery.data ?? [];

  return (
    <>
      {showCreateModal && (
        <CreateModal setShowCreateModal={setShowCreateModal} />
      )}
      {showUserModal && <UserModal setShowUserModal={setShowUserModal} />}

      <div className="row">
        <h1 className="col-md-6">Appointment List</h1>
      </div>

      <br />
      <div className="row">
        <button
          type="button"
          className="col-md-3"
          onClick={() => setShowCreateModal(true)}
        >
          Add Appt
        </button>
        <button
          type="button"
          className="col-md-3"
          onClick={() => setShowUserModal(true)}
        >
          User List
        </button>
      </div>
      <br />
      <p>status message for checking:</p>
      <p>{userCtx.role ? `You Are ${userCtx.role}` : ""}</p>
      {apptQuery.isError && apptQuery.error?.message}
      {message ? <p style={{ color: "green" }}>{message}</p> : ""}
      <br />
      <br />
      <div className="row" style={{ border: "solid 1px black" }}>
        <div className="col-md-2">Title</div>
        <div className="col-md-1">Type</div>
        <div className="col-md-3">Purpose</div>
        <div className="col-md-2"></div>
        <div className="col-md-2"></div>
        <div className="col-md-2"></div>
      </div>
      <br />
      {apptQuery.isSuccess &&
        appointments.map((item) => {
          return (
            <ApptCard
              key={item._id}
              id={item._id}
              data={item}
              setMessage={setMessage}
            />
          );
        })}
    </>
  );
};

export default Dashboard;

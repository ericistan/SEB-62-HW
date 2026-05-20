import React, { useState } from "react";
import sharedFetch from "../services/sharedFetch.jsx";
import { useQuery } from "@tanstack/react-query";
import ApptCard from "./ApptCard.jsx";
import CreateModal from "./createModal.jsx";

const Dashboard = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [message, setMessage] = useState("");
  const readAppts = async () => {
    const fetchData = sharedFetch();
    try {
      const res = await fetchData("/api/appts", undefined, undefined);
      return res;
    } catch (error) {
      throw error;
    }
  };

  const apptQuery = useQuery({
    queryKey: ["appts"],
    queryFn: readAppts,
    enabled: true,
    staleTime: 2 * 60 * 1000,
  });

  return (
    <>
      {showCreateModal && (
        <CreateModal setShowCreateModal={setShowCreateModal} />
      )}

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
      </div>
      <br />
      <p>status message for checking:</p>
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
        apptQuery.data.map((item) => {
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

import { React, useState } from "react";
import sharedFetch from "../services/sharedFetch";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import ShowModal from "./ShowModal";
import UpdateModal from "./updateModal";

const ApptCard = (props) => {
  const fetchData = sharedFetch();
  const queryClient = useQueryClient();
  const [showShowModal, setShowShowModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const deleteAppt = async () => {
    try {
      const res = await fetchData(
        "/api/appts/" + props.id,
        "DELETE",
        undefined,
      );
      return res;
    } catch (error) {
      throw error;
    }
  };

  const deleteMutate = useMutation({
    mutationFn: deleteAppt,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["appts"] }),
  });

  return (
    <>
      {deleteMutate.isError && deleteMutate.error?.message}
      {deleteMutate.isError && deleteMutate.error?.message}
      {showShowModal && (
        <ShowModal
          id={props.id}
          data={props.data}
          setShowShowModal={setShowShowModal}
          style={{
            paddingTop: "10px",
            paddingBottom: "10px",
            border: "solid 1px black",
          }}
        />
      )}
      {showUpdateModal && (
        <UpdateModal
          id={props.id}
          data={props.data}
          setShowUpdateModal={setShowUpdateModal}
        />
      )}
      <div
        className="row"
        style={{
          paddingTop: "10px",
          paddingBottom: "10px",
          border: "solid 1px black",
        }}
      >
        <div className="col-md-2">{props.data.title}</div>
        <div className="col-md-1">{props.data.type}</div>
        <div className="col-md-3" style={{ flexWrap: "wrap" }}>
          {props.data.purpose}
        </div>
        <button
          type="button"
          className="col-md-2"
          onClick={() => setShowShowModal(true)}
        >
          SHOW MORE
        </button>
        <button
          type="button"
          className="col-md-2"
          onClick={() => setShowUpdateModal(true)}
        >
          UPDATE
        </button>
        <button
          type="button"
          className="col-md-2"
          onClick={deleteMutate.mutate}
        >
          DELETE
        </button>
      </div>
    </>
  );
};

export default ApptCard;

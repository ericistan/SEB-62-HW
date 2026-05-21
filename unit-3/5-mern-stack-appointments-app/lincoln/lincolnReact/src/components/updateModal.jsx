import { React, use, useRef } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import sharedFetch from "../services/sharedFetch";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import UserContext from "../context/user";

const Overlay = (props) => {
  const titleRef = useRef("");
  const typeRef = useRef("");
  const purposeRef = useRef("");
  const personRef = useRef("");
  const addressRef = useRef("");
  const commentRef = useRef("");
  const dateRef = useRef("");
  const timeRef = useRef("");
  const queryClient = useQueryClient();
  const fetchData = sharedFetch();
  const userCtx = use(UserContext);

  const formatSGDate = (dateString) => {
    if (!dateString) return "";

    const date = new Date(dateString);

    // 1. Manually add 8 hours to shift UTC to Singapore Time
    const SGT_OFFSET = 8 * 60 * 60 * 1000;
    const sgDate = new Date(date.getTime() + SGT_OFFSET);

    // 2. convert to ISO string ("2026-06-10T00:00:00.000Z") and grab just the first 10 characters
    return sgDate.toISOString().split("T")[0];
  };

  const updateAppt = async () => {
    try {
      if (
        !titleRef.current.value.trim() ||
        !typeRef.current.value.trim() ||
        !dateRef.current.value.trim() ||
        !timeRef.current.value.trim()
      ) {
        throw new Error(
          "Missing fields! title, type, date, time cannot be empty!!",
        );
      }
      const res = await fetchData(
        `/users/${userCtx.userId}/appts/` + props.id,
        "PATCH",
        {
          title: titleRef.current.value.trim(),
          type: typeRef.current.value.trim(),
          purpose: purposeRef.current.value.trim() || undefined,
          person: personRef.current.value.trim() || undefined,
          address: addressRef.current.value.trim() || undefined,
          comment: commentRef.current.value.trim() || undefined,
          date: dateRef.current.value.trim(),
          time: timeRef.current.value.trim(),
        },
        userCtx.accessToken,
      );
      return res;
    } catch (error) {
      throw error;
    }
  };

  const { isSuccess, isError, error, mutate } = useMutation({
    mutationFn: updateAppt,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["appts"] });
      // props.setShowUpdateModal(false);
    },
  });

  return (
    <>
      <div className={styles.backdrop}>
        <div className={styles.modal}>
          <br />
          {isError && (
            <p style={{ color: "red", paddingLeft: "40px" }}>
              {error?.message}
            </p>
          )}
          {isSuccess && (
            <p style={{ color: "green", paddingLeft: "40px" }}>
              Appointment updated successfully!
            </p>
          )}
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-3">Title:</div>
            <input
              className="col-md-7"
              type="text"
              ref={titleRef}
              defaultValue={props.data.title}
            />
            <div className="col-md-1"></div>
          </div>
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-3">Type:</div>
            <input
              className="col-md-7"
              type="text"
              ref={typeRef}
              defaultValue={props.data.type}
            />
            <div className="col-md-1"></div>
          </div>
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-3">Purpose:</div>
            <input
              className="col-md-7"
              type="text"
              ref={purposeRef}
              defaultValue={props.data.purpose}
            />
            <div className="col-md-1"></div>
          </div>
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-3">Meeting with:</div>
            <input
              className="col-md-7"
              type="text"
              ref={personRef}
              defaultValue={props.data.person}
            />
            <div className="col-md-1"></div>
          </div>
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-3">Address:</div>
            <input
              className="col-md-7"
              type="text"
              ref={addressRef}
              defaultValue={props.data.address}
            />
            <div className="col-md-1"></div>
          </div>
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-3">Comment:</div>
            <input
              className="col-md-7"
              type="text"
              ref={commentRef}
              defaultValue={props.data.comment}
            />
            <div className="col-md-1"></div>
          </div>
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-3">Date:</div>
            <input
              className="col-md-7"
              type="date"
              ref={dateRef}
              defaultValue={formatSGDate(props.data.date)}
            />
            <div className="col-md-1"></div>
          </div>
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-3">Time:</div>
            <input
              className="col-md-7"
              type="time"
              ref={timeRef}
              defaultValue={props.data.time}
            />
            <div className="col-md-1"></div>
          </div>
          <div className="row">
            <div className="col-md-1"></div>
            <button
              type="button"
              className="col-md-3"
              onClick={() => {
                props.setShowUpdateModal(false);
              }}
            >
              Close
            </button>
            <button type="button" className="col-md-3" onClick={mutate}>
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const UpdateModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Overlay
          id={props.id}
          data={props.data}
          setShowUpdateModal={props.setShowUpdateModal}
        />,
        document.querySelector("#modal-root"),
      )}
    </>
  );
};

export default UpdateModal;

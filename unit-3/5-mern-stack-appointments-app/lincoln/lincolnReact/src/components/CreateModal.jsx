import { React, use, useRef } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import sharedFetch from "../services/sharedFetch";
import UserContext from "../context/user";

const Overlay = (props) => {
  const titleRef = useRef();
  const typeRef = useRef();
  const purposeRef = useRef();
  const personRef = useRef();
  const addressRef = useRef();
  const commentRef = useRef();
  const dateRef = useRef();
  const timeRef = useRef();
  const queryClient = useQueryClient();
  const fetchData = sharedFetch();
  const userCtx = use(UserContext);

  const createAppt = async () => {
    // .trim() are for optional field, if empty value, dont send the keys as well

    try {
      if (
        !titleRef.current.value.trim() ||
        !typeRef.current.value.trim() ||
        !dateRef.current.value.trim() ||
        !timeRef.current.value.trim()
      ) {
        throw new Error("Missing fields! title, type, date, time are required");
      }

      const res = await fetchData(
        `/users/${userCtx.userId}/appts`,
        "PUT",
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

  const createMutate = useMutation({
    mutationFn: createAppt,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["appts"] }),
  });

  return (
    <>
      <div className={styles.backdrop}>
        <div className={styles.modal}>
          <br />
          {createMutate.isError && (
            <p style={{ color: "red", paddingLeft: "40px" }}>
              {createMutate.error?.message}
            </p>
          )}
          {createMutate.isSuccess && (
            <p style={{ color: "green", paddingLeft: "40px" }}>
              Appointment created successfully!
            </p>
          )}
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-3">Title:</div>
            <input
              className="col-md-7"
              type="text"
              ref={titleRef}
              placeholder="title.."
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
              placeholder="type.."
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
              placeholder="state your purpose.."
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
              placeholder="meet who???"
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
              placeholder="go where???"
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
              placeholder="write notes here.."
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
              placeholder="when???"
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
              placeholder="what time???"
            />
            <div className="col-md-1"></div>
          </div>
          <div className="row">
            <div className="col-md-1"></div>
            <button
              type="button"
              className="col-md-3"
              onClick={() => {
                props.setShowCreateModal(false);
              }}
            >
              Close
            </button>
            <button
              type="button"
              className="col-md-3"
              onClick={createMutate.mutate}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const CreateModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Overlay setShowCreateModal={props.setShowCreateModal} />,
        document.querySelector("#modal-root"),
      )}
    </>
  );
};

export default CreateModal;

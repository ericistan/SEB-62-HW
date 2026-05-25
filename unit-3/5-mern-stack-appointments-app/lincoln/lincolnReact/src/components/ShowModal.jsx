import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const Overlay = (props) => {
  const formatSGDate = (dateString) => {
    if (!dateString) return "";

    const date = new Date(dateString);

    const optionsDate = { day: "numeric", month: "long", year: "numeric" };
    const formattedDate = date.toLocaleDateString("en-SG", optionsDate);

    return `${formattedDate}`;
  };

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <br />

        <div className="row" style={props.style}>
          <div className="col-md-1"></div>
          <div className="col-md-3">Title:</div>
          <div className="col-md-7">{props.data.title}</div>
          <div className="col-md-1"></div>
        </div>
        <div className="row" style={props.style}>
          <div className="col-md-1"></div>
          <div className="col-md-3">Type:</div>
          <div className="col-md-7">{props.data.type}</div>
          <div className="col-md-1"></div>
        </div>
        <div className="row" style={props.style}>
          <div className="col-md-1"></div>
          <div className="col-md-3">Purpose:</div>
          <div className="col-md-7">{props.data.purpose}</div>
          <div className="col-md-1"></div>
        </div>
        <div className="row" style={props.style}>
          <div className="col-md-1"></div>
          <div className="col-md-3">Meeting with:</div>
          <div className="col-md-7">{props.data.person}</div>
          <div className="col-md-1"></div>
        </div>
        <div className="row" style={props.style}>
          <div className="col-md-1"></div>
          <div className="col-md-3">Address:</div>
          <div className="col-md-7">{props.data.address}</div>
          <div className="col-md-1"></div>
        </div>
        <div className="row" style={props.style}>
          <div className="col-md-1"></div>
          <div className="col-md-3">Comment:</div>
          <div className="col-md-7">{props.data.comment}</div>
          <div className="col-md-1"></div>
        </div>
        <div className="row" style={props.style}>
          <div className="col-md-1"></div>
          <div className="col-md-3">Date:</div>
          <div className="col-md-7">{formatSGDate(props.data.date)}</div>
          <div className="col-md-1"></div>
        </div>
        <div className="row" style={props.style}>
          <div className="col-md-1"></div>
          <div className="col-md-3">Time:</div>
          <div className="col-md-7">{props.data.time}</div>
          <div className="col-md-1"></div>
        </div>
        <div className="row" style={props.style}>
          <div className="col-md-1"></div>
          <button
            type="type"
            className="col-md-3"
            onClick={() => {
              props.setShowShowModal(false);
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const ShowModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Overlay
          id={props.id}
          data={props.data}
          setShowShowModal={props.setShowShowModal}
          style={{
            padding: "5px",
          }}
        />,
        document.querySelector("#modal-root"),
      )}
    </>
  );
};

export default ShowModal;

import React, { useContext } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import sharedFetch from "../services/sharedFetch";
import UserContext from "../context/user";
import { useQuery } from "@tanstack/react-query";

const Overlay = (props) => {
  const fetchData = sharedFetch();
  const userCtx = useContext(UserContext);

  const getAllUsers = async () => {
    try {
      const res = await fetchData(
        "/auth/users",
        undefined,
        undefined,
        userCtx.accessToken,
      );
      return res;
    } catch (error) {
      throw error;
    }
  };

  const { data, isSuccess, isError } = useQuery({
    queryKey: ["users", userCtx.userId],
    queryFn: getAllUsers,
    enabled: Boolean(userCtx.userId),
  });
  const users = Array.isArray(data) ? data : [data];

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <br />

        <p style={props.style}>YOU CAN ONLY SEE THE LIST IF YOU ARE ADMIN</p>

        {isSuccess &&
          users.map((item) => {
            return (
              <p style={props.style}>
                {item.username} - {item.role}
              </p>
            );
          })}
        <div className="row" style={props.style}>
          <div className="col-md-1"></div>
          <button
            type="type"
            className="col-md-3"
            onClick={() => {
              props.setShowUserModal(false);
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const UserModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Overlay
          setShowUserModal={props.setShowUserModal}
          style={{
            paddingLeft: "20px",
          }}
        />,
        document.querySelector("#modal-root"),
      )}
    </>
  );
};

export default UserModal;

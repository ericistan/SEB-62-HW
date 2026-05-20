import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import sharedFetch from "../shared/sharedFetch";
import UserContext from "../context/user";
import { use } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const OverLay = (props) => {
  const titleRef = useRef("");
  const authorRef = useRef("");
  const yearRef = useRef("");
  const fetchData = sharedFetch();
  // const [isError, setIsError] = useState(false);
  // const [error, setError] = useState(null);
  const userCtx = use(UserContext);
  const queryClient = useQueryClient();

  const updateBook = async () => {
    // setIsError(false);
    // setError(null);

    try {
      const res = await fetchData(
        "/api/books/" + props.id,
        "PATCH",
        {
          title: titleRef.current.value,
          author: authorRef.current.value,
          year: yearRef.current.value,
        },
        userCtx.accessToken,
      );
      return res;
    } catch (error) {
      throw error;
    }
  };

  const { isError, error, mutate } = useMutation({
    mutationFn: updateBook,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["books"] });
      props.setShowUpdateModal(false);
    },
  });

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        {isError && error?.message}
        {!isError && "\u00A0"}
        <br />
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-3">Title</div>
          <input
            ref={titleRef}
            type="text"
            className="col-md-3"
            defaultValue={props.title}
          />
          <div className="col-md-3"></div>
        </div>

        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-3">Author</div>
          <input
            ref={authorRef}
            type="text"
            className="col-md-3"
            defaultValue={props.author}
          />
          <div className="col-md-3"></div>
        </div>

        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-3">Year Published</div>
          <input
            ref={yearRef}
            type="text"
            className="col-md-3"
            defaultValue={props.yearPublished}
          />
          <div className="col-md-3"></div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-3"></div>
          <button onClick={mutate} className="col-md-3">
            update
          </button>
          <button
            onClick={() => props.setShowUpdateModal(false)}
            className="col-md-3"
          >
            cancel
          </button>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  );
};

const UpdateModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <OverLay
          id={props.id}
          title={props.title}
          author={props.author}
          yearPublished={props.yearPublished}
          setShowUpdateModal={props.setShowUpdateModal}
          getBooks={props.getBooks}
        />,
        document.querySelector("#modal-root"),
      )}
    </>
  );
};

export default UpdateModal;

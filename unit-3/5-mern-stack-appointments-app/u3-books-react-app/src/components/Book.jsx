import React, { use, useState } from "react";
import styles from "./Book.module.css";
import UpdateModal from "./UpdateModal";
import sharedFetch from "../shared/sharedFetch";
import UserContext from "../context/user";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const Book = (props) => {
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const userCtx = use(UserContext);
  const fetchData = sharedFetch();
  const queryClient = useQueryClient();

  const deleteBook = async () => {
    try {
      await fetchData(
        "/api/books/" + props.id,
        "DELETE",
        undefined,
        userCtx.accessToken,
      );
      return "";
    } catch (error) {
      throw error;
    }
  };

  const { isError, error, mutate } = useMutation({
    mutationFn: deleteBook,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["books"] }),
  });

  return (
    <>
      {isError && error?.message}
      {isError && error?.message}
      {showUpdateModal && (
        <UpdateModal
          id={props.id}
          title={props.title}
          author={props.author}
          yearPublished={props.yearPublished}
          getBooks={props.getBooks}
          setShowUpdateModal={setShowUpdateModal}
        />
      )}

      <div className={`row ${styles.book}`}>
        <div className="col-sm-3">{props.title}</div>
        <div className="col-sm-3">{props.author}</div>
        <div className="col-sm-2">{props.yearPublished}</div>

        {userCtx.accessToken && userCtx.role === "ADMIN" ? (
          <>
            <button className="col-sm-2" onClick={mutate}>
              delete
            </button>

            <button
              className="col-sm-2"
              onClick={() => setShowUpdateModal(true)}
            >
              update
            </button>
          </>
        ) : (
          <>
            <button className="col-sm-2" disabled>
              delete
            </button>

            <button className="col-sm-2" disabled>
              update
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default Book;

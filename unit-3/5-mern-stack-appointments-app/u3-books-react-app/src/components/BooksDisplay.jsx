import React, { useEffect, useRef, useState } from "react";
import Book from "./Book";
import sharedFetch from "../shared/sharedFetch";
import UserContext from "../context/user";
import { use } from "react";
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

const BooksDisplay = () => {
  const [books, setBooks] = useState([]);
  const fetchData = sharedFetch();
  const userCtx = use(UserContext);
  const queryClient = useQueryClient();
  const titleRef = useRef();
  const authorRef = useRef();
  const yearRef = useRef();

  const getBooks = async () => {
    try {
      const res = await fetchData(
        "/api/books",
        undefined,
        undefined,
        userCtx.accessToken,
      );
      return res;
    } catch (error) {
      throw error;
    }
  };

  const addBook = async () => {
    try {
      const res = await fetchData(
        "/api/books",
        "PUT",
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

  const query = useQuery({
    queryKey: ["books"],
    queryFn: getBooks,
  });

  const mutate = useMutation({
    mutationFn: addBook,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["books"] });
      titleRef.current.value = "";
      authorRef.current.value = "";
      yearRef.current.value = "";
    },
  });

  return (
    <>
      {query.isError && query.error?.message}
      {mutate.isError && mutate.error?.message}
      <div className="row">
        <h1 className="col-md-6">Book List</h1>
      </div>
      {userCtx.accessToken && userCtx.role === "ADMIN" && (
        <div className="row">
          <input
            type="text"
            ref={titleRef}
            placeholder="title"
            className="col-md-3"
          />
          <input
            type="text"
            ref={authorRef}
            placeholder="author"
            className="col-md-3"
          />
          <input
            type="text"
            ref={yearRef}
            placeholder="year published"
            className="col-md-3"
          />
          <button className="col-md-3" onClick={mutate.mutate}>
            add
          </button>
        </div>
      )}

      <br />
      <br />

      <div className="row">
        <div className="col-md-3">Title</div>
        <div className="col-md-3">Author</div>
        <div className="col-md-2">Year Published</div>
        <div className="col-md-2"></div>
        <div className="col-md-2"></div>
      </div>

      {query.isSuccess &&
        query.data.map((item) => {
          return (
            <Book
              key={item._id}
              id={item._id}
              title={item.title}
              author={item.author}
              yearPublished={item.year_published}
              getBooks={getBooks}
            />
          );
        })}
    </>
  );
};

export default BooksDisplay;

import React, { useState } from "react";

const Bookshelf = () => {
  const [books, setBooks] = useState([
    { title: "Fourth Wing", author: "Rebecca Yarros" },
    { title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis" },
  ]);

  // for storing input
  const [newBook, setNewBook] = useState({ title: "", author: "" });
  // allow saving input to state
  //
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const updatedBook = { ...newBook, [name]: value };
    setNewBook(updatedBook);
  };

  const handleSubmit = (event) => {
    // prevent page from reload because html form still refresh hence causing useState losing data
    // during submit press, 2 async events fired, however refresh can be faster than saving State
    event.preventDefault();

    setBooks((prevBooks) => {
      return [...prevBooks, newBook];
    });
    // this initialize typed input at newBook
    setNewBook({ title: "", author: "" });
  };

  return (
    <div className="bookshelfDiv">
      {JSON.stringify(books)} <br />
      {JSON.stringify(newBook)} <br />
      <div
        className="formDiv"
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "20px",
          width: "600px",
        }}
      >
        <h3>Add a Book</h3>
        {/* Form will go here */}
        {/* benefits of form is allow submit by Enter key too */}
        {/* improve accessibility with htmlFor, can press outside input box */}
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={newBook.title}
            placeholder="type here..."
            onChange={handleInputChange}
          />
          <br />
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            name="author"
            value={newBook.author}
            placeholder="type here..."
            onChange={handleInputChange}
          />
          <br />
          <button type="submit">Add Book</button>
        </form>
        <br />
      </div>
      <div className="bookCardsDiv">
        {/* Book cards will display here */}
        {books.map((object, index) => (
          <div className="bookCard" key={index}>
            <h4>{object.title}</h4>
            <p>Author: {object.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;

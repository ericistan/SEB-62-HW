import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router";
import MailboxList from "./components/MailboxList/MailboxList";
import MailboxForm from "./components/MailboxForm/MailboxForm";
import MailboxDetails from "./components/MailboxDetails/MailboxDetails";

function App() {
  const [mailboxes, setMailboxes] = useState([
    { boxholder: "Amy", boxsize: "Small", _id: "1" },
    { boxholder: "Bob", boxsize: "Medium", _id: "2" },
  ]);
  const [input, setInput] = useState({ boxholder: "", boxsize: "" });
  const addBox = (event) => {
    event.preventDefault();
    const newID = String(mailboxes.length + 1); // note id is string
    const newMailbox = { ...input, _id: newID };
    setMailboxes((prevMailboxes) => [...prevMailboxes, newMailbox]);
    setInput({ boxholder: "", boxsize: "" });
  };
  return (
    <div className="container">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <h1>Post Office </h1>
            </main>
          }
        />
        <Route
          path="/mailboxes"
          element={<MailboxList mailboxes={mailboxes} />}
        />
        <Route
          path="/new-mailbox"
          element={
            <MailboxForm addBox={addBox} input={input} setInput={setInput} />
          }
        />
        <Route
          path="/mailboxes/:mailboxId"
          element={<MailboxDetails mailboxes={mailboxes} />}
        />
      </Routes>
    </div>
  );
}

export default App;

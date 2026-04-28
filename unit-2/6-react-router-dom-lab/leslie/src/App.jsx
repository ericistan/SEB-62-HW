import React, { useState } from "react";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import FourOFour from "./components/FourOFour";
import MailboxList from "./components/MailboxList";
import MailboxForm from "./components/MailboxForm";
import MailboxDetails from "./components/MailboxDetails";

function App() {
  const [uniqueId, setUniqueId] = useState(2);
  const initMailBoxes = [
    {
      _id: 1,
      boxSize: "Small",
      boxOwner: "Alex",
    },
    {
      _id: 2,
      boxSize: "Medium",
      boxOwner: "Ben",
    },
    {
      _id: 3,
      boxSize: "Large",
      boxOwner: "Claire",
    },
  ];
  const [mailboxes, setMailboxes] = useState(initMailBoxes);

  return (
    <div className="container">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
        <Route path="/new-mailbox" element={<MailboxForm />} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />} />
        <Route path="*" element={<FourOFour />} />
      </Routes>
    </div>
  );
}

export default App;

import React from "react";
import { useParams } from "react-router";

const MailboxDetails = (props) => {
  const { mailboxId } = useParams();
  const selectedBox = props.mailboxes.find(
    (mailbox) => mailbox._id === mailboxId,
  );

  if (!selectedBox) {
    return <h2>Mailbox Not Found!</h2>;
  }

  return (
    <div className="detail">
      <h1>Mailbox {selectedBox._id}</h1>
      <h3>Details</h3>
      <p>Box Number: {selectedBox._id}</p>
      <p>Boxholder: {selectedBox.boxholder}</p>
      <p>Box Size: {selectedBox.boxsize}</p>
    </div>
  );
};

export default MailboxDetails;

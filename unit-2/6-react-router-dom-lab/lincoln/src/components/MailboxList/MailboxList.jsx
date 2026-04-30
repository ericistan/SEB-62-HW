import React from "react";
import { NavLink } from "react-router";
import styles from "./MailboxList.module.css";

const MailboxList = (props) => {
  return (
    <div>
      <h2>Mailboxes</h2>
      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        {props.mailboxes.map((mailbox) => (
          <NavLink
            to={`/mailboxes/${mailbox._id}`}
            key={mailbox._id}
            className={styles["mail-box"]}
          >
            {mailbox._id}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default MailboxList;

import React, { useState } from "react";
import { NavLink } from "react-router";

const MailboxForm = (props) => {
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    props.setInput({ ...props.input, [name]: value });
  };

  const handleSubmit = (event) => {
    props.addBox(event);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div>
        <p>Mailbox created.</p>
        <NavLink to="/mailboxes">Go to Mailboxes</NavLink>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="boxholder">Enter a Boxholder:</label>
      <input
        name="boxholder"
        type="text"
        value={props.input.boxholder}
        placeholder="Enter Boxholder name.."
        onChange={handleInputChange}
      />
      <br />
      <label htmlFor="boxsize">Select a Box Size:</label>
      <select
        id="selection"
        name="boxsize"
        value={props.input.boxsize}
        onChange={handleInputChange}
      >
        <option value=""></option>
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  );
};

export default MailboxForm;

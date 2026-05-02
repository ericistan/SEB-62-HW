import React, { useState } from "react";
import "../App.css";

const AddLanguageForm = ({ onAddLanguage }) => {
  const [languageName, setLanguageName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    onAddLanguage(languageName);
    setLanguageName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter language name"
        value={languageName}
        onChange={(event) => setLanguageName(event.target.value)}
      />
      <button type="submit">Add Language</button>
    </form>
  );
};

export default AddLanguageForm;

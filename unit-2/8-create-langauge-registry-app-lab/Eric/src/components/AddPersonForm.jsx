import React, { useState } from "react";

function AddPersonForm({ onAddPerson, languages }) {
  const [personName, setPersonName] = useState("");
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const handleLanguageSelect = (event) => {
    const selected = Array.from(event.target.selectedOptions, (option) =>
      Number(option.value),
    );
    setSelectedLanguages(selected);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddPerson(personName, selectedLanguages);
    setPersonName("");
    setSelectedLanguages([]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter person's name"
        value={personName}
        onChange={(e) => setPersonName(e.target.value)}
      />

      <h3>Add Language</h3>
      <select
        multiple
        value={selectedLanguages.map(String)}
        onChange={handleLanguageSelect}
        size={5}
      >
        {languages.map((lang) => (
          <option key={lang.id} value={lang.id}>
            {lang.name}
          </option>
        ))}
      </select>
      <small className="form-helper">
        Press Cmd+Click (Mac) or Ctrl+Click (Windows) to select multiple
        languages
      </small>

      <button type="submit">Submit</button>
    </form>
  );
}

export default AddPersonForm;

import React, { useState } from "react";

function PersonDetail({
  person,
  languages,
  onUpdatePerson,
  onAddLanguageToPerson,
  onDeleteLanguageFromPerson,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(person.name);

  const handleSaveName = () => {
    onUpdatePerson(person.id, editedName);
    setIsEditing(false);
  };

  const personLanguages = person.languageIds.map((langId) =>
    languages.find((lang) => lang.id === langId),
  );

  return (
    <div>
      <div className="detail-header">
        {isEditing ? (
          <>
            <input
              value={editedName}
              onChange={(event) => setEditedName(event.target.value)}
            />
            <button onClick={handleSaveName}>Save</button>
          </>
        ) : (
          <>
            <h2>{person.name}</h2>
            <button
              onClick={() => setIsEditing(true)}
              className="icon-button edit"
              title="Edit"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
              </svg>
            </button>
          </>
        )}
      </div>

      <select
        onChange={(event) =>
          onAddLanguageToPerson(person.id, Number(event.target.value))
        }
        className="section-margin"
      >
        <option value="">Add a language</option>
        {languages.map((lang) => (
          <option key={lang.id} value={lang.id}>
            {lang.name}
          </option>
        ))}
      </select>

      <h3>Languages Known</h3>
      {personLanguages.length === 0 ? (
        <p>No languages yet</p>
      ) : (
        <ul>
          {personLanguages.map((lang) => (
            <li key={lang.id}>
              {lang.name}
              <button
                onClick={() => onDeleteLanguageFromPerson(person.id, lang.id)}
                className="icon-button delete"
                title="Remove"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="3 6 5 6 21 6" />
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                  <line x1="10" y1="11" x2="10" y2="17" />
                  <line x1="14" y1="11" x2="14" y2="17" />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PersonDetail;

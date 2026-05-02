import React from "react";

function PeopleList({ people, languages, onSelectPerson, onDeletePerson }) {
  return (
    <div>
      <h2>People</h2>
      {people.length === 0 ? (
        <p>No people added yet</p>
      ) : (
        <ul>
          {people.map((person) => (
            <li key={person.id} className="person-item">
              <div onClick={() => onSelectPerson(person.id)} className="person-info">
                <p>
                  {person.name}
                </p>
                <p>
                  {person.languageIds.length === 0
                    ? "No languages"
                    : person.languageIds
                        .map(
                          (langId) =>
                            languages.find((lang) => lang.id === langId)?.name
                        )
                        .join(", ")}
                </p>
              </div>
              <button
                onClick={() => onDeletePerson(person.id)}
                className="icon-button delete"
                title="Delete"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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

export default PeopleList;

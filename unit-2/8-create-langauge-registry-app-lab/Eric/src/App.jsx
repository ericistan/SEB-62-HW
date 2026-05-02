import React, { useState, useEffect } from "react";
import languageService from "./services/languageService";
import AddLanguageForm from "./components/AddLanguageForm";
import LanguageList from "./components/LanguageList";
import AddPersonForm from "./components/AddPersonForm";
import PeopleList from "./components/PeopleList";
import PersonDetail from "./components/PersonDetail";
import "./App.css";

function App() {
  const [languages, setLanguages] = useState([]);
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPersonId, setSelectedPersonId] = useState(null);

  useEffect(() => {
    const fetchLanguages = async () => {
      const data = await languageService.fetchLanguages();
      setLanguages(data);
      setLoading(false);
    };
    fetchLanguages();
  }, []);

  const handleAddLanguage = (languageName) => {
    const newLanguage = {
      id: languages.length + 1,
      name: languageName,
      code: languageName.slice(0, 3).toLowerCase(),
    };
    setLanguages([...languages, newLanguage]);
  };

  const handleDeleteLanguage = (id) => {
    setLanguages(languages.filter((lang) => lang.id !== id));
  };

  const handleAddPerson = (name, languageIds) => {
    const newPerson = {
      id: people.length + 1,
      name: name,
      languageIds: languageIds,
    };
    setPeople([...people, newPerson]);
  };

  const handleDeletePerson = (id) => {
    setPeople(people.filter((person) => person.id !== id));
    if (selectedPersonId === id) {
      setSelectedPersonId(null);
    }
  };

  const handleSelectPerson = (id) => {
    setSelectedPersonId(id);
  };

  const handleUpdatePerson = (id, newName) => {
    setPeople(people.map((p) => (p.id === id ? { ...p, name: newName } : p)));
  };

  const handleAddLanguageToPerson = (personId, languageId) => {
    setPeople(
      people.map((p) =>
        p.id === personId
          ? { ...p, languageIds: [...p.languageIds, languageId] }
          : p,
      ),
    );
  };

  const handleDeleteLanguageFromPerson = (personId, languageId) => {
    setPeople(
      people.map((p) =>
        p.id === personId
          ? {
              ...p,
              languageIds: p.languageIds.filter((id) => id !== languageId),
            }
          : p,
      ),
    );
  };

  return (
    <div className="container">
      <h1>Languages Registry</h1>

      <div className="grid">
        <div className="column left">
          <PeopleList
            people={people}
            languages={languages}
            onSelectPerson={handleSelectPerson}
            onDeletePerson={handleDeletePerson}
          />
          {selectedPersonId && <hr />}
          {selectedPersonId && <h2 className="section-header">Edit Person</h2>}
          {selectedPersonId && (
            <PersonDetail
              person={people.find((p) => p.id === selectedPersonId)}
              languages={languages}
              onUpdatePerson={handleUpdatePerson}
              onAddLanguageToPerson={handleAddLanguageToPerson}
              onDeleteLanguageFromPerson={handleDeleteLanguageFromPerson}
            />
          )}
        </div>

        <div className="column middle">
          <h2>Add Person</h2>
          <AddPersonForm onAddPerson={handleAddPerson} languages={languages} />
        </div>

        <div className="column right">
          {!loading && <h2>Available Languages ({languages.length})</h2>}
          <AddLanguageForm onAddLanguage={handleAddLanguage} />
          {loading ? (
            <p>Loading...</p>
          ) : (
            <LanguageList
              languages={languages}
              onDeleteLanguage={handleDeleteLanguage}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

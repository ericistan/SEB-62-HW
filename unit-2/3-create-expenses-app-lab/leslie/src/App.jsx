import React, { useState } from "react";
import Form from "./components/Form";
import Display from "./components/Display";
import styles from "./app.module.css";

function App() {
  const initFormData = [
    { label: "Item", name: "item", value: "" },
    { label: "Price", name: "price", value: "" },
    { label: "Date", name: "date", value: "" },
  ];

  const initDisplayData = [];

  const [formData, setFormData] = useState(initFormData);
  const [displayData, setDisplayData] = useState(initDisplayData);

  const handleFormSubmit = () => {
    const newData = { item: formData[0].value, price: formData[1].value, date: formData[2].value };
    const newDisplayData = [...displayData, newData];
    setDisplayData(newDisplayData);
    setFormData(initFormData);
  };

  const handleDisplayDelete = (id) => {
    setDisplayData((prevState) => [...prevState].toSpliced(id, 1));
  };

  return (
    <div className={`${styles["app"]}`}>
      <Form data={formData} setData={setFormData} handleSubmit={handleFormSubmit} />
      <Display data={displayData} handleDelete={handleDisplayDelete} />
    </div>
  );
}

export default App;

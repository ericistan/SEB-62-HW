import React, { useState } from "react";
import Form from "./components/Form";

function App() {
  const initFormData = [
    { label: "Item", name: "item", value: "" },
    { label: "Price", name: "price", value: "" },
    { label: "Date", name: "date", value: "" },
  ];

  const [formData, setFormData] = useState(initFormData);
  const [displayData, setDisplayData] = useState("");

  return (
    <div>
      <Form data={formData} setData={setFormData} />
      {JSON.stringify(formData)}
    </div>
  );
}

export default App;

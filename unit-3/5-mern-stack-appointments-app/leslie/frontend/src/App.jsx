import React, { useState } from "react";
import UserContext from "./context/userContext.jsx";
import LandingPage from "./components/LandingPage.jsx";
import { Navigate, Route, Routes } from "react-router";

function App() {
  const [accessToken, setAccessToken] = useState("");
  return (
    <div className="container">
      <h1>Unit 3 Lab 5 - Appointment App</h1>
      <UserContext.Provider value={{ accessToken, setAccessToken }}>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<LandingPage isLogin={true} />} />
          <Route path="/Register" element={<LandingPage isLogin={false} />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;

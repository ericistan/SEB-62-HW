import React, { useState } from "react";
import UserContext from "./context/userContext.jsx";
import LandingPage from "./components/LandingPage.jsx";
import { Navigate, Route, Routes } from "react-router";
import Dashboard from "./components/Dashboard.jsx";

function App() {
  const [accessToken, setAccessToken] = useState("");
  const [username, setUsername] = useState("");
  return (
    <div className="container">
      <h1>Unit 3 Lab 5 - Appointment App</h1>
      <UserContext.Provider value={{ accessToken, setAccessToken, username, setUsername }}>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<LandingPage isLogin={true} />} />
          <Route path="/register" element={<LandingPage isLogin={false} />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;

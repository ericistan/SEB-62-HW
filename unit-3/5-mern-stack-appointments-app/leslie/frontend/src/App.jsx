import React, { useState } from "react";
import UserContext from "./context/userContext.jsx";
import LandingPage from "./components/LandingPage.jsx";
import { Navigate, Route, Routes } from "react-router";
import Dashboard from "./components/Dashboard.jsx";
import AppointmentDetails from "./components/AppointmentDetails.jsx";
import CreateAppointment from "./components/CreateAppointment.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import UpdateAppointment from "./components/UpdateAppointment.jsx";

function App() {
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");
  return (
    <div className="container">
      <h1>Unit 3 Lab 5 - Appointment App</h1>
      <UserContext.Provider
        value={{ accessToken, setAccessToken, refreshToken, setRefreshToken, username, setUsername, userId, setUserId }}
      >
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<LandingPage isLogin={true} />} />
          <Route path="/register" element={<LandingPage isLogin={false} />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/appointment"
            element={
              <ProtectedRoute>
                <AppointmentDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/appointment/create"
            element={
              <ProtectedRoute>
                <CreateAppointment />
              </ProtectedRoute>
            }
          />
          <Route
            path="/appointment/update"
            element={
              <ProtectedRoute>
                <UpdateAppointment />
              </ProtectedRoute>
            }
          />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;

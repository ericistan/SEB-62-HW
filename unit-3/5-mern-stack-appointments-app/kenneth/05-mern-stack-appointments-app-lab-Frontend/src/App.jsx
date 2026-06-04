import React from "react";
import Navbar from "./components/Navbar.jsx";
import CreateAppointmentPage from "./pages/CreateAppointmentPage.jsx";
import ViewAllAppointmentsPage from "./pages/ViewAllAppointmentsPage.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ViewAllAppointmentsPage />} />
        <Route path="/create" element={<CreateAppointmentPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

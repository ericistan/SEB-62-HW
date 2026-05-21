import { React, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Dashboard from "./components/Dashboard";
import UserContext from "./context/user";
import { Navigate, Route, Routes } from "react-router";
import Registration from "./components/Registration";
import Login from "./components/Login";
import NavBar from "./components/NavBar";

const queryClient = new QueryClient();

function App() {
  const [accessToken, setAccessToken] = useState("");
  const [userId, setUserId] = useState("");
  const [role, setRole] = useState("");
  return (
    <div className="container">
      <NavBar />

      <QueryClientProvider client={queryClient}>
        <UserContext.Provider
          value={{
            accessToken,
            setAccessToken,
            userId,
            setUserId,
            role,
            setRole,
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
          </Routes>
        </UserContext.Provider>
      </QueryClientProvider>
    </div>
  );
}

export default App;

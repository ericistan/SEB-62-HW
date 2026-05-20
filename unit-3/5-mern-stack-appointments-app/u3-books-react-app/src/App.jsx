import React, { useState } from "react";
import BooksDisplay from "./components/BooksDisplay";
import UserContext from "./context/user";
import Login from "./components/Login";
import { Navigate, Route, Routes } from "react-router";
import ProtectedRoute from "./components/ProtectedRoute";
import NavBar from "./components/NavBar";
import Registration from "./components/Registration";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  const [accessToken, setAccessToken] = useState("");
  const [role, setRole] = useState("");
  return (
    <div className="container">
      <NavBar />
      <QueryClientProvider client={queryClient}>
        <UserContext.Provider
          value={{ accessToken, setAccessToken, role, setRole }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="/books" replace />} />
            <Route
              path="/books"
              element={
                <ProtectedRoute>
                  <BooksDisplay />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
          </Routes>
        </UserContext.Provider>
      </QueryClientProvider>
    </div>
  );
}

export default App;

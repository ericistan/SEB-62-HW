import React, { useState } from "react";
import sharedFetch from "../shared/sharedFetch.jsx";
import { Link } from "react-router";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordViewState, setPasswordViewState] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);
  const [registerComplete, setRegisterComplete] = useState(false);
  const fetchData = sharedFetch();

  const handleRegister = async () => {
    setIsError(false);
    setError(null);

    const res = await fetchData("/api/auth/register", "PUT", { username, password });

    if (res.ok) {
      console.log("registration successful");
      setRegisterComplete(true);
    } else {
      setError(res.message);
      setIsError(true);
    }
  };

  const togglePasswordView = () => {
    setPasswordViewState((prevState) => !prevState);
  };

  return (
    <>
      <div>
        {isError && error}
        {!isError && "\u00A0"}
      </div>
      {!registerComplete && (
        <>
          <div>
            <div>Username</div>
            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <div>Password</div>
            <input
              type={passwordViewState ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={togglePasswordView}>{passwordViewState ? "hide" : "show"}</button>
          </div>
          <button onClick={handleRegister}>create</button>
          <div>
            <Link to="/login">Already have an account? Sign in here</Link>
          </div>
        </>
      )}
      {registerComplete && (
        <>
          <div>Account created!</div>
          <Link to="/login">Click here to sign in to your account</Link>
        </>
      )}
    </>
  );
};

export default RegisterPage;

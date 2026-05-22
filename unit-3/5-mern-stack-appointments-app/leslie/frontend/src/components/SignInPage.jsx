import React, { useContext, useState } from "react";
import sharedFetch from "../shared/sharedFetch.jsx";
import UserContext from "../context/userContext.jsx";
import { Link, useNavigate } from "react-router";

const SignInPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordViewState, setPasswordViewState] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);
  const fetchData = sharedFetch();
  const userCtx = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setIsError(false);
    setError(null);

    const res = await fetchData("/api/auth/login", "POST", { username, password });

    if (res.ok) {
      userCtx.setAccessToken(res.data?.accessToken);
      userCtx.setUsername(res.data?.username);
      navigate("/dashboard");
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
      <button onClick={handleLogin}>sign in</button>
      <div>
        <Link to="/register">Create an account here</Link>
      </div>
    </>
  );
};

export default SignInPage;

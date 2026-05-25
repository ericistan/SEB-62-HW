import React, { useContext, useState } from "react";
import sharedFetch from "../shared/sharedFetch.jsx";
import UserContext from "../context/userContext.jsx";
import { Link, useNavigate } from "react-router";
import { jwtDecode } from "jwt-decode";
import css from "../styles/App.module.css";

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
      userCtx.setRefreshToken(res.data?.refreshToken);
      userCtx.setUsername(res.data?.username);
      const decoded = jwtDecode(res.data?.accessToken);
      if (decoded) userCtx.setUserId(decoded.user_id);
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
      <div className={css["input-block"]}>
        <div className={css["input-label"]}>Username:</div>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className={css["input-block"]}>
        <div className={css["input-label"]}>Password:</div>
        <input
          type={passwordViewState ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={togglePasswordView}>{passwordViewState ? "hide" : "show"}</button>
      </div>
      <div>
        {isError && error}
        {!isError && "\u00A0"}
      </div>
      <button onClick={handleLogin}>sign in</button>
      <div className={css["input-block"]}>
        <Link to="/register">Create an account here</Link>
      </div>
    </>
  );
};

export default SignInPage;

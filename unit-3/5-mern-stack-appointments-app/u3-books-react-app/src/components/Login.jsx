import React, { use, useState } from "react";
import UserContext from "../context/user";
import sharedFetch from "../shared/sharedFetch";
import { useNavigate } from "react-router";
import { jwtDecode } from "jwt-decode";
import { useQuery } from "@tanstack/react-query";

const Login = (props) => {
  const userCtx = use(UserContext);
  const [username, setUsername] = useState("newAdmin@anyemail.com");
  const [password, setPassword] = useState("password123");
  //   const [isError, setIsError] = useState(false);
  //   const [error, setError] = useState(null);
  const fetchData = sharedFetch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await fetchData("/auth/login", "POST", {
        username,
        password,
      });

      // userCtx.setAccessToken(res.data?.access);
      // const decoded = jwtDecode(res.data?.access);
      userCtx.setAccessToken(res.access);
      const decoded = jwtDecode(res.access);
      if (decoded) userCtx.setRole(decoded.role);
      navigate("/books");
      return res;
    } catch (error) {
      // throw new Error("A login error has occurred");
      throw error;
    }
  };

  const { isError, error, refetch } = useQuery({
    queryKey: ["login"],
    queryFn: handleLogin,
    enabled: false,
    retry: false,
  });

  return (
    <>
      <div className="row my-1">
        <div className="col-sm-3"></div>
        {isError && error?.message}
        {!isError && "\u00A0"}
      </div>

      <div className="row my-1">
        <div className="col-sm-3"></div>
        <input
          type="text"
          className="col-sm-6"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <div className="col-sm-3"></div>
      </div>

      <div className="row my-1">
        <div className="col-sm-3"></div>
        <input
          type="password"
          className="col-sm-6"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="col-sm-3"></div>
      </div>

      <div className="row my-1">
        <div className="col-sm-3"></div>
        <button className="col-sm-6" onClick={refetch}>
          login
        </button>
        <div className="col-sm-3"></div>
      </div>
    </>
  );
};
export default Login;

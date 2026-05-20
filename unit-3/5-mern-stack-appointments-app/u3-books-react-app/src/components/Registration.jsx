import React, { useEffect, useState } from "react";
import sharedFetch from "../shared/sharedFetch";
import { useNavigate } from "react-router";

const Registration = () => {
  const fetchData = sharedFetch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [role, setRole] = useState("");
  const [roles, setRoles] = useState([]);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const getRoles = async () => {
    const res = await fetchData("/roles");

    setRoles(res);
  };
  const registerUser = async () => {
    setIsError(false);
    setError(null);
    if (password !== password2) {
      console.error("passwords do not match");
      setIsError(true);
      setError("passwords do not match");
      return;
    }
    const res = await fetchData("/auth/register", "PUT", {
      username,
      password,
      role,
    });
    setUsername("");
    setPassword("");
    setPassword2("");
    setRole("");
    navigate("/login");
  };

  useEffect(() => {
    getRoles();
  }, []);

  return (
    <>
      {isError ? error : "\u00A0"}

      <div className="row my-1">
        <div className="col-sm-4"></div>
        <input
          className="col-sm-4"
          placeholder="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <div className="col-sm-4"></div>
      </div>

      <div className="row my-1">
        <div className="col-sm-4"></div>
        <input
          className="col-sm-4"
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="col-sm-4"></div>
      </div>

      <div className="row my-1">
        <div className="col-sm-4"></div>
        <input
          className="col-sm-4"
          placeholder="password2"
          type="password"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        />
        <div className="col-sm-4"></div>
      </div>
      <div className="row my-1">
        <div className="col-sm-4"></div>
        <select
          name="roles"
          id="roles"
          className="col-sm-4"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="none">please select</option>
          {roles.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
      </div>
      <div className="row my-1">
        <div className="col-sm-4"></div>
        <button className="col-sm-4" type="submit" onClick={registerUser}>
          register
        </button>
        <div className="col-sm-4"></div>
      </div>
    </>
  );
};

export default Registration;

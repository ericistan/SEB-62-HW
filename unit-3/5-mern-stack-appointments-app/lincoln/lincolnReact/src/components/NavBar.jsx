import React from "react";
import { Link } from "react-router";

const NavBar = () => {
  return (
    <div className="row my-4">
      <div className="col-sm-4 text-center">
        <Link to="/dashboard">Dashboard</Link>
      </div>
      <div className="col-sm-4 text-center">
        <Link to="/login">Login</Link>
      </div>
      <div className="col-sm-4 text-center">
        <Link to="/registration">Registration</Link>
      </div>
    </div>
  );
};

export default NavBar;

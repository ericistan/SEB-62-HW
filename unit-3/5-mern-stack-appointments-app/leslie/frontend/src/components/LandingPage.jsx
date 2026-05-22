import React from "react";
import SignInPage from "./SignInPage.jsx";
import RegisterPage from "./RegisterPage.jsx";

const LandingPage = (props) => {
  return (
    <div className="container">
      <h2>
        {props.isLogin && "Sign in"}
        {!props.isLogin && "Create an account"}
      </h2>
      {props.isLogin && <SignInPage />}
      {!props.isLogin && <RegisterPage />}
    </div>
  );
};

export default LandingPage;

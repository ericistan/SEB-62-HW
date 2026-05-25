import React from "react";
import SignInPage from "./SignInPage.jsx";
import RegisterPage from "./RegisterPage.jsx";
import css from "../styles/App.module.css";

const LandingPage = (props) => {
  return (
    <div className={`container ${css["tab"]}`}>
      <h2 className={css["h2"]}>
        {props.isLogin && "Sign in"}
        {!props.isLogin && "Create an account"}
      </h2>
      {props.isLogin && <SignInPage />}
      {!props.isLogin && <RegisterPage />}
    </div>
  );
};

export default LandingPage;

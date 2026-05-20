import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router";
import { ErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../ErrorComponent";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary FallbackComponent={ErrorComponent}>
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>,
);

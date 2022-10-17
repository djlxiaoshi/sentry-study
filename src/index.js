import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import "./utils/sentry";
import "./utils/mdap";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import * as Sentry from "@sentry/react";

ReactDOM.render(
  <React.StrictMode>
    <Sentry.ErrorBoundary
      fallback={<span>An error has occurred. error boundary</span>}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Sentry.ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

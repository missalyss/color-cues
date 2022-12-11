import React from "react";
import ReactDOM from "react-dom/client";
import "./pattern-lib/styles/index.css";
import "./pattern-lib/styles/font.css";
import "./pattern-lib/styles/color.css";
import "./pattern-lib/styles/flex.css";
import "./pattern-lib/styles/misc.css";
import "./pattern-lib/styles/padding-margin.css";
import HomePage from "./components/index";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

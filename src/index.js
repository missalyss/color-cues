import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./pattern-lib/styles/index.css";
import "./pattern-lib/styles/font.css";
import "./pattern-lib/styles/color.css";
import "./pattern-lib/styles/flex.css";
import "./pattern-lib/styles/misc.css";
import "./pattern-lib/styles/padding-margin.css";

import HomePage from "./components/index";
import HinterHome from "./components/hinter";
import GuesserHome from "./components/guesser";

// const [playerType, setPlayerType] = useState(null);

// const Root =
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/hinter",
    element: <HinterHome />,
  },
  {
    path: "/guesser",
    element: <GuesserHome />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

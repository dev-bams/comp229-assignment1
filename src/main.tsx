import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import ReactGA from "react-ga4";
ReactGA.initialize("G-6S70CN47R1");

ReactGA.send({
  hitType: "pageview",
  page: window.location.pathname,
  title: "pageview from main.tsx",
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

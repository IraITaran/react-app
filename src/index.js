import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import Search from "./Search";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <h1>Weather App</h1>
    <Search />
    <div className="github-link">
      <a
        href="https://github.com/IraITaran/react-app"
        target="_blank"
        rel="noreferrer"
      >
        Open-source code
      </a>
      , by Iryna Taran
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

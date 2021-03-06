import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Shido from "../src/components/Shido";

ReactDOM.render(
  <React.StrictMode>
    <Shido />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

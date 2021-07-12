import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { getInstanceVars } from "./lib/getInstanceVars";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <App data={getInstanceVars()} />,
    document.body.appendChild(document.createElement("div"))
  );
});

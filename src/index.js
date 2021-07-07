import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import $ from "jquery";
// import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Routes from "./navigations/Routes";

ReactDOM.render(
  <React.StrictMode>
    <div style={{ marginTop: "7%" }}></div>
    <Routes />
  </React.StrictMode>,
  document.getElementById("root")
);

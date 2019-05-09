import * as React from "react";
import * as ReactDOM from "react-dom";
import "@babel/polyfill";
import "normalize.css";
import "./styles/index.css";
import { ReactApp } from "./ReactApp";

// Chrome on Android VH hack:
window.addEventListener("resize", () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
});

ReactDOM.render(<ReactApp />, document.getElementById("react-app"));

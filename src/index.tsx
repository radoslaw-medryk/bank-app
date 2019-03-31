import * as React from "react";
import * as ReactDOM from "react-dom";
import "@babel/polyfill";
import "normalize.css";
import "./styles/index.css";

import { ReactApp } from "./components/ReactApp";

ReactDOM.render(<ReactApp />, document.getElementById("react-app"));

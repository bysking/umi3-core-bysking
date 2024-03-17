import React from "react";
import ReactDom from "react-dom";
import { Router, Route, Switch } from "react-router-dom";
import history from "./core/history";
import { getRoutes } from "./core/routes";

ReactDom.render(<App />, document.getElementById("root"));

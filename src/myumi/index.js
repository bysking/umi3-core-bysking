import React from "react";
import ReactDom from "react-dom";
import { Router, Route, Switch } from "react-router-dom";
import history from "./core/history";
import { getRoutes } from "./core/routes";

let routes = getRoutes();

function renderRoutes(routesList) {
  return routesList.map(
    ({ path, exact, component: RouterCoponent, routes: childrenRoutes }) => {
      return (
        <Route
          path={path}
          exact={exact}
          render={(routProps) => {
            {
              /* 3种方式渲染： component, render(支持传参), children */
            }
            return <RouterCoponent {...routProps} />;
          }}
        >
          {/* 递归处理 */}
          <Switch>{renderRoutes(childrenRoutes)}</Switch>
        </Route>
      );
    }
  );
}

const App = () => {
  <Router history={history}>{renderRoutes(routes)}</Router>;
};

ReactDom.render(<App />, document.getElementById("root"));

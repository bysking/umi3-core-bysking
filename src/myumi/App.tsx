import React from "react";
import { getRoutes } from "./core/routes";
import { NavLink, Routes, Route, BrowserRouter } from "react-router-dom";

function renderRoutes(routesList = []) {
  if (!routesList.length) {
    return null;
  }

  const ll = routesList.map(
    ({ path, exact, component: RouterComponent, routes: childrenRoutes }) => {
      return (
        <Route
          path={path}
          exact={exact}
          render={(routProps) => {
            return <RouterComponent {...routProps} />;
          }}
          Component={RouterComponent}
        >
          {/* 递归处理 */}
          {renderRoutes(childrenRoutes)}
        </Route>
      );
    }
  );

  return ll;
}

let myRoutes = getRoutes();

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <NavLink to="profile">首页</NavLink>
        <NavLink to="user">个人中心</NavLink>
      </div>

      <Routes>{renderRoutes(myRoutes)}</Routes>
    </BrowserRouter>
  );
}

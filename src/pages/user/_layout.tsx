import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const UserLayout = (props) => (
  <div>
    <ul>
      <NavLink to="add">添加用户</NavLink>--
      <NavLink to="list">用户列表</NavLink>
    </ul>
    <div>
      <Outlet />
    </div>
  </div>
);

export default UserLayout;

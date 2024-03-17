export function getRoutes() {
  const routes = [
    {
      path: "/",
      exact: true,
      component: require("@/pages/index.tsx").default,
    },
    {
      path: "/profile",
      exact: true,
      component: require("@/pages/profile.tsx").default,
    },
    {
      path: "/user",
      routes: [
        {
          path: "/user/add",
          exact: true,
          component: require("@/pages/user/add.tsx").default,
        },
        {
          path: "/user/list",
          exact: true,
          component: require("@/pages/user/list.tsx").default,
        },
      ],
      component: require("@/pages/user/_layout.tsx").default,
    },
  ];

  return routes;
}

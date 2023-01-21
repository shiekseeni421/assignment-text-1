const routers = [
  {
    path: "/",
    redirect: "/user/login",
  },
  {
    component: "MainLayout",
    path: "/user",
    name: "Main",
    exact: false,
    redirect: "/user/login",
    childrens: [
      {
        component: "Login",
        path: "/login",
        componentPath: "pages/Login/LoginPage.js",
        name: "Login",
        auth: false,
        exact: true,
      },
    ],
  },
  {
    component: "MainLayout",
    path: "/live",
    name: "Main",
    exact: false,
    redirect: "/live/livestreampage",
    childrens: [
      {
        component: "Home",
        path: "/livestreampage",
        componentPath: "pages/Home/LiveStreamPage.js",
        name: "Home",
        auth: false,
        exact: true,
      },
    ],
  },
];
export default routers;

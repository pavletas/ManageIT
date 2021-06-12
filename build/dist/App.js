import React from "../_snowpack/pkg/react.js";
import {
  BrowserRouter,
  Switch
} from "../_snowpack/pkg/react-router-dom.js";
import Login from "./pages/Login.js";
import Signup from "./pages/Signup.js";
import Header from "./components/Header.js";
import ManageITThemeProvider from "./components/Theme.js";
import {CurrentUserProvider} from "./contexts/CurrentUser.js";
import Projects from "./pages/Projects.js";
import Dashboard from "./pages/Dashboard.js";
import TaskForm from "./pages/EditTaskForm.js";
import PrivateRoute from "./components/Auth/PrivateRoute.js";
import PublicRoute from "./components/Auth/PublicRoute.js";
function App() {
  return /* @__PURE__ */ React.createElement(BrowserRouter, null, /* @__PURE__ */ React.createElement(CurrentUserProvider, null, /* @__PURE__ */ React.createElement(ManageITThemeProvider, null, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement(Switch, null, /* @__PURE__ */ React.createElement(PrivateRoute, {
    exact: true,
    path: "/",
    component: Projects
  }), /* @__PURE__ */ React.createElement(PublicRoute, {
    exact: true,
    path: "/login",
    component: Login
  }), /* @__PURE__ */ React.createElement(PublicRoute, {
    exact: true,
    path: "/signup",
    component: Signup
  }), /* @__PURE__ */ React.createElement(PrivateRoute, {
    exact: true,
    path: "/projects",
    component: Projects
  }), /* @__PURE__ */ React.createElement(PrivateRoute, {
    exact: true,
    path: "/:id/dashboard",
    component: Dashboard
  }), /* @__PURE__ */ React.createElement(PrivateRoute, {
    exact: true,
    path: "/task",
    component: TaskForm
  })))));
}
export default App;

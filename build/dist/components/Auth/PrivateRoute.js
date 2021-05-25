import React from "../../../_snowpack/pkg/react.js";
import {Redirect, Route} from "../../../_snowpack/pkg/react-router-dom.js";
import useCurrentUser from "../../contexts/CurrentUser.js";
export default function PrivateRoute({component, ...rest}) {
  const Component = component;
  const user = useCurrentUser();
  return /* @__PURE__ */ React.createElement(Route, {
    ...rest,
    render: (props) => user ? /* @__PURE__ */ React.createElement(Component, {
      ...props
    }) : /* @__PURE__ */ React.createElement(Redirect, {
      to: {pathname: "/login"}
    })
  });
}

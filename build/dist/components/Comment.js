import {Paper} from "../../_snowpack/pkg/@material-ui/core.js";
import React from "../../_snowpack/pkg/react.js";
export default function Comment({task}) {
  return /* @__PURE__ */ React.createElement(Paper, {
    variant: "outlined",
    square: true,
    style: {maxHeight: 200, overflow: "auto"}
  });
}

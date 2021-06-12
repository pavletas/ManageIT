import React from "../../_snowpack/pkg/react.js";
import {Typography, makeStyles} from "../../_snowpack/pkg/@material-ui/core.js";
import Task from "./Task.js";
const useStyles = makeStyles(() => ({
  label: {
    backgroundColor: "#ffcc66"
  },
  tasks: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
}));
export default function Tasks({label, tasks, project}) {
  const classes = useStyles();
  const currentTasks = tasks.filter((task) => task.label === label);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Typography, {
    variant: "h6",
    className: classes.label
  }, label), currentTasks.map((task) => /* @__PURE__ */ React.createElement(Task, {
    task,
    project,
    tasks
  })));
}

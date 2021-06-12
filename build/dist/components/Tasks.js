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
export default function Tasks({label, tasks, project, onChange}) {
  const classes = useStyles();
  const [value, setValue] = React.useState("");
  function handleChange(newValue) {
    onChange(newValue);
    setValue(newValue);
  }
  const currentTasks = tasks.filter((task) => task.label === label);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Typography, {
    variant: "h6",
    className: classes.label
  }, label), currentTasks.map((task) => /* @__PURE__ */ React.createElement(Task, {
    value,
    onChange: handleChange,
    task,
    project,
    tasks
  })));
}

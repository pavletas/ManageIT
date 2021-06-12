import React, {useState} from "../../_snowpack/pkg/react.js";
import {makeStyles, Typography, Avatar, CardActionArea} from "../../_snowpack/pkg/@material-ui/core.js";
import TaskForm from "../pages/EditTaskForm.js";
const useStyles = makeStyles(() => ({
  taskCard: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "100%",
    maxHeight: "250px",
    gap: "5px"
  },
  avatar: {
    backgroundColor: "#AD3E73",
    width: "30px",
    height: "30px",
    fontSize: "16px",
    marginLeft: "75%"
  },
  id: {
    backgroundColor: "#f5e3bf",
    width: "100%",
    borderTopLeftRadius: "20px",
    borderTopRightRadius: "20px"
  },
  title: {
    fontSize: "16px",
    padding: "0 1px"
  }
}));
export default function Task({task, project, tasks}) {
  const classes = useStyles();
  const [taskToEdit, setTaskToEdit] = useState(false);
  const handleCloseDialog = () => {
    setTaskToEdit(false);
  };
  const handleOpenDialog = () => {
    setTaskToEdit(true);
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: classes.taskCard
  }, /* @__PURE__ */ React.createElement(CardActionArea, {
    onClick: handleOpenDialog
  }, /* @__PURE__ */ React.createElement(Typography, {
    variant: "h6",
    className: classes.id
  }, "#", task.id), /* @__PURE__ */ React.createElement(Typography, {
    variant: "body1",
    className: classes.title
  }, task.title), /* @__PURE__ */ React.createElement(Avatar, {
    className: classes.avatar
  }, task.asignee[0].toLocaleUpperCase())), /* @__PURE__ */ React.createElement(TaskForm, {
    open: taskToEdit,
    onClose: handleCloseDialog,
    task,
    project,
    tasks
  }));
}

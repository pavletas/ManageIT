import React, {useState} from "../../_snowpack/pkg/react.js";
import {Button, Grid, makeStyles} from "../../_snowpack/pkg/@material-ui/core.js";
import Tasks from "../components/Tasks.js";
import {useParams} from "../../_snowpack/pkg/react-router-dom.js";
import {projects} from "./Projects.js";
import TaskForm from "./CreateTaskForm.js";
const useStyles = makeStyles((theme) => ({
  tasks: {
    height: "800px",
    width: "220px",
    textAlign: "center",
    border: "1px solid #424242",
    padding: 0,
    "& > :not(:first-child)": {
      marginTop: "25px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      border: "1px solid #424242",
      borderRadius: "20px",
      maxWidth: "200px",
      paddingBottom: "7px",
      marginLeft: "10px"
    }
  },
  control: {
    padding: theme.spacing(2)
  },
  gridPadding: {
    padding: "0px"
  },
  gridItem: {
    padding: "0px",
    paddingTop: "30px",
    paddingBottom: "60px",
    marginLeft: "auto",
    marginRight: "auto"
  },
  button: {
    marginLeft: "22rem",
    marginTop: "2rem",
    backgroundColor: "#dba0be",
    border: "1px solid #AD3E73",
    padding: " 10px 40px",
    "&:hover": {
      backgroundColor: "#dba0be"
    }
  }
}));
export default function Dashboard() {
  const classes = useStyles();
  const {id} = useParams();
  const [taskToCreate, setTaskToCreate] = useState(false);
  const currentProject = projects.filter((project) => project.id === id)[0];
  let [tasks, setTasks] = useState(currentProject.tasks);
  const handleOpenDialog = () => {
    setTaskToCreate(true);
  };
  const handleCloseDialog = () => {
    setTaskToCreate(false);
  };
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Button, {
    onClick: handleOpenDialog,
    size: "large",
    className: classes.button
  }, "Add new task"), /* @__PURE__ */ React.createElement(TaskForm, {
    open: taskToCreate,
    onClose: handleCloseDialog,
    project: currentProject
  }), /* @__PURE__ */ React.createElement(Grid, {
    container: true,
    spacing: 0,
    classes: {root: classes.gridPadding}
  }, /* @__PURE__ */ React.createElement(Grid, {
    item: true,
    xs: 12,
    classes: {root: classes.gridItem}
  }, /* @__PURE__ */ React.createElement(Grid, {
    container: true,
    justify: "center",
    spacing: 0,
    classes: {root: classes.gridPadding}
  }, [
    "New",
    "In Progress",
    "Ready For Code Review",
    "Ready For Testing",
    "In Testing",
    "Closed"
  ].map((value) => /* @__PURE__ */ React.createElement(Grid, {
    key: value,
    item: true,
    className: classes.tasks
  }, /* @__PURE__ */ React.createElement(Tasks, {
    label: value,
    tasks,
    project: currentProject
  })))))));
}

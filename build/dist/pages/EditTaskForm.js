import {
  Avatar,
  Box,
  Dialog,
  DialogContent,
  Grid,
  IconButton,
  makeStyles,
  TextField,
  Typography,
  InputBase,
  FormControl,
  Select,
  Button,
  InputLabel,
  DialogActions
} from "../../_snowpack/pkg/@material-ui/core.js";
import React, {useState} from "../../_snowpack/pkg/react.js";
import CloseIcon from "../../_snowpack/pkg/@material-ui/icons/Close.js";
import {useStyles} from "./CreateProjectForm.js";
import Activities from "../components/Activities.js";
;
const useCustomStyles = makeStyles((theme) => ({
  inputContainer: {
    display: "flex",
    width: "100%",
    marginBottom: "15px"
  },
  icon: {
    padding: "10px",
    background: "dodgerblue",
    color: "white",
    minWidth: "50px",
    textAlign: "center"
  },
  inputField: {
    width: "100%",
    padding: "10px",
    outline: "none"
  },
  avatar: {
    backgroundColor: "#ffcc66",
    marginLeft: "2rem"
  },
  userBox: {
    display: "flex",
    justifyContent: "left",
    alignItems: "center"
  },
  header: {
    fontSize: "1.10rem"
  },
  muiAvatar: {
    width: "30px",
    height: "30px",
    margin: 0
  },
  muiMargin: {
    margin: "1rem"
  },
  alignLeftLabel: {
    left: "5rem"
  },
  alignLeftEstimate: {
    left: "4rem"
  },
  titleSize: {
    fontSize: "1.65rem"
  },
  description: {
    top: "-5rem",
    position: "relative"
  },
  gridPadding: {
    padding: "0.7rem"
  },
  formContainer: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  button: {
    right: "-12rem",
    margin: theme.spacing(3),
    backgroundColor: "#dba0be",
    border: "1px solid #AD3E73",
    "&:hover": {
      backgroundColor: "#dba0be"
    }
  },
  tab: {
    borderRadius: "50px"
  },
  customInput: {
    borderRadius: "4px",
    width: "67%",
    left: "1rem",
    position: "absolute",
    padding: "0.3rem"
  },
  comment: {
    fontSize: "12px"
  },
  addNewComment: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: "10px"
  },
  addComment: {
    marginLeft: "10px",
    height: "40px"
  }
}));
export default function EditTaskForm({open, onClose, task, project, tasks, onChange}) {
  const classes = useStyles();
  const myClasses = useCustomStyles();
  const [id] = useState(task.id);
  const [title] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [assignee, setAssignee] = useState(task.asignee);
  const [reporter, setReporter] = useState(task.reporter);
  const [label, setLabel] = useState(task.label);
  const [estimate, setEstimate] = useState(task.estimated);
  const [openButtonLabel, setOpenButtonLabel] = React.useState(false);
  const [openButtonReporter, setOpenButtonReporter] = React.useState(false);
  const [openButtonAssignee, setOpenButtonAssignee] = React.useState(false);
  const [value, setValue] = React.useState("");
  function handleChange(newValue) {
    setValue(newValue);
  }
  const labels = ["New", "In Progress", "Ready For Code Review", "Ready For Testing", "In Testing", "Closed"];
  const closeAndCleanUp = () => {
    let returnedtask = project.tasks.filter((item) => item.id === id)[0];
    setDescription(returnedtask.description);
    setAssignee(returnedtask.asignee);
    setReporter(returnedtask.reporter);
    setLabel(returnedtask.label);
    setEstimate(returnedtask.estimated);
    onClose();
  };
  const handleClickOpenLabel = () => {
    setOpenButtonLabel(true);
  };
  const handleCloseLabel = () => {
    setOpenButtonLabel(false);
  };
  const onButtonFormLabelClose = (event) => {
    event.preventDefault();
    let returnedtask = project.tasks.filter((item) => item.id === id)[0];
    setLabel(returnedtask.label);
    handleCloseLabel();
  };
  const onButtonFormLabelSubmit = (event) => {
    event.preventDefault();
    let returnedtask = project.tasks.filter((item) => item.id === id)[0];
    returnedtask.label = label;
    setLabel(label);
    handleCloseLabel();
  };
  const onButtonFormReporterClose = (event) => {
    event.preventDefault();
    let returnedtask = project.tasks.filter((item) => item.id === id)[0];
    setReporter(returnedtask.reporter);
    setOpenButtonReporter(false);
  };
  const onButtonFormReporterSubmit = (event) => {
    event.preventDefault();
    let returnedtask = project.tasks.filter((item) => item.id === id)[0];
    returnedtask.reporter = reporter;
    setReporter(reporter);
    setOpenButtonReporter(false);
  };
  const onButtonFormAssigneeClose = (event) => {
    event.preventDefault();
    let returnedtask = project.tasks.filter((item) => item.id === id)[0];
    setAssignee(returnedtask.asignee);
    setOpenButtonAssignee(false);
  };
  const onButtonFormAssigneeSubmit = (event) => {
    event.preventDefault();
    let returnedtask = project.tasks.filter((item) => item.id === id)[0];
    returnedtask.asignee = assignee;
    setAssignee(assignee);
    setOpenButtonAssignee(false);
  };
  const saveTask = (event) => {
    event.preventDefault();
    let returnedTask = project.tasks.filter((item) => item.id === id)[0];
    console.log("here save");
    returnedTask.description = description;
    returnedTask.asignee = assignee;
    returnedTask.reporter = reporter;
    returnedTask.estimated = estimate;
    returnedTask.label = label;
    onChange(event);
    onClose();
  };
  return /* @__PURE__ */ React.createElement(Dialog, {
    open,
    onClose: closeAndCleanUp,
    maxWidth: "md",
    classes: {paper: classes.dialogWrapper}
  }, /* @__PURE__ */ React.createElement(Typography, {
    variant: "h4",
    className: classes.titleWrapper,
    classes: {root: myClasses.titleSize}
  }, "#", id, " ", title), /* @__PURE__ */ React.createElement(IconButton, {
    "aria-label": "close",
    className: classes.closeButton,
    onClick: closeAndCleanUp
  }, /* @__PURE__ */ React.createElement(CloseIcon, null)), /* @__PURE__ */ React.createElement(DialogContent, {
    className: classes.contentWrapper
  }, /* @__PURE__ */ React.createElement("form", {
    onSubmit: saveTask
  }, /* @__PURE__ */ React.createElement(Grid, {
    container: true,
    spacing: 4,
    alignItems: "flex-end",
    classes: {root: myClasses.gridPadding}
  }, /* @__PURE__ */ React.createElement(Grid, {
    item: true,
    xs: 7,
    classes: {root: myClasses.description}
  }, /* @__PURE__ */ React.createElement(Typography, {
    variant: "h6",
    className: classes.title
  }, "Description"), /* @__PURE__ */ React.createElement(TextField, {
    value: description,
    onChange: (event) => setDescription(event.target.value),
    placeholder: "Describe the business logic of the project",
    className: classes.descriptionContentWrapper,
    variant: "outlined",
    multiline: true,
    rows: 7,
    rowsMax: 9,
    color: "secondary"
  })), /* @__PURE__ */ React.createElement(Grid, {
    item: true,
    xs: 5
  }, /* @__PURE__ */ React.createElement(Box, {
    className: myClasses.userBox
  }, /* @__PURE__ */ React.createElement(Typography, {
    variant: "h6",
    className: classes.title,
    classes: {h6: myClasses.header, root: myClasses.muiMargin}
  }, "Assignee"), /* @__PURE__ */ React.createElement(Avatar, {
    className: myClasses.avatar,
    classes: {root: myClasses.muiAvatar}
  }, assignee && /* @__PURE__ */ React.createElement(React.Fragment, null, assignee[0].toUpperCase(), " ")), /* @__PURE__ */ React.createElement(Button, {
    onClick: () => setOpenButtonAssignee(true)
  }, assignee), /* @__PURE__ */ React.createElement(Dialog, {
    disableBackdropClick: true,
    disableEscapeKeyDown: true,
    open: openButtonAssignee,
    onClose: () => setOpenButtonAssignee(false)
  }, /* @__PURE__ */ React.createElement(DialogContent, null, /* @__PURE__ */ React.createElement("form", {
    className: myClasses.formContainer
  }, /* @__PURE__ */ React.createElement(FormControl, {
    className: myClasses.formControl
  }, /* @__PURE__ */ React.createElement(InputLabel, {
    htmlFor: "demo-dialog-native"
  }, "Assignee"), /* @__PURE__ */ React.createElement(Select, {
    native: true,
    value: assignee,
    onChange: (event) => setAssignee(event.target.value)
  }, project.members.map((item) => /* @__PURE__ */ React.createElement("option", {
    key: item,
    value: item,
    style: {color: "black"}
  }, item)))))), /* @__PURE__ */ React.createElement(DialogActions, null, /* @__PURE__ */ React.createElement(Button, {
    onClick: onButtonFormAssigneeClose,
    color: "primary"
  }, "Cancel"), /* @__PURE__ */ React.createElement(Button, {
    onClick: onButtonFormAssigneeSubmit,
    color: "primary"
  }, "Submit")))), /* @__PURE__ */ React.createElement(Box, {
    className: myClasses.userBox
  }, /* @__PURE__ */ React.createElement(Typography, {
    variant: "h6",
    className: classes.title,
    classes: {h6: myClasses.header, root: myClasses.muiMargin}
  }, "Reporter"), /* @__PURE__ */ React.createElement(Avatar, {
    className: myClasses.avatar,
    classes: {root: myClasses.muiAvatar}
  }, reporter && /* @__PURE__ */ React.createElement(React.Fragment, null, reporter[0].toUpperCase(), " ")), /* @__PURE__ */ React.createElement(Button, {
    onClick: () => setOpenButtonReporter(true)
  }, reporter), /* @__PURE__ */ React.createElement(Dialog, {
    disableBackdropClick: true,
    disableEscapeKeyDown: true,
    open: openButtonReporter,
    onClose: () => setOpenButtonReporter(false)
  }, /* @__PURE__ */ React.createElement(DialogContent, null, /* @__PURE__ */ React.createElement("form", {
    className: myClasses.formContainer
  }, /* @__PURE__ */ React.createElement(FormControl, {
    className: myClasses.formControl
  }, /* @__PURE__ */ React.createElement(InputLabel, {
    htmlFor: "demo-dialog-native"
  }, "Reporter"), /* @__PURE__ */ React.createElement(Select, {
    native: true,
    value: reporter,
    onChange: (event) => setReporter(event.target.value)
  }, project.members.map((item) => /* @__PURE__ */ React.createElement("option", {
    key: item,
    value: item,
    style: {color: "black"}
  }, item)))))), /* @__PURE__ */ React.createElement(DialogActions, null, /* @__PURE__ */ React.createElement(Button, {
    onClick: onButtonFormReporterClose,
    color: "primary"
  }, "Cancel"), /* @__PURE__ */ React.createElement(Button, {
    onClick: onButtonFormReporterSubmit,
    color: "primary"
  }, "Submit")))), /* @__PURE__ */ React.createElement(Box, {
    className: myClasses.userBox
  }, /* @__PURE__ */ React.createElement(Typography, {
    variant: "h6",
    className: classes.title,
    classes: {h6: myClasses.header, root: myClasses.muiMargin}
  }, "Label"), /* @__PURE__ */ React.createElement(Button, {
    onClick: handleClickOpenLabel,
    classes: {root: myClasses.alignLeftLabel}
  }, label), /* @__PURE__ */ React.createElement(Dialog, {
    disableBackdropClick: true,
    disableEscapeKeyDown: true,
    open: openButtonLabel,
    onClose: handleCloseLabel
  }, /* @__PURE__ */ React.createElement(DialogContent, null, /* @__PURE__ */ React.createElement("form", {
    className: myClasses.formContainer
  }, /* @__PURE__ */ React.createElement(FormControl, {
    className: myClasses.formControl
  }, /* @__PURE__ */ React.createElement(InputLabel, {
    htmlFor: "demo-dialog-native"
  }, "Label"), /* @__PURE__ */ React.createElement(Select, {
    native: true,
    value: label,
    onChange: (event) => setLabel(event.target.value)
  }, labels.map((item) => /* @__PURE__ */ React.createElement("option", {
    key: item,
    value: item,
    style: {color: "black"}
  }, item)))))), /* @__PURE__ */ React.createElement(DialogActions, null, /* @__PURE__ */ React.createElement(Button, {
    onClick: onButtonFormLabelClose,
    color: "primary"
  }, "Cancel"), /* @__PURE__ */ React.createElement(Button, {
    onClick: onButtonFormLabelSubmit,
    color: "primary"
  }, "Submit")))), /* @__PURE__ */ React.createElement(Box, {
    className: myClasses.userBox
  }, /* @__PURE__ */ React.createElement(Typography, {
    variant: "h6",
    className: classes.title,
    classes: {h6: myClasses.header, root: myClasses.muiMargin}
  }, "Estimate"), /* @__PURE__ */ React.createElement(InputBase, {
    defaultValue: estimate,
    inputProps: {"aria-label": "naked"},
    classes: {root: myClasses.alignLeftEstimate},
    onChange: (event) => setEstimate(event.target.value)
  }))), /* @__PURE__ */ React.createElement(Activities, {
    value,
    onChange: handleChange,
    comments: task.comments,
    history: task.history,
    project
  }), /* @__PURE__ */ React.createElement(Grid, {
    item: true,
    xs: 5
  }, /* @__PURE__ */ React.createElement(Button, {
    type: "submit",
    variant: "contained",
    size: "large",
    classes: {root: myClasses.button}
  }, "Submit"))))));
}

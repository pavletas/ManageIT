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
  DialogActions,
  Input
} from "../../_snowpack/pkg/@material-ui/core.js";
import React, {useState} from "../../_snowpack/pkg/react.js";
import CloseIcon from "../../_snowpack/pkg/@material-ui/icons/Close.js";
import {useStyles} from "./CreateProjectForm.js";
import useCurrentUser from "../contexts/CurrentUser.js";
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
    height: "30px"
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
    fontSize: "1.65rem",
    width: "100%"
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
  }
}));
export default function EditTaskForm({open, onClose, project}) {
  const user = useCurrentUser();
  const classes = useStyles();
  const myClasses = useCustomStyles();
  const id = Math.floor(Math.random() * (999 - 100 + 1) + 100) + "";
  const reporter = user?.username || "Kristina Ivanova";
  const label = "New";
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [estimate, setEstimate] = useState("");
  const [openButtonAssignee, setOpenButtonAssignee] = React.useState(false);
  const closeAndCleanUp = () => {
    setParamsToEmpty();
    onClose();
  };
  const onButtonFormAssigneeSubmit = (event) => {
    event.preventDefault();
    () => setAssignee(assignee);
    setOpenButtonAssignee(false);
  };
  const saveTask = (event) => {
    event.preventDefault();
    project.tasks.push({
      id: Math.floor(Math.random() * (999 - 100 + 1) + 100) + "",
      title,
      description,
      asignee: assignee,
      reporter,
      label,
      estimated: estimate,
      comments: [],
      history: []
    });
    setParamsToEmpty();
    onClose();
  };
  const setParamsToEmpty = () => {
    setDescription("");
    setTitle("");
    setAssignee("");
    setEstimate("");
  };
  return /* @__PURE__ */ React.createElement(Dialog, {
    open,
    onClose: closeAndCleanUp,
    maxWidth: "md",
    classes: {paper: classes.dialogWrapper}
  }, /* @__PURE__ */ React.createElement(Input, {
    onChange: (event) => setTitle(event.target.value),
    className: classes.titleWrapper,
    classes: {root: myClasses.titleSize},
    placeholder: "Enter task name..",
    inputProps: {"aria-label": "description"}
  }), /* @__PURE__ */ React.createElement(IconButton, {
    "aria-label": "close",
    className: classes.closeButton,
    onClick: closeAndCleanUp
  }, /* @__PURE__ */ React.createElement(CloseIcon, null)), /* @__PURE__ */ React.createElement(DialogContent, {
    className: classes.contentWrapper
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
  }, "Assignee"), assignee && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Avatar, {
    className: myClasses.avatar,
    classes: {root: myClasses.muiAvatar}
  }, assignee && /* @__PURE__ */ React.createElement(React.Fragment, null, assignee[0].toUpperCase(), " "))), !assignee && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Button, {
    variant: "outlined",
    onClick: () => setOpenButtonAssignee(true)
  }, "Add assignee")), assignee && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Button, {
    onClick: () => setOpenButtonAssignee(true)
  }, assignee)), /* @__PURE__ */ React.createElement(Dialog, {
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
    onChange: (event) => setAssignee(event?.target.value)
  }, project.members.map((item) => /* @__PURE__ */ React.createElement("option", {
    key: item,
    value: item,
    style: {color: "black"}
  }, item)))))), /* @__PURE__ */ React.createElement(DialogActions, null, /* @__PURE__ */ React.createElement(Button, {
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
  }, reporter[0].toUpperCase()), /* @__PURE__ */ React.createElement(Button, null, reporter)), /* @__PURE__ */ React.createElement(Box, {
    className: myClasses.userBox
  }, /* @__PURE__ */ React.createElement(Typography, {
    variant: "h6",
    className: classes.title,
    classes: {h6: myClasses.header, root: myClasses.muiMargin}
  }, "Label"), /* @__PURE__ */ React.createElement(Button, {
    classes: {root: myClasses.alignLeftLabel}
  }, label)), /* @__PURE__ */ React.createElement(Box, {
    className: myClasses.userBox
  }, /* @__PURE__ */ React.createElement(Typography, {
    variant: "h6",
    className: classes.title,
    classes: {h6: myClasses.header, root: myClasses.muiMargin}
  }, "Estimate"), /* @__PURE__ */ React.createElement(InputBase, {
    defaultValue: estimate,
    placeholder: "Enter estimation..",
    inputProps: {"aria-label": "naked"},
    classes: {root: myClasses.alignLeftEstimate},
    onChange: (event) => setEstimate(event.target.value)
  }))), /* @__PURE__ */ React.createElement(Grid, {
    item: true,
    xs: 7
  }), /* @__PURE__ */ React.createElement(Grid, {
    item: true,
    xs: 5
  }, /* @__PURE__ */ React.createElement(Button, {
    type: "submit",
    onClick: saveTask,
    variant: "contained",
    size: "large",
    classes: {root: myClasses.button}
  }, "Submit")))));
}

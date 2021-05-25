import {Button, Dialog, DialogActions, DialogContent, FormControl, Grid, IconButton, makeStyles, MenuItem, Select, TextField, Typography} from "../../_snowpack/pkg/@material-ui/core.js";
import CloseIcon from "../../_snowpack/pkg/@material-ui/icons/Close.js";
import React, {useState} from "../../_snowpack/pkg/react.js";
import {projects} from "./Projects.js";
const useStyles = makeStyles((theme) => ({
  dialogWrapper: {
    paddingBottom: "10px",
    position: "absolute"
  },
  titleWrapper: {
    fontWeight: "bold",
    marginTop: 0,
    textAlign: "center",
    backgroundColor: "#ffcc66",
    padding: "10px"
  },
  textField: {
    width: "19rem"
  },
  contentWrapper: {
    overflow: "hidden",
    paddingTop: "20px"
  },
  descriptionWrapper: {
    paddingTop: "0px"
  },
  descriptionContentWrapper: {
    width: "21rem"
  },
  addedWrapper: {
    paddingTop: "0px"
  },
  textFieldPadding: {
    padding: "10px"
  },
  title: {
    fontWeight: "bold"
  },
  button: {
    margin: theme.spacing(3),
    backgroundColor: "#dba0be",
    left: "-80px",
    border: "1px solid #AD3E73",
    "&:hover": {
      backgroundColor: "#dba0be"
    }
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
}));
export default function EditProjectForm({open, onClose, project}) {
  const [projectName, setProjectName] = useState(project.title);
  const [description, setDescription] = useState(project.description);
  const [members, setMembers] = useState(project.members);
  const classes = useStyles();
  const defaultOptions = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder"
  ];
  const saveProject = (event) => {
    event.preventDefault();
    let returnedProject = projects.filter((item) => item.id === project.id)[0];
    returnedProject.title = projectName;
    returnedProject.description = description;
    returnedProject.members = members;
    onClose();
  };
  const onEditClose = (event) => {
    event.preventDefault();
    let returnedProject = projects.filter((item) => item.id === project.id)[0];
    setProjectName(returnedProject.title);
    setDescription(returnedProject.description);
    setMembers(returnedProject.members);
    onClose();
  };
  return /* @__PURE__ */ React.createElement(Dialog, {
    open,
    onClose: onEditClose,
    maxWidth: "md",
    classes: {paper: classes.dialogWrapper}
  }, /* @__PURE__ */ React.createElement(Typography, {
    variant: "h4",
    className: classes.titleWrapper
  }, "Edit Project"), /* @__PURE__ */ React.createElement(IconButton, {
    "aria-label": "close",
    className: classes.closeButton,
    onClick: onEditClose
  }, /* @__PURE__ */ React.createElement(CloseIcon, null)), /* @__PURE__ */ React.createElement(DialogContent, {
    className: classes.contentWrapper
  }, /* @__PURE__ */ React.createElement(Grid, {
    container: true,
    spacing: 4
  }, /* @__PURE__ */ React.createElement(Grid, {
    item: true,
    xs: 6
  }, /* @__PURE__ */ React.createElement(Typography, {
    variant: "h6",
    className: classes.title
  }, "Project name"), /* @__PURE__ */ React.createElement(TextField, {
    autoFocus: true,
    margin: "dense",
    id: "name",
    value: projectName,
    onChange: (event) => setProjectName(event.target.value),
    variant: "outlined",
    type: "text",
    classes: {root: classes.descriptionContentWrapper},
    placeholder: "Enter project name",
    color: "secondary"
  })), /* @__PURE__ */ React.createElement(Grid, {
    item: true,
    xs: 6
  }, /* @__PURE__ */ React.createElement(Typography, {
    variant: "h6",
    className: classes.title
  }, "Team members"), /* @__PURE__ */ React.createElement(FormControl, null, /* @__PURE__ */ React.createElement(Select, {
    label: "select-members",
    id: "members",
    multiple: true,
    value: members,
    classes: {root: classes.textField},
    onChange: (event) => setMembers(event.target.value)
  }, defaultOptions.map((name) => /* @__PURE__ */ React.createElement(MenuItem, {
    key: name,
    value: name
  }, name))))), /* @__PURE__ */ React.createElement(Grid, {
    item: true,
    xs: 6,
    className: classes.descriptionWrapper
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
    rows: 4,
    rowsMax: 8,
    color: "secondary"
  })), /* @__PURE__ */ React.createElement(Grid, {
    item: true,
    xs: 6
  }, /* @__PURE__ */ React.createElement(Typography, {
    variant: "h6",
    className: classes.title
  }, "Added"), /* @__PURE__ */ React.createElement(FormControl, null, /* @__PURE__ */ React.createElement(Select, {
    disabled: true,
    multiple: true,
    native: true,
    classes: {root: classes.textField},
    inputProps: {
      id: "select-multiple-native"
    }
  }, members.map((name) => /* @__PURE__ */ React.createElement("option", {
    key: name,
    value: name
  }, name))))))), /* @__PURE__ */ React.createElement(DialogActions, null, /* @__PURE__ */ React.createElement(Button, {
    variant: "contained",
    size: "large",
    className: classes.button,
    onClick: saveProject
  }, "Submit")));
}

import {Avatar, Dialog, DialogContent, Grid, IconButton, TextField, Typography} from "../../_snowpack/pkg/@material-ui/core.js";
import React, {useState} from "../../_snowpack/pkg/react.js";
import CloseIcon from "../../_snowpack/pkg/@material-ui/icons/Close.js";
import {useStyles} from "./CreateProjectForm.js";
import Comment from "../components/Comment.js";
;
export default function EditTaskForm({open, onClose, task}) {
  const classes = useStyles();
  const [id] = useState(task.id);
  const [title] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [assignee, setAssignee] = useState(task.asignee);
  const [reporter, setReporter] = useState(task.reporter);
  const [label, seLabel] = useState(task.label);
  const [estimate, setEstimate] = useState(task.estimated);
  const closeAndCleanUp = () => {
    onClose();
  };
  return /* @__PURE__ */ React.createElement(Dialog, {
    open,
    onClose: closeAndCleanUp,
    maxWidth: "md",
    classes: {paper: classes.dialogWrapper}
  }, /* @__PURE__ */ React.createElement(Typography, {
    variant: "h4",
    className: classes.titleWrapper
  }, "#", task.id, " ", task.title), /* @__PURE__ */ React.createElement(IconButton, {
    "aria-label": "close",
    className: classes.closeButton,
    onClick: closeAndCleanUp
  }, /* @__PURE__ */ React.createElement(CloseIcon, null)), /* @__PURE__ */ React.createElement(DialogContent, {
    className: classes.contentWrapper
  }, /* @__PURE__ */ React.createElement(Grid, {
    container: true,
    spacing: 4,
    alignItems: "flex-end"
  }, /* @__PURE__ */ React.createElement(Grid, {
    item: true,
    xs: 8
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
    xs: 4
  }, /* @__PURE__ */ React.createElement(Avatar, null, task.asignee[0].toLocaleUpperCase()), /* @__PURE__ */ React.createElement(TextField, {
    id: "input-with-icon-grid",
    label: "With a grid"
  }))), /* @__PURE__ */ React.createElement(Grid, {
    item: true,
    xs: 8
  }, /* @__PURE__ */ React.createElement(Comment, {
    task
  }))));
}

import {Grid, Typography, Tabs, Tab, Box, Avatar, TextField, makeStyles} from "../../_snowpack/pkg/@material-ui/core.js";
import React, {useState} from "../../_snowpack/pkg/react.js";
import useCurrentUser from "../contexts/CurrentUser.js";
import {useStyles} from "../pages/CreateProjectForm.js";
const useCustomStyles = makeStyles(() => ({
  avatar: {
    backgroundColor: "#ffcc66",
    marginLeft: "2rem"
  },
  muiAvatar: {
    width: "30px",
    height: "30px",
    margin: 0
  },
  description: {
    top: "-5rem",
    position: "relative"
  },
  tab: {
    borderRadius: "50px"
  },
  comment: {
    fontSize: "15px"
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
function TabPanel(props) {
  const {children, value, index, ...other} = props;
  return /* @__PURE__ */ React.createElement("div", {
    role: "tabpanel",
    hidden: value !== index,
    id: `scrollable-auto-tabpanel-${index}`,
    "aria-labelledby": `scrollable-auto-tab-${index}`,
    ...other
  }, value === index && /* @__PURE__ */ React.createElement(Box, {
    p: 3
  }, /* @__PURE__ */ React.createElement(Typography, null, children)));
}
export default function Activities({comments, history, onChange, project}) {
  const classes = useStyles();
  const myClasses = useCustomStyles();
  const user = useCurrentUser();
  const [newComments, setNewComments] = useState([]);
  const [comment, setComment] = useState("");
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      comments.push(comment);
      setNewComments(comments);
      onChange(value);
      setComment("");
    }
  };
  return /* @__PURE__ */ React.createElement(Grid, {
    item: true,
    xs: 7,
    classes: {root: myClasses.description}
  }, /* @__PURE__ */ React.createElement(Typography, {
    variant: "h6",
    className: classes.title
  }, "Activity"), /* @__PURE__ */ React.createElement(Tabs, {
    indicatorColor: "primary",
    value,
    onChange: handleChange
  }, /* @__PURE__ */ React.createElement(Tab, {
    label: "Comments",
    classes: {root: myClasses.tab}
  }), /* @__PURE__ */ React.createElement(Tab, {
    label: "History",
    classes: {root: myClasses.tab}
  })), /* @__PURE__ */ React.createElement(TabPanel, {
    value,
    index: 0
  }, comments.map((c) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Typography, {
    variant: "body2",
    className: myClasses.comment
  }, c))), /* @__PURE__ */ React.createElement(Box, {
    className: myClasses.addNewComment
  }, /* @__PURE__ */ React.createElement(Avatar, {
    className: myClasses.avatar,
    classes: {root: myClasses.muiAvatar}
  }, user && /* @__PURE__ */ React.createElement(React.Fragment, null, user?.username[0].toUpperCase(), " ")), /* @__PURE__ */ React.createElement(TextField, {
    variant: "outlined",
    label: "Add a comment",
    size: "small",
    color: "secondary",
    type: "text",
    value: comment,
    onChange: (event) => setComment(event.target.value),
    className: myClasses.addComment,
    onKeyPress: handleKeyPress
  }))), /* @__PURE__ */ React.createElement(TabPanel, {
    value,
    index: 1
  }, /* @__PURE__ */ React.createElement(Typography, null, "hitory")));
}

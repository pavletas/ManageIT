import React, {useState} from "../../_snowpack/pkg/react.js";
import {Container, Typography, TextField, Box, makeStyles, Button} from "../../_snowpack/pkg/@material-ui/core.js";
import {useHistory, Link} from "../../_snowpack/pkg/react-router-dom.js";
import authService, {users} from "../services/AuthService.js";
const useStyles = makeStyles(() => ({
  container: {
    marginTop: "3rem",
    marginBottom: "6rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "1px solid  #424242",
    width: "400px",
    padding: "30px"
  },
  signIn: {
    backgroundColor: "#ffcc66",
    border: "2px solid  #424242",
    width: "100px",
    marginLeft: "250px",
    "&:hover": {
      backgroundColor: "#f2dfb8"
    }
  },
  register: {
    marginTop: "20px"
  }
}));
export default function Login() {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  async function submit(event) {
    event.preventDefault();
    const user = users.filter((user2) => user2.username === username);
    const email = user.length ? user[0].email : null;
    authService.login({username, email, password});
    console.log(username, email, password);
    history.push(history.location.state?.from || "/");
  }
  return /* @__PURE__ */ React.createElement(Container, {
    maxWidth: "md",
    className: classes.container
  }, /* @__PURE__ */ React.createElement(Typography, {
    variant: "h4"
  }, "Login"), /* @__PURE__ */ React.createElement("form", {
    onSubmit: submit
  }, /* @__PURE__ */ React.createElement(Box, {
    display: "grid",
    marginTop: 10,
    gridGap: 20
  }, /* @__PURE__ */ React.createElement(TextField, {
    label: "username",
    variant: "outlined",
    type: "text",
    value: username,
    onChange: (event) => setUsername(event.target.value),
    size: "small",
    required: true,
    color: "secondary"
  }), /* @__PURE__ */ React.createElement(TextField, {
    label: "password",
    variant: "outlined",
    type: "password",
    value: password,
    onChange: (event) => setPassword(event.target.value),
    size: "small",
    required: true,
    color: "secondary"
  }), /* @__PURE__ */ React.createElement(Button, {
    className: classes.signIn,
    type: "submit"
  }, "Sign in"))), /* @__PURE__ */ React.createElement(Typography, {
    component: Link,
    to: "/signup",
    color: "inherit",
    className: classes.register
  }, "You do not have an account? Regster now."));
}

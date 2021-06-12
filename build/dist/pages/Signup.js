import React, {useState} from "../../_snowpack/pkg/react.js";
import {Container, Typography, TextField, Box, makeStyles, Button} from "../../_snowpack/pkg/@material-ui/core.js";
import {useHistory, Link} from "../../_snowpack/pkg/react-router-dom.js";
import authService from "../services/AuthService.js";
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
  signUp: {
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
  },
  input: {
    padding: "0px"
  }
}));
export default function Signup() {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();
  async function submit(event) {
    event.preventDefault();
    authService.register({username, email, password, type: "dev"});
    history.push(history.location.state?.from || "/");
  }
  return /* @__PURE__ */ React.createElement(Container, {
    maxWidth: "md",
    className: classes.container
  }, /* @__PURE__ */ React.createElement(Typography, {
    variant: "h4"
  }, "Sign up"), /* @__PURE__ */ React.createElement("form", {
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
    label: "email",
    variant: "outlined",
    type: "email",
    value: email,
    onChange: (event) => setEmail(event.target.value),
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
  }), /* @__PURE__ */ React.createElement(TextField, {
    label: "confirm password",
    variant: "outlined",
    type: "password",
    value: confirmPassword,
    onChange: (event) => setconfirmPassword(event.target.value),
    size: "small",
    required: true,
    color: "secondary"
  }), /* @__PURE__ */ React.createElement(Button, {
    className: classes.signUp,
    type: "submit"
  }, "Sign up"))), /* @__PURE__ */ React.createElement(Typography, {
    component: Link,
    to: "/",
    color: "inherit",
    className: classes.register
  }, "You already have an account? Login."));
}

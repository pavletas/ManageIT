import React, {useState} from "../../_snowpack/pkg/react.js";
import {AppBar, Typography, makeStyles, Toolbar, IconButton, Avatar, Box, Menu, MenuItem, CardActionArea, Link} from "../../_snowpack/pkg/@material-ui/core.js";
import MenuIcon from "../../_snowpack/pkg/@material-ui/icons/Menu.js";
import useCurrentUser from "../contexts/CurrentUser.js";
import {Link as RouterLink, useHistory} from "../../_snowpack/pkg/react-router-dom.js";
import authService from "../services/AuthService.js";
const useStyles = makeStyles(() => ({
  header: {
    top: "0px",
    backgroundColor: "#ac3973",
    textAlign: "center",
    padding: "5px"
  },
  toolBar: {
    display: "flex",
    justifyContent: "space-between"
  },
  avatar: {
    backgroundColor: "#ffcc66"
  },
  userBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: "28px"
  }
}));
export default function Header() {
  const history = useHistory();
  const classes = useStyles();
  const user = useCurrentUser();
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuEl, setMenuEl] = useState(null);
  function logout() {
    setAnchorEl(null);
    authService.logout();
  }
  function showUserProfile() {
    setAnchorEl(null);
  }
  function showProjects() {
    setMenuEl(null);
  }
  function showTeams() {
    setMenuEl(null);
  }
  function LoginHeaderButton(user2) {
    return /* @__PURE__ */ React.createElement(CardActionArea, {
      onClick: () => history.push(`/projects`)
    }, /* @__PURE__ */ React.createElement(Typography, {
      variant: "h4"
    }, "ManageIT"));
  }
  function LogoutHeaderButton(user2) {
    return /* @__PURE__ */ React.createElement(Typography, {
      variant: "h4"
    }, "ManageIT");
  }
  return /* @__PURE__ */ React.createElement(AppBar, {
    position: "sticky",
    className: classes.header
  }, /* @__PURE__ */ React.createElement(Toolbar, {
    className: classes.toolBar
  }, user && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(IconButton, {
    edge: "start",
    color: "inherit",
    "aria-label": "menu",
    onClick: (event) => setMenuEl(event.currentTarget)
  }, /* @__PURE__ */ React.createElement(MenuIcon, null)), /* @__PURE__ */ React.createElement(Menu, {
    anchorEl: menuEl,
    anchorOrigin: {
      vertical: "top",
      horizontal: "right"
    },
    keepMounted: true,
    transformOrigin: {
      vertical: "top",
      horizontal: "right"
    },
    open: !!menuEl,
    onClose: () => setMenuEl(null)
  }, /* @__PURE__ */ React.createElement(MenuItem, {
    onClick: showProjects,
    component: RouterLink,
    to: "/projects"
  }, "Projects"), /* @__PURE__ */ React.createElement(MenuItem, {
    onClick: showTeams,
    component: RouterLink,
    to: "/teams"
  }, "Teams"))), user && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Link, {
    component: RouterLink,
    to: "/projects",
    color: "inherit",
    underline: "none",
    className: classes.title
  }, "ManageIT")), !user && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Typography, {
    variant: "h4"
  }, "ManageIT")), user && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Box, {
    className: classes.userBox
  }, /* @__PURE__ */ React.createElement(Typography, {
    variant: "h6"
  }, "Hello, ", user?.username), /* @__PURE__ */ React.createElement(IconButton, {
    onClick: (event) => setAnchorEl(event.currentTarget)
  }, /* @__PURE__ */ React.createElement(Avatar, {
    className: classes.avatar
  }, user.username[0].toUpperCase()))), /* @__PURE__ */ React.createElement(Menu, {
    anchorEl,
    anchorOrigin: {
      vertical: "top",
      horizontal: "right"
    },
    keepMounted: true,
    transformOrigin: {
      vertical: "top",
      horizontal: "right"
    },
    open: !!anchorEl,
    onClose: () => setAnchorEl(null)
  }, /* @__PURE__ */ React.createElement(MenuItem, {
    onClick: showUserProfile,
    component: RouterLink,
    to: "/profile"
  }, "User Profile"), /* @__PURE__ */ React.createElement(MenuItem, {
    onClick: logout,
    component: RouterLink,
    to: "/"
  }, "Logout")))));
}

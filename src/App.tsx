import React from 'react';
import {
  BrowserRouter, Redirect, Switch, Route
} from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup'
import Header from './components/Header';
import ManageITThemeProvider from './components/Theme';
import { CurrentUserProvider } from './contexts/CurrentUser';
import Projects from './pages/Projects';
import Dashboard from './pages/Dashboard';
import TaskForm from './pages/EditTaskForm';
import PrivateRoute from './components/Auth/PrivateRoute';
import PublicRoute from './components/Auth/PublicRoute';

function App() {
  return (
    <BrowserRouter>
      <CurrentUserProvider>
        <ManageITThemeProvider>
          <Header />
          <Switch>
            <PrivateRoute exact path="/" component={Projects} />
            <PublicRoute exact path="/login" component={Login}/>
            <PublicRoute exact path="/signup" component={Signup} />
            <PrivateRoute exact path="/projects" component={Projects} />
            <PrivateRoute exact path="/:id/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/task" component={TaskForm} />
            <Redirect to="/" />
          </Switch>
        </ManageITThemeProvider>
      </CurrentUserProvider>
    </BrowserRouter>
  );
}

export default App;
import React, { useState, FormEvent } from 'react';
import { Container, Typography, TextField, Box, makeStyles, Button } from '@material-ui/core';
import { useHistory, Link } from 'react-router-dom';
import authService, { users } from '../services/AuthService';

const useStyles = makeStyles(() => ({
  container: {
    marginTop: '3rem',
    marginBottom: '6rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid  #424242',
    width: '400px',
    padding: '30px'
  },
  signIn: {
    backgroundColor: '#ffcc66',
    border: '2px solid  #424242',
    width: '100px',
    marginLeft: '250px',
    '&:hover': {
      backgroundColor: '#f2dfb8'
    }
  },
  register: {
    marginTop: '20px'
  }
}));

export default function Login() {
  const classes = useStyles();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory<{ from: Location }>();

  async function submit(event: FormEvent) {
    event.preventDefault();

    const user = users.filter(user => user.username === username)
    const email = user.length ? user[0].email : null;

    authService.login({ username, email, password });
    console.log(username, email, password);

    history.push(history.location.state?.from || '/');
  }

  return (
    <Container maxWidth="md" className={classes.container}>
      <Typography variant="h4">Login</Typography>
      <form onSubmit={submit}>
        <Box display="grid" marginTop={10} gridGap={20}>
          <TextField
            label="username"
            variant="outlined"
            type="text"
            value={username}
            onChange={(event: any) => setUsername(event.target.value)}
            size="small"
            required
            color="secondary"
          />
          <TextField
            label="password"
            variant="outlined"
            type="password"
            value={password}
            onChange={(event: any) => setPassword(event.target.value)}
            size="small"
            required
            color="secondary"
          />
          <Button className={classes.signIn} type="submit">Sign in</Button>
        </Box>
      </form>
      <Typography component={Link} to="/signup" color="inherit" className={classes.register}>
        You do not have an account? Regster now.
        </Typography>
    </Container>
  );
}
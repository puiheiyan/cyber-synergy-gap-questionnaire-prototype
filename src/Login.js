import React, {useState, useContext} from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Redirect } from 'react-router-dom';
import logo from "./resources/images/logo.png";
import { Link } from 'react-router-dom';
import {UserContext} from './UserContext';
import axios from 'axios';

const theme = createTheme();

export default function Login() {
  const { user ,setUser } = useContext(UserContext);
  const [valid, setValid] = useState("");
  const [admin, setAdmin] = useState(false);


  const contains = async (email, password) => {
    const userLists = await axios.get('http://localhost:4001/users');
    const arr = userLists.data;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].email === email) {
        return arr[i]._id;
      }
    }
    return null;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');
    const loginInfo = {email, password};
    const id = await contains(email, password);
    if (id !== null) {
      axios.post('http://localhost:4001/users/login', loginInfo)
        .then(res => {
          setValid("true");
          const tokens = res.data.token;
          const refreshTokens = res.data.refreshToken;
          const userStorage = {id, email, tokens, refreshTokens};
          setUser(userStorage);
          localStorage.clear();
          localStorage.setItem("user", JSON.stringify(userStorage));
        }).catch(err => {
          setValid("false");
          console.log(err);
        });
    }

  };


  return (
    <ThemeProvider theme={theme}>
      { valid === "true" ? (<Redirect push to="/dashboard"/>) : null }
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img className="login-logo"src={logo} alt="Synergy Logo" />
          <Typography component="h1" variant="h4">
            Assessment Tool
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            {valid === "false" ? <h4 className="error"> Invalid username or password. Please try again. </h4> : null}
            {valid === "true" ? <h4 className="success"> Login Successful. </h4> : null}
            <Button type="submit" fullWidth variant="outlined" sx={{ mt: 3, mb: 2 }}>
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
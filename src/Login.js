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

const theme = createTheme();

export default function Login() {
  const { user ,setUser } = useContext(UserContext);
  const [valid, setValid] = useState("");
  const [admin, setAdmin] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');
    console.log({
      email,
      password,
    });
    if (email === "admin@gmail.com") {
      setAdmin("true");
      const role = "Admin";
      setUser({email, password, role});
      setValid("true")
    } else if (email === "error@gmail.com") {
      setValid("false");
    } else {
      const role = "User";
      setUser({email, password, role});
      setValid("true")
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
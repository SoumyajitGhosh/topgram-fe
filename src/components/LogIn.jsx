import React, {useState} from 'react';
import { Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import { theme } from '../theme/lightTheme';
import mainImage from '../assets/MainImage.png';
import { CssBaseline, Container, Typography, Alert, TextField, Button, Link } from '@mui/material';

const LogIn = () => {
  const [formatValidation, setFormatValidation] = useState(false);
	const [authValidation, setAuthValidation] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ThemeProvider theme={theme}>    
      <Grid container>
        <Grid item sm={4} md={6} 
          sx={{ backgroundSize: "cover",
		            backgroundImage: `url(${mainImage})`,
		            backgroundRepeat: "no-repeat",
		            backgroundPosition: "center",
		            height: "100vh"}}
         />
         <Grid item xs={12} sm={8} md={6}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Grid sx={{ 
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                transform: 'translateY(200px)'
              }}>
                <Typography variant="h2" gutterBottom sx={{ fontFamily: 'Grand Hotel, cursive'}}>TopGram</Typography>
                {formatValidation ? (
                  <Alert variant="outlined" severity="error">
                    Invalid Email format — check it out!
                  </Alert>
                ) : null}
                {authValidation ? (
                  <Alert variant="outlined" severity="error">
                    Invalid given Email/Password — check it out!
                  </Alert>
                ) : null}
                <form sx={{ width: '80%', marginTop: theme.spacing(1)}} noValidate>
                  <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  // autoComplete="email"
                  autoFocus
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />

                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  sx= {{ color: '#fff' }}
                  // className={classes.submit}
                  disabled={email !== "" && password !== "" ? false : true}
                  // onClick={handlePostData}
                >
                  Sign In
                </Button>
                <Grid container sx={{ marginTop: theme.spacing(1)}}>
                  <Grid item xs>
                    <Link to="/reset" style={{ textDecoration: "none" }}>
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link to="/signup" style={{ textDecoration: "none" }}>
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
                </form>
              </Grid>
            </Container>
          </Grid>
      </Grid>
      
    </ThemeProvider>
  )
}

export default LogIn
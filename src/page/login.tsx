import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, TextField, Typography } from '@mui/material';
import StudentAuth from '../models/studentauth';
import { saveToken } from '../sessions/session';
import useStore from '../store/globalState';
import { useHistory } from 'react-router-dom';

interface login {
  username: string;
  password: string;
}
const Login = () => {
  const history = useHistory();

  const [valueLogin, setValueLogin] = React.useState<login>({
    username: ' ',
    password: '        ',
  });

  const handleChange =
    (prop: keyof login) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValueLogin({ ...valueLogin, [prop]: event.target.value });
    };
  const setUsername = useStore((state) => state.setUsername);
  const setToken = useStore((state) => state.setToken);
  const setRole = useStore((state) => state.setRole);
  const setId = useStore((state) => state.setId);

  const handleClick = async () => {
    const auth = await StudentAuth(valueLogin.username, valueLogin.password);
    if (auth.token && auth.username && auth.id) {
      saveToken(auth.token, auth.username, 'student', auth.id);
      setUsername(auth.username);
      setToken(auth.token);
      setRole('student');
      setId(auth.id);
      history.push('/diagnostik_student');
    }
  };
  return (
    <Grid
      container
      spacing={0}
      direction='column'
      alignItems='center'
      justifyContent='center'
      style={{ minHeight: '100vh' }}
    >
      <Grid item xs={3} md={8}>
        <Box
          sx={{
            width: 500,
            height: 500,
            border: '2px solid blue',
            borderRadius: 5,
            fontFamily: 'Roboto',
          }}
        >
          <Grid
            container
            direction='column'
            justifyContent='center'
            alignItems='center'
            spacing={3}
          >
            <Grid item mt={10}>
              <Typography variant='h3'>Student Login</Typography>
            </Grid>
            <Grid item container direction='column' alignItems='center' mt={5}>
              <TextField
                required
                id='filled-basic'
                label='Username'
                sx={{ width: '80%' }}
                onChange={handleChange('username')}
                error={valueLogin.username === ''}
                helperText={
                  valueLogin.username === '' ? 'Invalid username!' : ''
                }
              />
            </Grid>
            <Grid item container direction='column' alignItems='center'>
              <TextField
                required
                id='filled-basic'
                label='Password'
                type='password'
                onChange={handleChange('password')}
                error={valueLogin.password === ''}
                helperText={
                  valueLogin.password.length < 8 ? 'Invalid password!' : ''
                }
                sx={{ width: '80%' }}
              />
            </Grid>
            <Grid item container direction='column' alignItems='center'>
              <Button
                variant='contained'
                sx={{ width: '80%' }}
                onClick={handleClick}
              >
                Login
              </Button>
            </Grid>
          </Grid>
          <Typography align='center' variant='subtitle2' sx={{ mt: 5, mb: 5 }}>
            <Button
              variant='outlined'
              onClick={() => {
                history.push('/loginAdmin');
              }}
            >
              {' '}
              Pergi ke halaman Admin
            </Button>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};
export default Login;

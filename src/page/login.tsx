import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, TextField, Typography } from '@mui/material';

const Login = () => {
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
              />
            </Grid>
            <Grid item container direction='column' alignItems='center'>
              <TextField
                required
                id='filled-basic'
                label='Password'
                type='password'
                sx={{ width: '80%' }}
              />
            </Grid>
            <Grid item container direction='column' alignItems='center'>
              <Button variant='contained' sx={{ width: '80%' }}>
                Login
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};
export default Login;

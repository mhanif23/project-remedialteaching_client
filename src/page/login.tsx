import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

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
            border: 2,
            borderRadius: 5,
            borderStyle: 'solid',
          }}
        />
      </Grid>
    </Grid>
  );
};
export default Login;

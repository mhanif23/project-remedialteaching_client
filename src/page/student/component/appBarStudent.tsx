import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SwipeableTemporaryDrawerStudent from './appDrawerStudent';
import { clearCredential } from '../../../sessions/session';
import { useHistory } from 'react-router-dom';

export default function ButtonAppBarStudent() {
  const history = useHistory();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <SwipeableTemporaryDrawerStudent />
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Remedial Teaching
          </Typography>
          <Button
            color='inherit'
            onClick={() => {
              clearCredential();
              history.push('/');
            }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

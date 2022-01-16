import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { useHistory } from 'react-router-dom';

type Anchor = 'left';

export default function SwipeableTemporaryDrawerStudent() {
  const history = useHistory();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 250 }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Diagnostik', 'Materi', 'Latihan', 'Ujian', 'Profil'].map(
          (text, index) => (
            <ListItem
              button
              key={text}
              onClick={() => {
                const path =
                  text === 'Diagnostik'
                    ? '/diagnostik_student'
                    : text === 'Materi'
                    ? '/materiStudentPage'
                    : text === 'Latihan'
                    ? '/latihanStudentAnswerPage'
                    : text === 'Ujian'
                    ? '/Ujian'
                    : '/profil';
                history.push(path);
              }}
            >
              <ListItemIcon>
                <InsertDriveFileIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ),
        )}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      {(['left'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{ mr: 2 }}
            >
              <MenuIcon sx={{ color: 'white' }} />
            </IconButton>
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}

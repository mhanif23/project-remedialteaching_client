import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import ButtonAppBar from '../../components/appBar';
import DenseTable from '../../components/tables';
import { createAdmin } from '../../models/admin';

const Admins = () => {
  const [open, setOpen] = React.useState(false);
  const [dataNewAdmin, setNewAdmin] = React.useState({
    username: '',
    password: '',
    fullname: '',
  });

  // eslint-disable-next-line no-restricted-globals
  const ChangeValueNewAdmin = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setNewAdmin({ ...dataNewAdmin, [e.target.id]: e.target.value });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function createData(
    id: string,
    name: string,
    data1: string,
    data2: string,
    data3: string,
    data4: string,
  ) {
    return { id, name, data1, data2, data3, data4 };
  }

  function createName(
    name1: string,
    name2: string,
    name3: string,
    name4: string,
    name5: string,
    name6: string,
  ) {
    return { name1, name2, name3, name4, name5, name6 };
  }

  const tableName = [
    createName('Nama1', 'Nama2', 'Nama3', 'Nama4', 'Nama5', 'Action'),
  ];

  const rows = [
    createData('1', 'Frozen yoghurt', '159', '6.0', '24', '4.0'),
    createData('2', 'Ice cream sandwich', '237', '9.0', '37', '4.3'),
    createData('3', 'Eclair', '262', '16.0', '24', '6.0'),
    createData('4', 'Cupcake', '305', '3.7', '67', '4.3'),
    createData('5', 'Gingerbread', '356', '16.0', '49', '3.9'),
  ];

  const create = async () => {
    const data = createAdmin(dataNewAdmin);
    if ((await data) === true) {
      handleClose();
    } else {
      setNewAdmin({
        username: '',
        password: '',
        fullname: '',
      });
      handleClose();
    }
  };

  return (
    <>
      <ButtonAppBar />
      <Container>
        <Typography align='center' variant='h2' sx={{ mt: 5 }}>
          Admin List
        </Typography>
        <Box>
          <DenseTable rows={rows} tableName={tableName} />
        </Box>
        <Button
          autoFocus
          variant='contained'
          color='primary'
          onClick={handleClickOpen}
          sx={{ mt: 2 }}
        >
          add New
        </Button>
      </Container>

      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>Form Admin</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin='normal'
            id='username'
            label='Username'
            type='username'
            fullWidth
            variant='standard'
            value={dataNewAdmin.username}
            onChange={(
              e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
            ) => {
              ChangeValueNewAdmin(e);
            }}
          />
        </DialogContent>
        <DialogContent>
          <TextField
            autoFocus
            margin='normal'
            id='password'
            label='Password'
            type='password'
            fullWidth
            variant='standard'
            value={dataNewAdmin.password}
            onChange={(
              e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
            ) => {
              ChangeValueNewAdmin(e);
            }}
          />
        </DialogContent>
        <DialogContent>
          <TextField
            autoFocus
            margin='normal'
            id='fullname'
            label='Full Name'
            type='name'
            fullWidth
            variant='standard'
            value={dataNewAdmin.fullname}
            onChange={(
              e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
            ) => {
              ChangeValueNewAdmin(e);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={create}>Create</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Admins;

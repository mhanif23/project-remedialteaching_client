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
import React, { useEffect } from 'react';
import ButtonAppBar from '../../components/appBar';
import DenseTable from '../../components/tables';
import { admins, createAdmin, getAdmins } from '../../models/admin';

const Admins = () => {
  const [open, setOpen] = React.useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [idEdit, setIdEdit] = React.useState(-1);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [idDelete, setIdDelete] = React.useState(-1);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);

  const [dataNewAdmin, setNewAdmin] = React.useState({
    username: '',
    password: '',
    fullname: '',
  });

  const handleClickOpenDelete = () => {
    setOpenDelete(true);
  };

  const handleCloseOpenDelete = () => {
    setOpenDelete(false);
  };

  const handleClickOpenEditDialog = () => {
    setOpenEdit(true);
  };

  const handleCloseEditDialog = () => {
    setOpenEdit(false);
  };
  const [dataAdmin, setDataAdmin] = React.useState<admins[] | undefined>(
    undefined,
  );

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

  function createData(id: number, data1: string, data2: string, name: string) {
    return { id, data1, data2, name };
  }

  function createName(name1: string, name2: string, name3: string) {
    return { name1, name2, name3 };
  }

  const tableName = [createName('No', 'username', 'fullname')];

  const rows: { id: number; data1: string; data2: string }[] = [];
  async function admin() {
    const data = await getAdmins();
    setDataAdmin(data);
  }
  useEffect(() => {
    admin();
  }, [open, openEdit, openDelete]);

  // eslint-disable-next-line array-callback-return
  dataAdmin?.map((e, index) => {
    rows.push(createData(e.id, e.username, e.admin_name, String(index + 1)));
  });

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

  // eslint-disable-next-line react-hooks/exhaustive-deps

  return (
    <>
      <ButtonAppBar />
      <Container>
        <Typography align='center' variant='h2' sx={{ mt: 5 }}>
          Admin List
        </Typography>
        <Box>
          <DenseTable
            rows={rows}
            tableName={tableName}
            handleClickOpenEditDialog={handleClickOpenEditDialog}
            handleCloseEditDialog={handleCloseEditDialog}
            setIdEdit={setIdEdit}
            setIdDelete={setIdDelete}
            handleClickOpenDelete={handleClickOpenDelete}
            handleCloseOpenDelete={handleCloseOpenDelete}
          />
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

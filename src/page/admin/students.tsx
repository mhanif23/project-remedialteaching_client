import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Typography,
} from '@mui/material';
import React, { useEffect } from 'react';
import ButtonAppBar from '../../components/appBar';
import DenseTable from '../../components/tables';
import {
  createStudent,
  deleteStudent,
  getStudents,
  students,
} from '../../models/student';

const Students = () => {
  const [open, setOpen] = React.useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [idEdit, setIdEdit] = React.useState(-1);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [idDelete, setIdDelete] = React.useState(-1);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);

  const [dataNewStudent, setNewStudent] = React.useState({
    username: '',
    password: '',
    student_name: '',
    class: '',
  });

  const deleteStudentQuestion = async () => {
    const data = deleteStudent(idDelete);
    if ((await data) === true) {
      setIdDelete(-1);
      handleCloseOpenDelete();
    } else {
      setNewStudent({
        username: '',
        password: '',
        student_name: '',
        class: '',
      });
      handleCloseOpenDelete();
    }
  };

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
  const [dataStudent, setdataStudent] = React.useState<students[] | undefined>(
    undefined,
  );

  // eslint-disable-next-line no-restricted-globals
  const ChangeValueNewAdmin = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setNewStudent({ ...dataNewStudent, [e.target.id]: e.target.value });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function createData(
    id: number,
    data1: string,
    data2: string,
    data3: string,
    data4: string,
    name: string,
  ) {
    return { id, data1, data2, data3, data4, name };
  }

  function createName(
    name1: string,
    name2: string,
    name3: string,
    name4: string,
    name5: string,
  ) {
    return { name1, name2, name3, name4, name5 };
  }

  const tableName = [
    createName('No', 'username', 'student_name', 'class', 'status'),
  ];

  const rows: { id: number; data1: string; data2: string }[] = [];
  async function admin() {
    const data = await getStudents();
    setdataStudent(data);
  }
  useEffect(() => {
    admin();
  }, [open, openEdit, openDelete]);

  // eslint-disable-next-line array-callback-return
  dataStudent?.map((e, index) => {
    rows.push(
      createData(
        e.id,
        e.username,
        e.student_name,
        e.class,
        e.status,
        String(index + 1),
      ),
    );
  });

  const create = async () => {
    const data = createStudent(dataNewStudent);
    if ((await data) === false) {
    } else {
      setNewStudent({
        username: '',
        password: '',
        student_name: '',
        class: '',
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
          Stundent List
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
        <DialogTitle>Form Student</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin='normal'
            id='username'
            label='Username'
            type='username'
            fullWidth
            variant='standard'
            value={dataNewStudent.username}
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
            value={dataNewStudent.password}
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
            id='student_name'
            label='Full Name'
            type='name'
            fullWidth
            variant='standard'
            value={dataNewStudent.student_name}
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
            id='class'
            label='class'
            type='name'
            fullWidth
            variant='standard'
            value={dataNewStudent.class}
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
      <Dialog
        open={openDelete}
        onClose={handleCloseOpenDelete}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>{'Delete this data?'}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            Are you sure to delete this{' '}
            {
              // eslint-disable-next-line array-callback-return
              dataStudent?.map((e) => {
                if (e.id === idDelete) {
                  return e.student_name;
                }
              })
            }
            ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseOpenDelete}>Cancel</Button>
          <Button onClick={deleteStudentQuestion} autoFocus>
            Accept
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Students;

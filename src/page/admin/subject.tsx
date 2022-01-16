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
  createSubject,
  deleteSubjectId,
  getSubject,
  SubjectsData,
  updateSubject,
} from '../../models/subjects';
import useStore from '../../store/globalState';

const Subjects = () => {
  const [open, setOpen] = React.useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [idEdit, setIdEdit] = React.useState(-1);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [idDelete, setIdDelete] = React.useState(-1);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);

  const [dataNewSubject, setNewSubject] = React.useState({
    name: '',
  });
  const token = useStore((state) => state.token);

  const deleteSubject = async () => {
    const data = deleteSubjectId(idDelete, token);
    if ((await data) === true) {
      setIdDelete(-1);
      handleCloseOpenDelete();
    } else {
      setNewSubject({
        name: '',
      });
      setIdDelete(-1);
      handleCloseOpenDelete();
    }
  };

  const update = async () => {
    const data = updateSubject(idEdit, dataNewSubject.name, token);
    if ((await data) === true) {
      handleCloseEditDialog();
      subject();
      setIdEdit(-1);
    } else {
      setNewSubject({
        name: '',
      });
      handleCloseEditDialog();
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
  const [dataSubject, setdataSubject] = React.useState<
    SubjectsData[] | undefined
  >(undefined);

  // eslint-disable-next-line no-restricted-globals
  const ChangeValueNewAdmin = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setNewSubject({ ...dataNewSubject, [e.target.id]: e.target.value });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function createData(id: number, data1: string, name: string) {
    return { id, data1, name };
  }

  function createName(name1: string, name2: string) {
    return { name1, name2 };
  }

  const tableName = [createName('No', 'name')];

  const rows: { id: number; data1: string }[] = [];
  async function subject() {
    const data = await getSubject(token);
    setdataSubject(data);
  }
  useEffect(() => {
    subject();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, openEdit, openDelete]);

  useEffect(() => {
    const subject = dataSubject?.find((e) => e.id === idEdit);
    if (subject) {
      setNewSubject({
        name: subject.name,
      });
    }
  }, [idEdit, dataSubject]);
  // eslint-disable-next-line array-callback-return
  dataSubject?.map((e, index) => {
    rows.push(createData(e.id, e.name, String(index + 1)));
  });

  const create = async () => {
    const data = createSubject(dataNewSubject, token);
    if ((await data) === false) {
    } else {
      setNewSubject({
        name: '',
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
          Subject List
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
        <DialogTitle>Form Subject</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin='normal'
            id='name'
            label='name'
            type='string'
            fullWidth
            variant='standard'
            value={dataNewSubject.name}
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
      <Dialog open={openEdit} onClose={handleCloseEditDialog} fullWidth>
        <DialogTitle>Form Edit Subject</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin='normal'
            id='name'
            label='name'
            type='string'
            fullWidth
            variant='standard'
            value={dataNewSubject.name}
            onChange={(
              e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
            ) => {
              ChangeValueNewAdmin(e);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEditDialog}>Cancel</Button>
          <Button onClick={update}>update</Button>
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
              dataSubject?.map((e) => {
                if (e.id === idDelete) {
                  return e.name;
                }
              })
            }
            ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseOpenDelete}>Cancel</Button>
          <Button onClick={deleteSubject} autoFocus>
            Accept
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Subjects;

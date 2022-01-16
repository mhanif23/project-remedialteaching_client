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
  createQuestion,
  deleteQuestionId,
  getQuestion,
  QuestionsData,
  updateQuestion,
} from '../../models/question';
import useStore from '../../store/globalState';

const Questions = () => {
  const [open, setOpen] = React.useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [idEdit, setIdEdit] = React.useState(-1);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [idDelete, setIdDelete] = React.useState(-1);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);

  const [dataNewQuestion, setNewQuestion] = React.useState({
    id_indicator: -1,
    question: '',
    media: '',
  });
  const token = useStore((state) => state.token);

  const deletequestion = async () => {
    const data = deleteQuestionId(idDelete, token);
    if ((await data) === true) {
      setIdDelete(-1);
      handleCloseOpenDelete();
    } else {
      setNewQuestion({
        id_indicator: -1,
        question: '',
        media: '',
      });
      setIdDelete(-1);
      handleCloseOpenDelete();
    }
  };

  const update = async () => {
    const data = updateQuestion(idEdit, dataNewQuestion, token);
    if ((await data) === true) {
      handleCloseEditDialog();
      question();
      setIdEdit(-1);
    } else {
      setNewQuestion({
        id_indicator: -1,
        question: '',
        media: '',
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
  const [dataquestion, setdataquestion] = React.useState<
    QuestionsData[] | undefined
  >(undefined);

  // eslint-disable-next-line no-restricted-globals
  const ChangeValueNewAdmin = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setNewQuestion({ ...dataNewQuestion, [e.target.id]: e.target.value });
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
    createName('No', 'id_indicator', 'question', 'media', 'id_question'),
  ];

  const rows: { id: number; data1: string }[] = [];
  async function question() {
    const data = await getQuestion();
    setdataquestion(data);
  }
  useEffect(() => {
    question();
  }, [open, openEdit, openDelete]);

  useEffect(() => {
    const question = dataquestion?.find((e) => e.id === idEdit);
    if (question) {
      setNewQuestion({
        id_indicator: question.id_indicator,
        question: question.question,
        media: question.media,
      });
    }
  }, [idEdit, dataquestion]);
  // eslint-disable-next-line array-callback-return
  dataquestion?.map((e, index) => {
    rows.push(
      createData(
        e.id,
        String(e.id_indicator),
        e.question,
        e.media,
        String(e.id),
        String(index + 1),
      ),
    );
  });

  const create = async () => {
    const data = await createQuestion(dataNewQuestion, token);
    if (data === true) {
      setNewQuestion({
        id_indicator: -1,
        question: '',
        media: '',
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
          Question List
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
        <DialogTitle>Form Question</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin='normal'
            id='id_indicator'
            label='id_indicator'
            type='string'
            fullWidth
            variant='standard'
            value={dataNewQuestion.id_indicator}
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
            id='question'
            label='question'
            type='string'
            fullWidth
            variant='standard'
            value={dataNewQuestion.question}
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
            id='media'
            label='media'
            type='string'
            fullWidth
            variant='standard'
            value={dataNewQuestion.media}
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
        <DialogTitle>Form Edit question</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin='normal'
            id='id_indicator'
            label='id_indicator'
            type='string'
            fullWidth
            variant='standard'
            value={dataNewQuestion.id_indicator}
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
            id='question'
            label='question'
            type='string'
            fullWidth
            variant='standard'
            value={dataNewQuestion.question}
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
            id='media'
            label='media'
            type='string'
            fullWidth
            variant='standard'
            value={dataNewQuestion.media}
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
              dataquestion?.map((e) => {
                if (e.id === idDelete) {
                  return e.id;
                }
              })
            }
            ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseOpenDelete}>Cancel</Button>
          <Button onClick={deletequestion} autoFocus>
            Accept
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Questions;

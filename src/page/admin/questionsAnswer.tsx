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
import DenseTable from '../../components/tables';
import ButtonAppBar from '../../components/appBar';
import {
  createQuestionAnswer,
  deleteQuestionAnswerId,
  getQuestionAnswer,
  QuestionsAnswerData,
  updateQuestionAnswer,
} from '../../models/questAnswer';

const QuestionsAnswer = () => {
  const [open, setOpen] = React.useState(false);
  const [idEdit, setIdEdit] = React.useState(-1);
  const [idDelete, setIdDelete] = React.useState(-1);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const [idQuestion, setidQuestion] = React.useState(-1);
  const [questionAnswer, setquestionAnswer] = React.useState({
    id_question: -1,
    answer: '',
    status: false,
  });

  const [questionAnswerall, setquestionAnswerAll] = React.useState<
    QuestionsAnswerData[] | undefined
  >(undefined);

  // eslint-disable-next-line no-restricted-globals
  const ChangeValueNewAdmin = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setquestionAnswer({ ...questionAnswer, [e.target.id]: e.target.value });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpenEditDialog = () => {
    setOpenEdit(true);
  };

  const handleCloseEditDialog = () => {
    setOpenEdit(false);
  };

  const handleClickOpenDelete = () => {
    setOpenDelete(true);
  };

  const handleCloseOpenDelete = () => {
    setOpenDelete(false);
  };

  function createData(
    id: number,
    data1: string,
    data2: string,
    data3: string,
    name: string,
  ) {
    return {
      id,
      data1,
      data2,
      data3,
      name,
    };
  }

  function createName(
    name1: string,
    name2: string,
    name3: string,
    name4: string,
  ) {
    return { name1, name2, name3, name4 };
  }

  const tableName = [createName('no', 'id_question', 'answer', 'status')];

  const rows: {
    id: number;
    data1: string;
    data2: string;
    data3: string;
    name: string;
  }[] = [];
  async function questionAnswerList() {
    const data = await getQuestionAnswer(idQuestion);
    setquestionAnswerAll(data);
  }
  useEffect(() => {
    const answer = questionAnswerall?.find((e) => e.id === idEdit);
    if (answer) {
      setquestionAnswer({
        id_question: answer.id_question,
        answer: answer.answer,
        status: answer.status,
      });
    }
  }, [idEdit, questionAnswerall]);

  // eslint-disable-next-line array-callback-return
  questionAnswerall?.map((e, index) => {
    rows.push(
      createData(
        e.id,
        String(e.id_question),
        e.answer,
        String(e.status),
        String(index + 1),
      ),
    );
  });
  const create = async () => {
    const data = createQuestionAnswer(questionAnswer);
    if ((await data) === true) {
      setquestionAnswer({
        id_question: -1,
        answer: '',
        status: false,
      });
      handleClose();
      questionAnswerList();
    } else {
    }
  };

  const deleteDiagnostik = async () => {
    const data = deleteQuestionAnswerId(idDelete);
    if ((await data) === true) {
      handleCloseOpenDelete();
      questionAnswerList();
    } else {
      setquestionAnswer({
        id_question: -1,
        answer: '',
        status: false,
      });
      setIdDelete(-1);
      handleCloseOpenDelete();
    }
  };

  const update = async () => {
    const data = updateQuestionAnswer(
      idEdit,
      questionAnswer.id_question,
      questionAnswer.answer,
      questionAnswer.status,
    );
    if ((await data) === true) {
      handleCloseEditDialog();
      questionAnswerList();
    } else {
      setquestionAnswer({
        id_question: -1,
        answer: '',
        status: false,
      });
      handleCloseEditDialog();
    }
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps

  return (
    <>
      <ButtonAppBar />
      <Container>
        <Typography align='center' variant='h2' sx={{ mt: 5 }}>
          Daftar List Jawaban
        </Typography>
        <Box>
          <TextField
            autoFocus
            margin='normal'
            id='idQuestion'
            label='idQuestion'
            type='number'
            fullWidth
            variant='standard'
            value={idQuestion}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setidQuestion(Number(e.target.value));
            }}
          />
          <Button
            autoFocus
            variant='contained'
            color='primary'
            onClick={questionAnswerList}
            sx={{ mt: 2, mb: 5 }}
          >
            Find
          </Button>
        </Box>
        <Box>
          <DenseTable
            rows={rows}
            handleClickOpenEditDialog={handleClickOpenEditDialog}
            handleCloseEditDialog={handleCloseEditDialog}
            setIdEdit={setIdEdit}
            setIdDelete={setIdDelete}
            handleClickOpenDelete={handleClickOpenDelete}
            handleCloseOpenDelete={handleCloseOpenDelete}
            tableName={tableName}
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
        <DialogTitle>Form Question Answer</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin='normal'
            id='id_question'
            label='id_question'
            type='number'
            fullWidth
            variant='standard'
            value={questionAnswer.id_question}
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
            id='answer'
            label='answer'
            type='string'
            fullWidth
            variant='standard'
            value={questionAnswer.answer}
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
            id='status'
            label='status'
            type='bool'
            fullWidth
            variant='standard'
            value={questionAnswer.status}
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
        <DialogTitle>Form Update Question Answer</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin='normal'
            id='id_question'
            label='id_question'
            type='number'
            fullWidth
            variant='standard'
            value={questionAnswer.id_question}
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
            id='answer'
            label='answer'
            type='string'
            fullWidth
            variant='standard'
            value={questionAnswer.answer}
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
            id='status'
            label='status'
            type='boolean'
            fullWidth
            variant='standard'
            value={questionAnswer.status}
            onChange={(
              e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
            ) => {
              ChangeValueNewAdmin(e);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEditDialog}>Cancel</Button>
          <Button onClick={update}>Update</Button>
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
            Are you sure to delete this {idDelete}?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseOpenDelete}>Cancel</Button>
          <Button onClick={deleteDiagnostik} autoFocus>
            Accept
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default QuestionsAnswer;

import {
  Button,
  Container,
  Dialog,
  Typography,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Box,
  FormControl,
} from '@mui/material';
import React, { useEffect } from 'react';
import { idiagnostik_question } from '../../models/diagnostik_question';
import ButtonAppBarStudent from './component/appBarStudent';
import CircularProgress from '@mui/material/CircularProgress';
import { Toast } from '../../components/toast';
import AnswerChoiceall from './component/answerChoiceall';
import {
  createTryOutStudentAnswer,
  iCreate_TryOut_student_answer,
} from '../../models/tryOutAnswer';
import { getSoalTryOutStudent } from '../../models/tryOut';
import useStore from '../../store/globalState';

const TryOutPageAnswer = () => {
  const [studentStatus, setstudentStatus] = React.useState(0);
  const [openToast, setOpenToast] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [TryOutQuestion, setTryOutQuestion] = React.useState<
    idiagnostik_question[] | undefined
  >(undefined);
  const id_student = useStore((state) => state.id);
  const handleToastOpen = () => {
    setOpenToast(true);
  };
  const handleToastClose = () => {
    setOpenToast(false);
  };
  async function soalDiangostik() {
    const data = await getSoalTryOutStudent(id_student);
    setTryOutQuestion(data);
  }
  const token = useStore((state) => state.token);

  function refreshPage() {
    window.location.reload();
  }
  useEffect(() => {
    soalDiangostik();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const studentAnswer = React.useRef<iCreate_TryOut_student_answer[]>([]);
  const [openPopUp, setopenPopUp] = React.useState(false);

  const addNewStudentAnswer = (id_question_TryOut: number, answer: string) => {
    if (studentAnswer.current.length !== 0) {
      const data = studentAnswer.current.filter((e) => {
        return e.id_TryOut_Question !== id_question_TryOut;
      });
      data.push({
        id_TryOut_Question: id_question_TryOut,
        studentId: id_student,
        answer: answer,
      });
      studentAnswer.current = data;
    } else {
      const data = [];
      data.push({
        id_TryOut_Question: id_question_TryOut,
        studentId: id_student,
        answer: answer,
      });
      studentAnswer.current = data;
    }
  };

  const submitAnswer = async () => {
    if (TryOutQuestion?.length !== studentAnswer.current.length) {
      handleToastOpen();
    } else {
      setLoading(true);
      const newAnswer = studentAnswer.current;
      const data = await createTryOutStudentAnswer(newAnswer, token);
      if (data) {
        setLoading(false);
        refreshPage();
      }
    }
  };

  const handleopenPopUp = () => {
    setopenPopUp(true);
  };
  const handleClosePopUp = () => {
    setopenPopUp(false);
  };
  return (
    <>
      <ButtonAppBarStudent />
      <Container>
        {studentStatus === 0 ? (
          <>
            <Typography align='center' variant='h2' sx={{ mt: 5 }}>
              Kamu belum mengerjakan soal Latihan!
            </Typography>
            <Button
              sx={{
                mt: 3,
              }}
              fullWidth
              variant='outlined'
              onClick={handleopenPopUp}
            >
              Klik untuk mulai mengerjakan
            </Button>
          </>
        ) : (
          <>
            <Typography align='center' variant='h2' sx={{ mt: 5, mb: 3 }}>
              Selamat Mengerjakan
            </Typography>
          </>
        )}

        {studentStatus === 0 ? (
          <></>
        ) : (
          <>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <FormControl>
                {TryOutQuestion
                  ? TryOutQuestion.map((e, index) => {
                      return (
                        <AnswerChoiceall
                          question={e}
                          addNewStudentAnswer={addNewStudentAnswer}
                          index={index}
                        />
                      );
                    })
                  : ''}
              </FormControl>
            </Box>
            <Box>
              <Button
                onClick={submitAnswer}
                fullWidth
                variant='contained'
                disabled={loading}
              >
                {loading && <CircularProgress />}
                Selesai{' '}
              </Button>
            </Box>
          </>
        )}
      </Container>
      <Dialog
        open={openPopUp}
        onClose={handleClosePopUp}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>{'Warning'}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            Siap untuk mengerjakan?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosePopUp}>Cancel</Button>
          <Button
            onClick={() => {
              handleClosePopUp();
              setstudentStatus(1);
            }}
            autoFocus
          >
            Ya!
          </Button>
        </DialogActions>
      </Dialog>
      <Toast
        open={openToast}
        handleClose={handleToastClose}
        message='Please check your answer'
        severity='error'
      />
    </>
  );
};

export default TryOutPageAnswer;

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
import {
  getSoalDiagnopstik,
  idiagnostik_question,
} from '../../models/diagnostik_question';
import {
  createDiagnostikStudentAnswer,
  iCreate_diagnostik_student_answer,
} from '../../models/diagnostik_student_answer';
import AnswerChoice from './component/answerChoice';
import ButtonAppBarStudent from './component/appBarStudent';
import CircularProgress from '@mui/material/CircularProgress';
import { Toast } from '../../components/toast';
import useStore from '../../store/globalState';

const DiagnostikPageAnswer = () => {
  const [studentStatus, setstudentStatus] = React.useState(0);
  const [openToast, setOpenToast] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [DiagnostikQuestion, setDiagnostikQuestion] = React.useState<
    idiagnostik_question[] | undefined
  >(undefined);

  const handleToastOpen = () => {
    setOpenToast(true);
  };

  const handleToastClose = () => {
    setOpenToast(false);
  };

  async function soalDiangostik() {
    const data = await getSoalDiagnopstik();
    setDiagnostikQuestion(data);
  }

  function refreshPage() {
    window.location.reload();
  }

  useEffect(() => {
    soalDiangostik();
  }, []);
  const token = useStore((state) => state.token);
  const idStudent = useStore((state) => state.id);
  const studentAnswer = React.useRef<iCreate_diagnostik_student_answer[]>([]);
  const [openPopUp, setopenPopUp] = React.useState(false);

  const addNewStudentAnswer = (
    id_diagnostik: number,
    answer: string,
    alasan: number,
  ) => {
    const id_student = idStudent;
    if (studentAnswer.current.length !== 0) {
      const data = studentAnswer.current.filter((e) => {
        return e.id_question_diagnostik !== id_diagnostik;
      });
      data.push({
        id_question_diagnostik: id_diagnostik,
        id_student: id_student,
        answer: answer,
        alasan: alasan,
      });
      studentAnswer.current = data;
    } else {
      const data = [];
      data.push({
        id_question_diagnostik: id_diagnostik,
        id_student: id_student,
        answer: answer,
        alasan: alasan,
      });
      studentAnswer.current = data;
    }
  };

  const submitAnswer = async () => {
    let countanswer = 0;
    let countalasan = 0;
    studentAnswer.current.forEach((e) => {
      if (e.alasan !== -1) {
        countalasan++;
      }
      if (e.answer !== '') {
        countanswer++;
      }
    });
    if (
      DiagnostikQuestion?.length !== studentAnswer.current.length ||
      countalasan !== DiagnostikQuestion?.length ||
      countanswer !== DiagnostikQuestion?.length
    ) {
      handleToastOpen();
    } else {
      setLoading(true);
      const newAnswer = studentAnswer.current;
      const data = await createDiagnostikStudentAnswer(newAnswer, token);
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
              Kamu belum mengerjakan soal diagnostik!
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
                {DiagnostikQuestion
                  ? DiagnostikQuestion.map((e, index) => {
                      return (
                        <AnswerChoice
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

export default DiagnostikPageAnswer;

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
import { iCreate_diagnostik_student_answer } from '../../models/diagnostik_student_answer';
import AnswerChoice from './component/answerChoice';
import ButtonAppBarStudent from './component/appBarStudent';
import CircularProgress from '@mui/material/CircularProgress';

const DiagnostikPageAnswer = () => {
  const [studentStatus, setstudentStatus] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [DiagnostikQuestion, setDiagnostikQuestion] = React.useState<
    idiagnostik_question[] | undefined
  >(undefined);
  async function soalDiangostik() {
    const data = await getSoalDiagnopstik();
    setDiagnostikQuestion(data);
  }
  useEffect(() => {
    soalDiangostik();
  }, []);
  const studentAnswer = React.useRef<iCreate_diagnostik_student_answer[]>([]);
  const [openPopUp, setopenPopUp] = React.useState(false);

  const addNewStudentAnswer = (id_diagnostik: number, answer: string) => {
    const id_student = 1;
    if (studentAnswer.current.length !== 0) {
      const data = studentAnswer.current.filter((e) => {
        return e.id_question_diagnostik !== id_diagnostik;
      });
      data.push({
        id_question_diagnostik: id_diagnostik,
        id_student: id_student,
        answer: answer,
      });
      studentAnswer.current = data;
    } else {
      const data = [];
      data.push({
        id_question_diagnostik: id_diagnostik,
        id_student: id_student,
        answer: answer,
      });
      studentAnswer.current = data;
    }
  };

  const submitAnswer = () => {
    setLoading(true);
    console.log(studentAnswer.current);
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
            <Box>
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
    </>
  );
};

export default DiagnostikPageAnswer;

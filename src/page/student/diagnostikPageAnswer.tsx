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
} from '@mui/material';
import React, { useEffect } from 'react';
import {
  getSoalDiagnopstik,
  idiagnostik_question,
} from '../../models/diagnostik_question';
import AnswerChoice from './component/answerChoice';
import ButtonAppBarStudent from './component/appBarStudent';

const DiagnostikPageAnswer = () => {
  const [studentStatus, setstudentStatus] = React.useState(0);
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
  const [studentAnswer, setstudentAnswer] = React.useState([]);
  const [openPopUp, setopenPopUp] = React.useState(false);

  const addNewStudentAnswer = (
    id_diagnostik: number,
    id_student: number,
    answer: string,
  ) => {};

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
              {DiagnostikQuestion
                ? DiagnostikQuestion.map((e) => {
                    return (
                      <AnswerChoice
                        question={e}
                        addNewStudentAnswer={addNewStudentAnswer}
                      />
                    );
                  })
                : ''}
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

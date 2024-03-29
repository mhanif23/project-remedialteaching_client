import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { idiagnostik_question } from '../../../models/diagnostik_question';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const AnswerChoice = ({
  question,
  addNewStudentAnswer,
  index,
}: {
  question: idiagnostik_question;
  addNewStudentAnswer: (
    id_diagnostik: number,
    answer: string,
    alasan: number,
  ) => void;
  index: number;
}) => {
  const [active, setactive] = React.useState('');
  const [Alasanactive, setAlasanactive] = React.useState('');
  const studentAnswer = React.useRef({
    answer: '',
    alasan: -1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, no: number) => {
    if (no === 0) {
      studentAnswer.current.answer = e.target.value;
      setactive(e.target.value);
      addNewStudentAnswer(
        question.id,
        studentAnswer.current.answer,
        studentAnswer.current.alasan,
      );
    } else {
      setAlasanactive(e.target.value);
      studentAnswer.current.alasan = Number(e.target.value);
      addNewStudentAnswer(
        question.id,
        studentAnswer.current.answer,
        studentAnswer.current.alasan,
      );
    }
  };

  return (
    <>
      <Box
        sx={{
          minHeight: 100,
          mb: 3,
          border: '1px solid lightBlue',
          borderRadius: '5%',
        }}
      >
        <Box
          sx={{
            ml: 2,
            mt: 1,
          }}
        >
          <Grid container spacing={1}>
            <Grid item xs={1}>
              <Typography align='center' variant='h6'>
                {index + 1}
              </Typography>
            </Grid>
            <Grid item xs={11}>
              <Typography variant='subtitle1'>{question.question}</Typography>
            </Grid>
            {question.media ? (
              <Grid item xs={12}>
                <img loading='lazy' src={question.media} alt={question.media} />
              </Grid>
            ) : (
              ''
            )}

            <Grid
              item
              xs={12}
              sx={{
                ml: 4,
              }}
            >
              <RadioGroup
                aria-label='gender'
                defaultValue={active}
                name='radio-buttons-group'
                onChange={(e) => handleChange(e, 0)}
              >
                <FormControlLabel
                  value={question.option1}
                  control={<Radio required={true} />}
                  label={
                    question.option1[0] === 'h' &&
                    question.option1[1] === 't' &&
                    question.option1[2] === 't' ? (
                      <>
                        <img src={question.option1} alt={question.option1} />
                      </>
                    ) : (
                      question.option1
                    )
                  }
                />
                <FormControlLabel
                  value={question.option2}
                  control={<Radio required={true} />}
                  label={
                    question.option2[0] === 'h' &&
                    question.option2[1] === 't' &&
                    question.option2[2] === 't' ? (
                      <>
                        <img src={question.option2} alt={question.option2} />
                      </>
                    ) : (
                      question.option2
                    )
                  }
                />
                <FormControlLabel
                  value={question.option3}
                  control={<Radio required={true} />}
                  label={
                    question.option3[0] === 'h' &&
                    question.option3[1] === 't' &&
                    question.option3[2] === 't' ? (
                      <>
                        <img src={question.option3} alt={question.option3} />
                      </>
                    ) : (
                      question.option3
                    )
                  }
                />
                <FormControlLabel
                  value={question.option4}
                  control={<Radio required={true} />}
                  label={
                    question.option4[0] === 'h' &&
                    question.option4[1] === 't' &&
                    question.option4[2] === 't' ? (
                      <>
                        <img src={question.option4} alt={question.option4} />
                      </>
                    ) : (
                      question.option4
                    )
                  }
                />
                <FormControlLabel
                  value={question.option5}
                  control={<Radio required={true} />}
                  label={
                    question.option5[0] === 'h' &&
                    question.option5[1] === 't' &&
                    question.option5[2] === 't' ? (
                      <>
                        <img src={question.option5} alt={question.option5} />
                      </>
                    ) : (
                      question.option5
                    )
                  }
                />
              </RadioGroup>
            </Grid>
            <Grid
              item
              xs={11}
              sx={{
                mt: 1,
                mb: 1,
                ml: 3,
              }}
            >
              <Typography variant='subtitle1'>
                Tingkat keyakinan saya terhadap jawaban dan alasan saya…
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                ml: 4,
              }}
            >
              <RadioGroup
                aria-label='alasan'
                defaultValue={Alasanactive}
                name='alasan'
                onChange={(e) => handleChange(e, 1)}
              >
                <FormControlLabel
                  value={1}
                  control={<Radio required={true} />}
                  label='Menebak'
                />
                <FormControlLabel
                  value={2}
                  control={<Radio required={true} />}
                  label='Sangat tidak yakin'
                />
                <FormControlLabel
                  value={3}
                  control={<Radio required={true} />}
                  label='Tidak yakin'
                />
                <FormControlLabel
                  value={4}
                  control={<Radio required={true} />}
                  label='Yakin'
                />
                <FormControlLabel
                  value={5}
                  control={<Radio required={true} />}
                  label='Sangat yakin'
                />
              </RadioGroup>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};
export default AnswerChoice;

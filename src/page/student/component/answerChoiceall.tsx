import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { idiagnostik_question } from '../../../models/diagnostik_question';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const AnswerChoiceall = ({
  question,
  addNewStudentAnswer,
  index,
}: {
  question: idiagnostik_question;
  addNewStudentAnswer: (id_diagnostik: number, answer: string) => void;
  index: number;
}) => {
  const [active, setactive] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setactive(e.target.value);
    addNewStudentAnswer(question.id, e.target.value);
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
                onChange={handleChange}
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
          </Grid>
        </Box>
      </Box>
    </>
  );
};
export default AnswerChoiceall;

import { Container, Typography } from '@mui/material';
import ButtonAppBar from '../../components/appBar';

const Questions = () => {
  return (
    <>
      <ButtonAppBar />
      <Container>
        <Typography align='center' variant='h2' sx={{ mt: 5 }}>
          List Questions
        </Typography>
      </Container>
    </>
  );
};

export default Questions;
